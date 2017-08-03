import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "app/auth/auth.service";
import { FormGroup, FormControl, Validators, FormBuilder } 
  from "@angular/forms";

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
    console.log( this.form );

    const email = this.form.value.email;
    const password = this.form.value.password;

    this.authService.signinUser( email, password );
  }

  cancel() {
    this.router.navigate([""]);
  }
}
