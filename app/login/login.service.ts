import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class LoginService {

    constructor(private authService : AuthService) { }

    doLogin(user : string, pass : string) {

        //TODO on server

        if (user === "admin" && pass === "admin") {
            this.authService.setLogin(user);
            return true;
        }

        this.authService.setLogout();
        return false;

    }

}