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
    loginError="";
    constructor(private loginService: LoginService, private router: Router) {
      //  console.log("Login-form loaded!");
     }
    ngOnInit() {
       
     }
    login() {
        this.loginService.login(this.model).subscribe(
            serverResponse => this.handleResponse(serverResponse),
            err => this.handleError(err)
        )
    }
    handleResponse(response: any) {
            let auth = "Basic " + btoa(this.model.username + ":" + this.model.password);
            localStorage.setItem("auth", auth);
            let user = JSON.stringify(response);
            localStorage.setItem("user", user);
            this.loginService.goToHome();
     }
    
    handleError(err:any){
         this.loginError="Please check username/password or both!";
    }
 
}