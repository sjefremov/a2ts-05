import { Component } from '@angular/core';
import { AuthService } from './login/index';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { 

    constructor(private authService : AuthService, private router : Router) {

    }

    isLoggedIn() {
        this.authService.isAuthenticated();
    }

    logout() {
        this.authService.setLogout();
        this.router.navigate(['/login'])
    }

 }
