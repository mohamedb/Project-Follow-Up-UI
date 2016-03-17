import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {NotificationService} from './service';
import {LoginFormComponent} from './auth/login-form.component';
import {ListProjectsComponent} from './project/list-projects.component';
@Component({
    selector: 'my-app',
    template: `
    <ul class="my-app">
        <li>
            <a [routerLink]="['Login']">Login<i class="fa fa-user"></i></a>	 
        </li>
        <li>
            <a [routerLink]="['Projects']">Projects<i class="fa fa-user"></i></a>	 
        </li>
    </ul> 
     <br>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
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
        // this.load();
    }
    /*
   load(){  this.notifService.getAll().subscribe(
                    dataFromServer => this.notifs=dataFromServer,
                    error =>  console.log(JSON.stringify(error))
      );
   } */
}