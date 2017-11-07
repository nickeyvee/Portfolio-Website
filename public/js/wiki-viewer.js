(function () {
   const search = document.getElementById("search");

   const results = [];

   search.addEventListener("blur", function () {
      search.style.transition = "0.2s";
   });


   $("#search").keyup(function () {
      if (event.keyCode === 13) {
         //if the keycode is equal to 13, #search

         $("#results").children().remove();
         // This line removes any previous results from past search queries so you don't have a giant never-ending list.
         $(this).trigger("enterKey");

         onSubmit(this.value);
      }
   })

   function onSubmit(searchQuery) {
      const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${ searchQuery }&format=json&callback=?`;
      const callback = html => {
         // res.map(obj => results.push(obj));
         console.log(html);

         $('#DocumentResults').append(html);
      }
      request(url, callback);
   }

   function request(url, callback) {
      const tempArray = [];

      $.ajax({
         type: "GET",
         url: url,
         dataType: "JSON",
         success: function (data) {

            console.log(data);
            let elements = '';

            for (let i = 0; i < data[3].length; i++) {

               const name = data[1][i];
               const desc = data[2][i];
               const url = data[3][i];

               elements +=
               `<li>
                  <a class="flex-item" target="_blank" href="${ url }">
                     <h3>${ name }</h3>
                     <p>${ desc }</p>
                  </a>
               </li>`
            }
            callback(elements);
         },
         error: function (errorMessage) {
            alert("Error");
         }
      })
   }
})();