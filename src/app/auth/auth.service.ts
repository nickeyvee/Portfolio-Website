//import * as firebase from 'firebase';
import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";


@Injectable()

export class AuthService {
    currentUser: firebase.User;
    errorMSG: string = null;

    constructor( private afAuth: AngularFireAuth, private router: Router ) {
       afAuth.authState.subscribe( user => this.currentUser = user ) 
       //console.log( typeof this.currentUser );
    }

    signinUser( email: string, password: string ) {
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(() => this.router.navigate(['admin']))
            .catch( error => {
                console.log( error.message );
                this.errorMSG = error.message;
            });
    }

    logout() {
        this.afAuth.auth.signOut()
            .then( () => {
                console.log( "User logged out!")
            })
    }

    loginError() {
        return this.errorMSG !== null;
    }

    isAuthenticated() { 
        return this.currentUser !== null;
    }
}