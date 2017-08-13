import { Component, OnInit } from '@angular/core';
import { AboutModel } from "app/about/about.model";
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ AboutModel ]
})
export class AboutComponent {
  basic: any;
  skills: string[];

  constructor( public aboutModel: AboutModel ) {
    this.basic = aboutModel.basic;
    this.skills = aboutModel.skills;
  }
  
}
