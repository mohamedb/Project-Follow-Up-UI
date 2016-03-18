import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {NotificationService} from './service';
import {LoginFormComponent} from './auth/login-form.component';
import {ListProjectsComponent} from './project/list-projects.component';
import {LeftMenuComponent} from './menu/left-menu.component';
@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [ROUTER_DIRECTIVES,LeftMenuComponent]
})
@RouteConfig([
    {
        path: '/Login',
        name: 'Login',
        component: LoginFormComponent,
        useAsDefault: false
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: ListProjectsComponent,
        useAsDefault: true
    }
 ])
export class AppComponent {
    notifs: any;
    constructor() {
    }
   
}