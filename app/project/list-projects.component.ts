import {Component, OnInit} from 'angular2/core';
import {ProjectService} from "./project.service"
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
@Component({
    selector: 'list-projects',
    templateUrl: 'app/project/list-projects.component.html',
    providers: [ProjectService],
    directives: [ROUTER_DIRECTIVES],
    styles:[` `]
})

export class ListProjectsComponent implements OnInit {
    projects:any=[];
    constructor(private projectService:ProjectService) {
       
     }

    ngOnInit() {
        this.projectService.getAll("").subscribe(
            resp=>this.handleResponse(resp)
        )
     }
     handleResponse(resp:any){
         let json = JSON.parse(resp);
         this.projects=json;
         
     }
}