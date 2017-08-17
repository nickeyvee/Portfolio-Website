import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerTransition } from './router.animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { emailjs } from "emailjs/email";
import { Router, NavigationStart } from "@angular/router";
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor( private dataService: DataService, private router: Router ) { 
    router.events.subscribe( event => {
      if ( event instanceof NavigationStart ) {
        window.scrollTo( 0, 0 ); // <=== Scroll to top when router state changes.
      }
    });
  }

  ngOnInit() {
    // console.log( window.outerWidth );
    this.dataService.fetchData();
  }

  onRouteChange( el ) {
    console.log( el.activatedRouteData.state );
  }

  getState( outlet ) {
    if ( window.outerWidth > 650 ) {
      return outlet.activatedRouteData.state;
    }
  }
}
