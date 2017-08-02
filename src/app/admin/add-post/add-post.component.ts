import { Component } from "@angular/core";
import { AuthService } from "app/auth/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Post } from "app/model/post.model";
import { DataService } from "app/data.service";

@Component({
    selector: 'add-post',
    templateUrl: 'add-post.component.html',
    styleUrls: ['add-post.component.css'],
    providers: [ AuthService ]
})

export class AddPostComponent {
    isOpen: boolean = true;
    currentURL: string;
    postTitle: string;
    postSubTitle: string;
    postBody: string;
    imgTitle: string;
    imageSRC: string;
    post: Post;

    constructor( private router: Router, private dataService: DataService ) {
        this.currentURL = router.url;
    }

    fileLoad( $event: any ) {

        let myReader: FileReader = new FileReader();    
        let file: File =  $event.target.files[0];

        this.imgTitle = file.name;
        myReader.readAsDataURL(file);

        myReader.onload = (e: any) => {
        this.imageSRC = e.target.result;
        }
    }

    onSubmit( form: NgForm ) {
        this.postTitle = form.value.title;
        this.postBody = form.value.body;
        this.postSubTitle = form.value.subtitle;

        if( this.imageSRC === undefined ) this.imageSRC = "https://s3.amazonaws.com/freecodecamp/wide-social-banner.png";

        this.post = new Post(
            
            this.postTitle,
            this.postSubTitle,
            this.postBody,
            this.imgTitle,
            this.imageSRC.substring(23)
        )
        this.dataService.postData( this.post );
        this.dataService.fetchData();
    }

    toggle() {
        return this.isOpen !== true ? 
        this.isOpen = true : this.isOpen = false;
    }

}