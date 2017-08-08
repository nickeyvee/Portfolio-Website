import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  form: FormGroup;

  firstname = new FormControl('', Validators.required );

  subjects = [
    { value: "Need a website" },
    { value: "Have a question" },
    { value: "Looking to hire" }
  ]

  constructor( 
    public dataService: DataService, 
    public router: Router,
    public fb: FormBuilder
   ) {
    this.form = fb.group({
      firstname: this.firstname,
      email: ['', Validators.required ],
      phone: ['', Validators.required ],
      subject: ['', Validators.required ],
      comments: ['', Validators.required ]
    })
  }

  onSubmit( ) {

    console.log( this.form );
    
    let email = this.form.value.email;
    let phone = this.form.value.phone;
    let message = this.form.value.comments;
    let firstName = this.form.value.firstname;
    let subject = this.form.value.subject;

    let callback = ( err, res ) => {
      if ( err ) {
        console.log( res );
      } else {
        console.log( res );
        this.router.navigate(['about']);
      }
    }  
    this.dataService.sendEmail( firstName, phone, email, message, callback );
  }

}