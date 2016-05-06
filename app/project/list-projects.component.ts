import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {ProjectService} from "./project.service";
import {FilterProjectPipe} from "./filter-project.pipe";
import {FormatLongTextPipe} from "./../shared/long-text.pipe";

@Component({
    selector: 'list-projects',
    templateUrl: 'app/project/list-projects.component.html',
    providers: [ProjectService],
    directives: [ROUTER_DIRECTIVES],
    pipes: [FilterProjectPipe,FormatLongTextPipe],
    styles: [` `]
})

export class ListProjectsComponent implements OnInit {
    projects: any = [];
    constructor(private projectService: ProjectService) {

    }
    ngOnInit() {
        $("#page_Title").text("Projects list"); //Change top title
        this.projectService.getAll("").subscribe(
            resp => this.handleResponse(resp)
        )
    }
    handleResponse(resp: any) {
        this.projects = resp;
    }
}