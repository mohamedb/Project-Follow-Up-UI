/// <reference path="../typings/main.d.ts" />
import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {NotificationService} from './service';
import {AuthBaseComponent} from './auth.component';
import {BaseAppComponent} from './base-app.component';
 

@Component({
    selector: 'my-app',
    template: "<router-outlet></router-outlet>",
    directives: [ROUTER_DIRECTIVES]
    
})
@RouteConfig([
    {
        path: '/Auth/...',
        name: 'AuthBase',
        component: AuthBaseComponent,
        useAsDefault: true
    },
    {
        path: '/App/...',
        name: 'BaseApp',
        component: BaseAppComponent,
        useAsDefault: false
    }  
     
 ])
export class AppComponent {
    notifs: any;
    constructor() {
      
       
    }
   
   
}