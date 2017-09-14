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
  ]
})
export class PortfolioComponent {

    projects: any[];

    constructor( public projectModel: ProjectModel, public elementRef: ElementRef ) {
      this.projects = projectModel.projects;
    }

    toggle( event ) {
      const Query = ( el ) => event.target.querySelector( el );

      // event.target.classList.toggle('active');
      Query('img').classList.toggle('active');
      // Query('img').classList.toggle('blur');
      Query('.media-text').classList.toggle('hidden');
    }
}
