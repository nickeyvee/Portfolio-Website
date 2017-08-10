import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ProjectModel } from './portfolio.model';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [
    ProjectModel
  ],
  animations: [
    // trigger('stateChange', [
    //   state('inactive', style({
    //     display: "none" 
    //   })),
    //   state('active',   style({
    //     display: "show"        
    //     // backgroundColor: '#cfd8dc',
    //     // transform: 'scale(1.1)'
    //   })),
    //   transition('inactive => active', animate('100ms ease-in')),
    //   transition('active => inactive', animate('100ms ease-out'))
    // ])
  ]
})
export class PortfolioComponent  {

    // state: string = "inactive";
    // active: boolean = false;
    projects: any[];

    constructor( public projectModel: ProjectModel, public elementRef: ElementRef ) {
      this.projects = projectModel.projects;
    }

    toggle( event ) {
      const Query = ( el ) => event.target.querySelector( el );

      event.target.classList.toggle('active');
      // Query('img').classList.toggle('active');
      // Query('img').classList.toggle('blur');
      Query('.media-text').classList.toggle('hidden');
    }
}
