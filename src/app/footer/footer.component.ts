import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from "@angular/router";
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor( public router: Router, public authService: AuthService ) {
    router.events.subscribe( event => {
      if ( event instanceof NavigationStart ) {
        
      }
    });
  }
}
