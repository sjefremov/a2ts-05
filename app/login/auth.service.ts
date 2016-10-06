import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    setLogin(user : string) {
        localStorage.setItem('user', user);
    }

    setLogout() {
        localStorage.removeItem('user');
    }

    isAuthenticated() {
        return !!localStorage.getItem('user');
    }

}