/// <reference path="../typings/main.d.ts" />
import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {NotificationService} from './service';
import {LoginFormComponent} from './auth/login-form.component';
import {RegisterComponent} from './auth/register/register.component';
import {ListProjectsComponent} from './project/list-projects.component';
import {FormProjectComponent} from './project/form/form-project.component';
import {LeftMenuComponent} from './menu/left-menu.component';
import {TopBarComponent} from "./menu/top-bar.component";
import {RightBarComponent} from "./menu/right-bar.component";
import {TaskboardComponent} from "./task/taskboard/taskboard.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {TaskDetailsComponent} from "./task/task-details/task-details.component";
import {TaskFormComponent} from "./task/task-form/task-form.component";

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [ROUTER_DIRECTIVES,LeftMenuComponent,TopBarComponent,RightBarComponent]
    /*styleUrls: [  
     "./../assets/css/core.css" , "./../assets/css/components.css", 
     "./../assets/css/pages.css" , "./../assets/css/menu.css","./../assets/css/responsive.css" , "./../app.css"  ]*/
})
@RouteConfig([
    {
        path: '/Login',
        name: 'Login',
        component: LoginFormComponent,
        useAsDefault: true
    },
    {
        path: '/Register',
        name: 'Register',
        component: RegisterComponent,
    },
    {
        path: '/Projects',
        name: 'Projects',
        component: ListProjectsComponent,
    },
    {
        path: '/Add-Project/:id', /* Add,id=0|Edit, id>0 */
        name: 'AddProject',
        component: FormProjectComponent,
    } 
    ,
    {
        path: '/Taskboard/:projectId',  
        name: 'Taskboard',
        component: TaskboardComponent,
    } 
    ,
    {
        path: '/Timeline/:projectId',  
        name: 'Timeline',
        component: TimelineComponent,
    }
    ,
    {
        path: '/Task/Details/:taskId',  
        name: 'TaskDetails',
        component: TaskDetailsComponent,
    } 
    ,
    {
        path: '/Task/Add/:projectId',  
        name: 'AddTask',
        component: TaskFormComponent,
    }
 ])
export class AppComponent {
    notifs: any;
    constructor() {
      
       
    }
   
   
}