import { Component, OnInit } from '@angular/core';
import { Inject, Injectable, AfterViewChecked, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: any ) {}

//   ngAfterViewInit() {
    // Component views have been checked
//   }
  ngOnInit() {

   // $(".box").addClass("avoid-clicks");
	$(".box").toggleClass("addColor");
	$("#postgame").hide();
	$("#menu").hide();
	$("#menu").fadeIn(800);

	var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	var winCase = null;
	var moves = [];
	var turns = 0;
	var player = null;
	var AI = null;
	var choices = ["X", "O"];
	var endedTurn = false;
	var win = [

		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		// vertical..
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		//horizontal..
		[0, 4, 8],
		[2, 4, 6]
	];
	var y = 0;

	var element = function(id) {
		return (<HTMLInputElement>document.getElementById(id));
	};
	var value = function(id) {
		return (<HTMLInputElement>document.getElementById(id)).value;
	};
	// colors in winning pattern in sequential fashion.
	function animate() {
		lockTiles();
		setTimeout(function() {
			$(element(winCase[y])).toggleClass("addColor");
			y++;
			if (y < 3) {
				animate();
			}
		}, 300);
		setTimeout(function() {
			$("#postgame p").html("You lost! Try again..");
			$("#postgame").fadeIn(600);
		}, 1100);
	}
	// saves the latest state of the game to memory.
	function updateTiles() {
		moves = [];
		board.forEach(function(id) {
				moves.push(element(id).value);
			})
			// makes tile unclickable after occupation;
		for (var i = 0; i < moves.length; i++) {
			if (moves[i] !== " ") $(element(i)).addClass("avoid-clicks");
		}
	}
	// will take center tile if possilbe..
	function takeCenter() {
		if (moves[4] === " ") {
			element(4).setAttribute("value", AI);
		} else if (turns === 1) {
			// takes a random corner if center is occupied.
			var corners = [0, 2, 6, 8];
			element(corners[Math.floor((Math.random() * 3) + 1)]).value = AI;
		}
		return;
	}
	// throws a wrench in your chance to win!
	function defendTile() {
		for (var i = 0; i < win.length; i++) {
			var pairs = 0;
			for (var x = 0; x < win[i].length; x++) {
				if (value(win[i][x]) === player) pairs++;
				if (pairs === 2) {
					for (var index = 0; index < win[i].length; index++) {
						if (value(win[i][index]) === " ") {
							element(win[i][index]).value = AI;
							endedTurn = true;
							return;
						}
					}
				}
			}
		}
	}
	// Computer will complete a pattern if an opportunity presents itself.
	function takeWin() {

		for (var i = 0; i < win.length; i++) {
			var pairs = 0;
			for (var x = 0; x < win[i].length; x++) {
				if (value(win[i][x]) === AI) pairs++;
				if (pairs === 2) {
					for (var index = 0; index < win[i].length; index++) {
						if (value(win[i][index]) === " ") {
							winCase = win[i];
							element(win[i][index]).value = AI;
							endedTurn = true;
							animate();
						}
					}
				}
			}
		}
	}
	// hard-coded sequence of filters, for common board layouts and tactics.
	function machineAI() {

		if (endedTurn === false) {
			// special use cases.
			if (player === value(1) && player === value(5) && value(2) === " ") {
				element(2).value = AI;
				endedTurn = true;
			} else if (player === value(3) && player === value(1) && value(0) === " ") {
				element(0).value = AI;
				endedTurn = true;
			} else if (player === value(7) && player === value(3) && value(6) === " ") {
				element(6).value = AI;
				endedTurn = true;
			} else if (player === value(7) && player === value(5) && value(8) === " ") {
				element(8).value = AI;
				endedTurn = true;
			} else if (player === value(4) && player === value(2) && value(0) === " ") {
				element(0).value = AI;
				endedTurn = true;
			} else if (player === value(4) && player === value(0) && value(2) === " ") {
				element(2).value = AI;
				endedTurn = true;
			} else if (player === value(4) && player === value(6) && value(0) === " ") {
				element(0).value = AI;
				endedTurn = true;
			} else if (player === value(4) && player === value(8) && value(2) === " ") {
				element(2).value = AI;
				endedTurn = true;
			}
			updateTiles();
		}
	}
	// will make the best possible move under current circumstances.
	function predictionAI() {

		if (endedTurn === false && turns >= 2) {
			var bestCase = [];
			var whiteSpace = 0;

			win.forEach(function(a) {
					var arr = [];
					bestCase.push(arr);
					a.forEach(function(b) {
						//log(value(b));
						arr.push(value(b));
					})
				})
				// find best possible move.
			for (var i = 0; i < bestCase.length; i++) {
				whiteSpace = 0;
				for (var x = 0; x < bestCase[i].length; x++) {
					if (bestCase[i][x] === " " && bestCase[i].indexOf(player) === -1) whiteSpace++;
					if (whiteSpace === 2) {
						element(win[i][x]).value = AI;
						endedTurn = true;
						return;
					}
				}
			}
		}
	}
	// if all other algorithims are exhausted, take the first empty tile.
	function forceMove() {
		if (endedTurn === false && turns > 2) {
			for (var i = 0; i < moves.length; i++) {
				if (moves[i] === " ") {
					element(i).value = AI;
					endedTurn = true;
					return;
				}
			}
		}
	}
	// ends game if AI doesn't win in alotted time.
	function forceDraw() {
		if (turns === 5) {
			$(".box").addClass("avoid-clicks");
			$("#postgame p").html("It's a draw..");
			$("#postgame").fadeIn(600);
		}
	}

	function lockTiles() {
		for (var i = 0; i < board.length; i++) {
			$(element(i)).addClass("avoid-clicks");
			console.log(i, "disabled!");
		}
	}
	$("#menu input").click(function() {
		player = $(this).attr("value");
		// make boxes clickable after selection.
		$(".box").removeClass(".avoid-clicks");
		// assign "X" or "O" to AI..
		for (var i = 0; i < choices.length; i++) {
			if (player !== choices[i]) {
				AI = choices[i];
			}
		}
	}); // popup menu.
	$(".box").click(function() {

		if ((<HTMLInputElement>this).value === " ") {
			turns++;
			endedTurn = false;
			this.setAttribute("value", player); // Player's move.
			$(this).addClass("avoid-clicks");
			//$(this).blur(); // disables this element to prevent doulbe clicking.
			takeWin();

			if (!endedTurn) {
				defendTile();
				updateTiles();
				takeCenter();
				machineAI();
				predictionAI();
				forceMove();
				updateTiles();
			}
			forceDraw();
		}
	});

	$("#menu").click(function() {
		$("#menu").fadeOut(1000);
      $("#buttons").removeClass("avoid-clicks");
      $(".box").removeClass("avoid-clicks");
	}); // start menu.
	$("#postgame input").click(function() {
		turns = 0;
		y = 0;
		$(".box").removeClass("addColor");

		board.forEach(function(reset) {
			element(reset).value = " ";
		});

		$("#postgame").fadeOut(800);
		// allow delay for fadeOut.
		setTimeout(function() {
			// $(".box").css();
			// prompt user to choose "X" or "O"
			$("#menu").fadeIn(800);
		}, 800);

	}); // endgame menu.
  }

}
