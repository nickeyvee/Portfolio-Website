import * as $ from 'jquery';

export class WikiService {

   request( url, callback ) {
      const tempArray = [];      

      $.ajax({ type: "GET", url: url, dataType: "JSON",
         success: function(data) {

         console.log(data);
         for ( let i = 0; i < data[3].length; i++) {
            
            const name = data[1][i];
            const desc = data[2][i];
            const url = data[3][i];

            tempArray.push({ name: name, description: desc, url: url })
            }
            callback( tempArray );
         },
         error: function( errorMessage ) {
            alert("Error");
         }
      })
   }
}