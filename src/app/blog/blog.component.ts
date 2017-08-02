import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { AddPostComponent } from '../admin/add-post/add-post.component'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ AuthService ]
})
export class BlogComponent implements OnInit {
  zippyOpen: boolean = true;

  constructor( private authService: AuthService ) { }

  ngOnInit() {
  }
  
}
