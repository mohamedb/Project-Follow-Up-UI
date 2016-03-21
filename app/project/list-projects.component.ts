import {Component, OnInit} from 'angular2/core';
import {ProjectService} from "./project.service"

@Component({
    selector: 'list-projects',
    templateUrl: 'app/project/list-projects.component.html',
    providers: [ProjectService]
})

export class ListProjectsComponent implements OnInit {
    projects:any=[];
    constructor(private projectService:ProjectService) { }

    ngOnInit() {
        this.projectService.getAll("").subscribe(
            resp=>this.handleResponse(resp)
        )
     }
     handleResponse(resp:any){
         let json = JSON.parse(resp);
          
         this.projects=json;
         
     }
     isCompleted(project:any){
         let now= new Date();
         let e= new Date(project.EndAt);
         console.log("s:"+now + "e: "+e);
         return e<now;
     }
}