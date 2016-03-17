import {Component, OnInit} from 'angular2/core';
import {LoginService} from './login.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
@Component({
    selector: 'login-form',
    templateUrl: 'app/auth/login-form.component.html',  
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService,ROUTER_PROVIDERS] 
})

export class LoginFormComponent implements OnInit {
    model: any = {
        username: "a@b.c",
        password: "123*Aa",
        rememberMe: false
    };

    constructor(private loginService: LoginService) { }
    ngOnInit() { }
    login() {
        this.loginService.check(this.model).subscribe(
            serverResponse => this.handleResponse(serverResponse),
            err => console.log(err)
        )
    }
    handleResponse(response: any) {
        if(response=="1"){
            let auth = "Basic " + btoa(this.model.username + ":" + this.model.password);
            localStorage.setItem("auth", auth);
            console.log("OK: saved to localStorage");
            return 1;
        } 
        console.log("KO!");
    }
}