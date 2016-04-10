import {Component, OnInit} from 'angular2/core';
import {LoginService} from './login.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Component({
    selector: 'login-form',
    templateUrl: 'app/auth/login-form.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
})

export class LoginFormComponent implements OnInit {
    model: any = {
        username: "m@boullouz.com",
        password: "123*Aa",
        rememberMe: false
    };

    constructor(private loginService: LoginService, private router: Router) {
        console.log("Login-form loaded!");
     }
    ngOnInit() {
       
     }
    login() {
        this.loginService.login(this.model).subscribe(
            serverResponse => this.handleResponse(serverResponse),
            err => console.log(err)
        )
    }
    handleResponse(response: any) {
        if (response == "1") {
            let auth = "Basic " + btoa(this.model.username + ":" + this.model.password);
            localStorage.setItem("auth", auth);
            console.log("OK: saved to localStorage");
            this.loginService.goToProjects();
            return 1; //case navigate fails!
        }
        console.log("KO!");
    }
 
}