import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styles: [`
  .well {
    max-width:450px; 
    min-width:285px; 
    margin: auto;
    margin-bottom: 100px;
  }
  `]
})
export class AdminComponent {

  constructor( 
    private dataService: DataService, private authService: AuthService, private router: Router
  ) { }

  logout() {
      this.authService.logout();
      this.router.navigate(['login']);
  }

}
