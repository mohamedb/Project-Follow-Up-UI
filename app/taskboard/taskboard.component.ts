import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TaskboardService} from "./taskboard.service";
@Component({
    selector: 'taskboard',
    templateUrl: 'app/taskboard/taskboard.component.html',
    providers: [TaskboardService]
})

export class TaskboardComponent implements OnInit {
    Upcoming:any= [];
    constructor(private taskboardService:TaskboardService, private routeParams: RouteParams ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        this.taskboardService.getTaskboard(projectId).subscribe(
            resp=>this.Upcoming=JSON.parse(resp).Upcoming
        );
     }
}