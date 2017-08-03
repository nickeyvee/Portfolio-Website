import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  templateUrl: 'admin-menu.component.html'
})
export class AdminMenuComponent implements OnInit {
ll
  constructor( 
    public dataService: DataService, 
    public authService: AuthService, 
    public router: Router
  ) { }

  ngOnInit() {
    this.dataService.fetchData();
  }

  logout() {
      this.authService.logout();
      this.router.navigate(['login']);
  }
}
