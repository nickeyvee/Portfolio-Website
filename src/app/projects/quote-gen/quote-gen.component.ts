import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-quote-gen',
  templateUrl: './quote-gen.component.html',
  styleUrls: ['./quote-gen.component.css']
})
export class QuoteGenComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: any ) { }

  ngOnInit() {
   let api = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

   function getQuote() { 
		$.getJSON( api, function(data) {
			let currQuote = data.quoteText + " -" + data.quoteAuthor;
			let tweetThis = encodeURIComponent(currQuote);
			//prepares current quote for tweet.
			console.log(currQuote);

			$(".quote").fadeOut(850, function() {
				$(this).hide().fadeIn(850).html(data.quoteText)
			})
			$(".author").fadeOut(850, function() {
				$(this).hide().fadeIn(850).html(data.quoteAuthor)
			})
			$(".twitter-btn").attr("href", 'https://twitter.com/intent/tweet?text=' + tweetThis);
		})
	};
   getQuote(); 
   
   $(".get-quote").on("click", function() {
      getQuote();
   }); 
  }

}
