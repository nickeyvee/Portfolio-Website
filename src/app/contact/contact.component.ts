import { FormGroup, FormControl, Validators, FormBuilder }
   from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DialogComponent } from "app/dialog/dialog.component";
import { DataService } from "app/data.service";
import { Router } from "@angular/router";
import { MdDialog } from "@angular/material";

@Component({
   selector: 'app-contact',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.css']
})
export class ContactComponent {

   form: FormGroup;

   firstname = new FormControl('', Validators.required);

   subjects = [
      { value: "Need a website" },
      { value: "Have a question" },
      { value: "Looking to hire" }
   ]

   constructor(
      public dataService: DataService,
      public router: Router,
      public fb: FormBuilder,
      public dialog: MdDialog
   ) {
      this.form = fb.group({
         firstname: this.firstname,
         email: ['', Validators.required],
         phone: ['', Validators.required],
         subject: ['', Validators.required],
         comments: ['', Validators.required]
      })
   }

   onSubmit() {

      let email = this.form.value.email;
      let phone = this.form.value.phone;
      let message = this.form.value.comments;
      let firstName = this.form.value.firstname;
      let subject = this.form.value.subject;

      console.log(email, phone, message, firstName);

      let callback = (err, res) => {
         if (err) {
            console.log(res);
         } else {
            console.log(res);
            this.dialog.open(DialogComponent);
            this.router.navigate(['about']);
         }
      }
      this.dataService.sendEmail(firstName, phone, email, message, callback);
   }

   parseEmail() {
      
   }

   parsed: string = '';

   parsePhoneNumber(event) {
      const re = /[0-9]/g;
      let inputChar = String.fromCharCode(event.charCode);

      if( re.test(inputChar) === false ) {
         console.log( true );
         event.preventDefault();
      }
      
      const stringArray = event.target.value.split('');
      const backspace = event.keyCode === 8;

      const filterNumbers = stringArray.filter(function (el) {
         return el.match(/\d+/g);
      });

      const numbers = filterNumbers.join('');

      let city, phone;

      switch (numbers.length) {
         case 1:
         case 2:
         case 3:
            city = numbers.slice(0, 3);
            break;

         default:
            city = numbers.slice(0, 3);
            phone = numbers.slice(3);
      }

      if (phone) {
         if (phone.length > 3) {
            // console.log( `(${ city }) ${ phone.slice(0, 3) } - ${ phone.slice(3) }`.length );
            return this.parsed = `(${city}) ${phone.slice(0, 3)} - ${phone.slice(3)}`;
         } else {
            return this.parsed = `(${city}) ${phone.slice(0, 3)}`;
         }
      } else {
         if (city.length === 3 && !backspace) {
            if (!backspace) {
               return this.parsed = `(${city}) `;
            } else {
               return this.parsed = `(${city})`;
            }
         } else if (city) {
            return this.parsed = '(' + city;
         }
      }
   }
}