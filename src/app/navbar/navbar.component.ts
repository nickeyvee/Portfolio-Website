import { Component, AfterViewInit, OnInit, AfterViewChecked } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { Router, NavigationEnd, NavigationStart } from "@angular/router";

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
        
        router.events.subscribe( event => {
            if ( event instanceof NavigationStart ) {
                if( this.lastRoute !== router.url ) {
                    this.routeChanged = true;
                    this.lastRoute = router.url;
                } else {
                    this.routeChanged = false; 
                }
            }
        });
        
        router.events.subscribe(() => {

        })
    }
    
    ngAfterViewChecked() {
        this.currentRoute = this.router.url;
    }
    
    onClick() {
        this.currentRoute = this.router.url;     
    }
 
    onRouteChange() {
        return this.routeChanged;
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }

}