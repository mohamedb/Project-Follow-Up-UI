import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {LoginService} from "./../auth/login.service";
import {SideMenuHelper} from "./../shared/sidemenu.helper";
@Component({
    selector: 'left-menu',
    templateUrl: 'app/menu/left-menu.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [LoginService]
})

export class LeftMenuComponent implements OnInit {
    user:any = {};
    constructor(private loginService:LoginService) { }

    ngOnInit() {
          let sidemenu = new SideMenuHelper();
          this.user= JSON.parse(localStorage.getItem("user"));
     }
    
    logout(){
        this.loginService.logout();
    }
}