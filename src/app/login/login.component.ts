import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .well {
    max-width:450px; 
    min-width:285px; 
    margin: auto;
    margin-bottom: 100px;
  }
  `],
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit {


  constructor( private router: Router, private authService: AuthService ) {  }

  ngOnInit() { }

  login( form: NgForm ) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signinUser( email, password );
  }

  cancel() {
    this.router.navigate([""]);
  }
}
