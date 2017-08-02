import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html'
})
export class AdminComponent implements OnInit {

  constructor( 
    private dataService: DataService, private authService: AuthService, private router: Router
  ) { }

  ngOnInit() {
    this.dataService.fetchData();
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['login']);
  }
}
