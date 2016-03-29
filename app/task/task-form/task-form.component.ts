import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TaskService} from './../task.service';
@Component({
    selector: 'task-form',
    templateUrl: 'app/task/task-form.component.html',
     providers: [TaskService],
})

export class TaskFormComponent implements OnInit {
    taskModel:any= {};
 
     constructor(private taskService:TaskService, private routeParams: RouteParams ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        console.log(projectId) ;
     }
      
}