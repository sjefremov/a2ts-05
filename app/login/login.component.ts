import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

private user : string;
private pass : string;
private errMsg : string = '';

    constructor(private loginService : LoginService, private router : Router) { }

    ngOnInit() { }

    doLogin() {
        if (this.loginService.doLogin(this.user, this.pass)) {
            this.router.navigate(['/recipes']);
        }
        else {
            this.errMsg = 'Problem with logging...';
        }
    }
}