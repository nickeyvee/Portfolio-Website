import { Component, OnInit, Inject } from '@angular/core';
import { WikiService } from "app/projects/wiki-viewer/wiki-viewer.service";
import { MdPaginatorModule } from '@angular/material';
import { DOCUMENT } from "@angular/platform-browser";
import * as $ from 'jquery';

@Component({
  selector: 'app-wiki-viewer',
  templateUrl: './wiki-viewer.component.html',
  styleUrls: ['./wiki-viewer.component.css'],
  providers: [ WikiService ]
})
export class WikiViewerComponent implements OnInit {
  results: any[] = [];
  input: string = "";

  constructor( 
   @Inject(DOCUMENT) private document: any,  private wikiService: WikiService ) { }

  ngOnInit() {
      document.addEventListener("DOMContentLoaded", function() {
      const search = document.getElementById("search");

      search.addEventListener( "blur", () => {
         search.style.transition = "0.2s";
      });

      // $('#search').bind("enterKey", function(e) {
      //    //do stuff here// LOGS THE SEARCH QUERY FROM INPUT BOX (#search).
      //    var searchQuery = $(this).val().toString().split(" ").join("_");
      //    // LOGS THE SEARCH QUERY FROM INPUT BOX (#search).
      //    let url =`https://en.wikipedia.org/w/api.php?action=opensearch&search=${ searchQuery }&format=json&callback=?`;
      // });

      $("#search").keyup(function(event) {
         if (event.keyCode === 13) {
            //
            //if the keycode is equal to 13, #search

            $("#results").children().remove();
            // This line removes any previous results from past search queries so you don't have a giant never-ending list.
            $(this).trigger("enterKey");
         }
      })
   })
  }

  onSubmit( searchQuery ) {
    const url =`https://en.wikipedia.org/w/api.php?action=opensearch&search=${ searchQuery }&format=json&callback=?`;
    this.results = [];
    const callback = res => {
       res.map( obj => this.results.push( obj ));
    }
    this.wikiService.request( url, callback );
  }
}
