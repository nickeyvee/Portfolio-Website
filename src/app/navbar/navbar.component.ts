import { Component, AfterViewInit, OnInit, AfterViewChecked } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'navi-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [ AuthService ]
})

export class NavComponent implements AfterViewChecked {
    routeChanged: boolean = false;
    currentRoute: string;
    lastRoute: string;

    constructor( public authService: AuthService, public router: Router ) {
        
        router.events.subscribe(() => {
            if( this.lastRoute !== router.url ) {
                this.routeChanged = true;
                this.lastRoute = router.url;
            } else {
                this.routeChanged = false; 
            }
        })
    }
    
    ngAfterViewChecked() {
        this.currentRoute = this.router.url;
        console.log( this.currentRoute );
    }
    
    onClick() {
        this.currentRoute = this.router.url;
        console.log( this.currentRoute );        
    }
 
    onRouteChange() {
        return this.routeChanged;
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }

}