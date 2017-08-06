import { Component, OnInit } from '@angular/core';
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

  ]
})
export class PortfolioComponent {

    row1: any[];
    row2: any[];
    allProjects: any[];

    constructor( public projectModel: ProjectModel ) {
      let projects = projectModel.projects;
      this.allProjects = projects;

      if ( projects.length % 2 === 0 ) {  
        this.row1 = projects.slice( 0, projects.length / 2 );
        this.row2 = projects.slice( projects.length / 2, projects.length );
      } else {
        this.row1 = projects.slice( 0, (Math.round( projects.length / 2)) - 1);
        this.row2 = projects.slice( (Math.round( projects.length / 2)) - 1, projects.length );
      }
    }

}
