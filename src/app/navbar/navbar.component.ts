import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
    selector: 'navi-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: [ AuthService ]
})

export class NavComponent {
    routeChanged: boolean = false;
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

    onRouteChange() {
        return this.routeChanged;
    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['login']);
    }

}