import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { emailjs } from "emailjs/email";
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.fetchData();
  }
}
