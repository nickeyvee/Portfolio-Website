$(document).ready(function () {
   $(".output").toggleClass("on");
   $(".light").toggleClass("lightOn");

   var allOn = false;
   var strictOn = false;
   var clickEvent = false;
   var simonOff = true;
   var startClicks = 0;
   var startInit = true;
   var timeEvent = [0, 1, 2, 3, 4, 5, 6, 7, 8];
   var strictDisabled = null;
   var count = 1;
   var index = 0;
   var cycle = 0;
   var i = 0;
   var activeElement = null;
   var gameMemory = [];
   var randomId = null;
   var audioElement = ["a", "b", "c", "d"];
   var regColors = ["rgb(0, 167, 74)", "rgb(204, 167, 7)", "rgb(159, 15, 23)", "rgb(9, 74, 143)"];
   var lightColors = ["rgb(26, 255, 129)", "rgb(247, 208, 34)", "rgb(235, 45, 55)", "rgb(39, 137, 231)"];

   randomInteger();

   function forceStop() {
      for (var y = 0; y < timeEvent.length; y++) {
         clearTimeout(timeEvent[y]);
      }
   }

   function ocillate() {

      console.log("ocillate called!", cycle);

      if (cycle < 4 && allOn) {
         timeEvent[0] = setTimeout(function () {

            $(".output").toggleClass("off on");

            timeEvent[1] = setTimeout(function () {

               if (allOn === true) {
                  $(".output").toggleClass("off on");
                  cycle++;
                  ocillate();
               } else {
                  return;
               }
            }, 350);
         }, 350);
      } else {
         return;
      }
   }

   function toggle() {
      $(".cell").toggleClass("avoid-clicks");
   }

   function randomInteger() {
      randomId = Math.round(Math.random() * 3);
   }

   function element(id) {
      return document.getElementById(id);
   }

   function getSound(id) {
      element(audioElement[id]).currentTime = 0;
      element(audioElement[id]).play();
   }

   function resetColors() {
      for (var i = 0; i < 4; i++) {
         $(element(i)).css("background", regColors[i]);
      }
   }

   function levelUp() {
      randomInteger();
      gameMemory.push(randomId); // add current move to memory;
   } // increment counter by +1.

   function countDown() {

      if (count > 0 && allOn) {

         timeEvent[2] = setTimeout(function () {
            if (allOn) {
               console.log("gameMemory", gameMemory[i], gameMemory); // << TEST.
               getSound(gameMemory[i]);
               $(element(gameMemory[i])).css("background", lightColors[gameMemory[i]]);
            } else {
               return;
            }
            timeEvent[3] = setTimeout(function () {
               if (allOn) {
                  $(element(gameMemory[i])).css("background", regColors[gameMemory[i]]);
                  count--;
                  i++;
               } else {
                  return;
               }
            }, 500);
            //console.log("count : " + count, i, gameMemory.length); // <<< TEST.

            if (allOn === true && i < gameMemory.length - 1) {
               countDown();
            }
         }, 1000);
      }
   }




   // ---- SIMULATE BUTTON PLAYTHROUGH ----


   function simonSays() {
      $(".output").removeClass("off").addClass("on");

      if (allOn && simonOff) {
         console.log("SIMON SAYS", count, gameMemory); // <<< TEST.
         i = 0;
         index = 0;
         cycle = 0;
         simonOff = false;
         $(".cell").addClass("avoid-clicks");

         if (count === 1 && startInit) {
            startInit = false;
            randomInteger();
            gameMemory.push(randomId); // add current move to memory;
            console.log("added number"); // >>> TEST.
         }
         count = gameMemory.length;

         if (count < 10) $(".count").html(" 0 " + count);
         else $(".count").html(count.toString()); // adjust for 2 digits.

         if (allOn) countDown();

         timeEvent[4] = setTimeout(function () {

            clickEvent = false;
            $(".cell").removeClass("avoid-clicks");

            timeEvent[5] = setTimeout(function () {

               if (clickEvent === false && allOn) {
                  index = 0;
                  $(".count").html(" ! ! ");
                  ocillate();
                  console.log("throw error", clickEvent, startClicks, allOn);
                  $(".cell").addClass("avoid-clicks");

                  timeEvent[6] = setTimeout(function () {
                     console.log("allOn" + allOn); // >>> TEST.
                     if (allOn && strictOn) {
                        cycle = 0; // resets accumulator inside of ocillator();
                        gameMemory = [];
                        randomInteger();
                        gameMemory.push(randomId);
                        $(".count").html(" 0 " + count);
                        simonSays();
                     } else if (allOn) {
                        cycle = 0; // resets accumulator inside of ocillator();
                        simonSays();
                     }
                  }, 5000); // re-invokes simonSays after time runs out.
               }
            }, 4000 + (gameMemory.length * 2500));
            if (allOn === false) $(".cell").addClass("avoid-clicks");

         }, 1250 * count);
      }
      simonOff = true;
   }




   // ---- INITIATE GAME ----

   function lightPower() {
      if (strictOn) {
         $(".light").toggleClass("lightOff lightOn");
         strictOn = false;
      }
   }

   function defaultColor() {
      setTimeout(function () {
         $(activeElement).css("background", regColors[activeElement.id]);
      }, 450);
   }

   $(".slider").click(function () {

      $("#switch").toggleClass("switchOn");
      $(".output").toggleClass("off on");
      $(".cell").addClass("avoid-clicks");
      resetColors();
      if (allOn === false) {
         startInit = true;
         allOn = true;
         count = 1;
         index = 0;
         gameMemory = [];
         $("#start").removeClass("avoid-clicks");
         $("#strict").removeClass("avoid-clicks");
         console.log("power button on");

      } else if (allOn) {
         forceStop();
         startClicks = 0; // to default.
         lightPower(); // to default.
         resetColors(); // revert to default button background-colors.
         $("#start").addClass("avoid-clicks");
         // $("#strict").button("disabled");
         $(".output").removeClass("on").addClass("off");
         $(".count").html(" - - ");
         allOn = false;
         console.log("power button off");
      }
   });

   $("#strict").click(function () {
      strictDisabled = this.disabled;

      if (strictOn === false && allOn === true) {
         strictOn = true;
      } else if (allOn === true) {
         strictOn = false;
      }
      if (allOn === true) {
         $(".light").toggleClass("lightOff lightOn");
         console.log("strict");
      }
   });

   $("#start").click(function () {
      startClicks++;
      $(".cell").addClass("avoid-clicks");
      forceStop(); // clear all timers.

      if (allOn && startClicks <= 1) {
         count = 1;
         index = 0;
         gameMemory = [];
         simonSays();
         console.log("start-init");

      } else if (startClicks > 1) {
         $(this).addClass("avoid-clicks");
         console.log("start-reset");
         forceStop();
         cycle = 0;
         index = 0;
         resetColors();
         randomInteger();
         gameMemory = [];
         gameMemory.push(randomId);
         count = gameMemory.length;

         $(".count").html(" - - ");
         ocillate();

         setTimeout(function () {
            // make it appear as if the game is reseting itself.
            console.log(count);
            $("#start").removeClass("avoid-clicks");
            simonSays();
         }, 5000);
      }
   });




   $(".cell").click(function () {

      getSound(this.id); // makes button noises when clicked.
      activeElement = this;
      clickEvent = true; // memory is later referenced by simonSays().
      cycle = 0; // reset accumulator.

      clearTimeout(timeEvent[5]);

      var currentId = parseInt(this.id);

      $(this).css("background", lightColors[parseInt(this.id)]);

      defaultColor();

      if (gameMemory[index] !== currentId && allOn) {
         //console.log("wrong!");
         index = 0;
         $(".cell").addClass("avoid-clicks");
         $(".count").html(" ! ! ");
         ocillate(); // wrong pattern, notifies user.

         timeEvent[7] = setTimeout(function () {

            if (strictOn) {
               gameMemory = [];
               randomInteger();
               gameMemory.push(randomId);
               $(".count").html(" 0 " + count);
               simonSays();
            } else {
               simonSays();
            }
         }, 3500);

      } else if (gameMemory[index] === currentId && allOn) {

         if (index === gameMemory.length - 1) {
            index = 0;
            toggle();

            timeEvent[8] = setTimeout(function () {
               if (allOn && count === 20) {
                  alert("YOU WIN");
                  gameMemory = [];
                  randomInteger();
                  gameMemory.push(randomId);
                  $(".count").html(" 0 " + count);
                  simonSays();
               } else if (allOn) {
                  console.log("level up");
                  levelUp();
                  simonSays();
               }
            }, 1800);
            console.log("reset");
         } else
         if (index < gameMemory.length) {
            index += 1;
         }
      }
   });
})();