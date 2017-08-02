import { Component, OnInit } from "@angular/core";
import { PostComponent } from './post.component'
import { DataService } from "app/data.service";


@Component({
    selector: 'app-posts',
    template: `
    <div class="container">
        <div class="col-sm-8 col-xs-8 col-md-6 col-sm-offset-2 col-md-offset-3">
            <div *ngFor="let post of posts">
                <post [data]="post"></post>
            </div>
        </div>
    </div>
    `,
    // directives: [ TweetComponent ],
    providers: [ DataService ]
})
export class PostsComponent implements OnInit {
    posts: any[];
    
    constructor( private dataService: DataService ){
        dataService.fetchData();
        this.posts = dataService.postsArr;

        //console.log( this.posts );

        // for ( let post of this.posts ) {
        //     console.log( "for" );
        //     firebase.storage().ref(`images/${post.imgTitle}`)                    
        //     .getDownloadURL().then( url => console.log( url ));
        // }
    }

    ngOnInit() { }
}