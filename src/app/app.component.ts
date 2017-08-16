import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerTransition } from './router.animations';
import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { emailjs } from "emailjs/email";
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styles: [`
    .container {
      width: 100%;
      margin: 0;
      padding: 0;
      min-height: 1000px;
    }
    main {
      width: 100%;
    }
    router-outlet {
      width: 100%;
    }
  `]
})
export class AppComponent implements OnInit {
  
  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.fetchData();
  }

  getState( outlet ) {
    return outlet.activatedRouteData.state;
  }
}
