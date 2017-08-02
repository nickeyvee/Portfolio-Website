import { Component, Input, OnInit } from '@angular/core';
import { LikeComponent } from './like.component';

@Component({
    selector: 'post',
    templateUrl: 'post.component.html',
    styleUrls: [ 'post.component.css' ],
    providers: [ LikeComponent ]
})
export class PostComponent implements OnInit {
    @Input() data;
    constructor( private likeComponent: LikeComponent ) { }
    
    ngOnInit() { }
}