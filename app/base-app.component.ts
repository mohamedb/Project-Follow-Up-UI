/// <reference path="../typings/main.d.ts" />
import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {NotificationService} from './service';
import {AuthBaseComponent} from './auth.component';
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
import {ListIssueComponent } from "./issue/list/list-issue.component";
import {FormIssueComponent} from "./issue/form/form-issue.component";

@Component({
    selector: 'base-app',
    templateUrl: "app/app.component.html",
    directives: [ROUTER_DIRECTIVES, LeftMenuComponent, TopBarComponent, RightBarComponent]
    /*styleUrls: [  
     "./../assets/css/core.css" , "./../assets/css/components.css", 
     "./../assets/css/pages.css" , "./../assets/css/menu.css","./../assets/css/responsive.css" , "./../app.css"  ]*/
})
@RouteConfig([

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
    },
    {
        path: '/Issue/List/:projectId',
        name: 'ListIssue',
        component: ListIssueComponent,
    },
    {
        path: '/Issue/New/:projectId',
        name: 'NewIssue',
        component: FormIssueComponent,
    }
])
export class BaseAppComponent {
    /**
     * Default hide notifs: 
     * @todo : add a class that hold user prefs (stored int localStorage = from Server first auth)
     * then use it!
     */
    showNotifs = false; 
    showMenu = true;
    constructor() { }
    flipNotifs(value) {
        this.showNotifs = !this.showNotifs;
    }
    flipMenu(value) {
        console.log("flip Menu event: captured");
        this.showMenu = !this.showMenu;
    }


}