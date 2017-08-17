import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "app/auth/auth.service";
import { FormGroup, FormControl, Validators, FormBuilder } 
  from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .container-fluid {
    width: 100%;
  }
  md-card {
    background-color: rgba(0,0,0,0.2);
    max-width:450px; 
    min-width:285px; 
    margin: auto;
  }
  .return {
    background-color: rgba(0,0,0,0.2);
    color: #666666;
  }
  `],
  providers: [ AuthService ]
})
export class LoginComponent {

  form: FormGroup;

  email = new FormControl('', Validators.required );

  constructor( 
    public router: Router, 
    public fb: FormBuilder,
    public authService: AuthService )
  { 
    this.form = fb.group({
      email: this.email,
      password: ['', Validators.required ]
    })
  }

  login( ) {
    this.authService.signinUser( 
      this.form.value.email, 
      this.form.value.password 
    )
  }

  cancel() {
    this.router.navigate([""]);
  }
}
