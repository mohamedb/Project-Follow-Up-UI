import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TaskService} from './../task.service';
@Component({
    selector: 'task-details',
    templateUrl: 'app/task/task-details/task-details.component.html',
    providers: [TaskService],
})

export class TaskDetailsComponent implements OnInit {
     task:any= {};
 
     constructor(private taskService:TaskService, private routeParams: RouteParams ) { }

    ngOnInit() {
        let taskId = +this.routeParams.get('taskId');
        this.taskService.getTaskEntity(taskId).subscribe(
            response=>this.handleResponse(response)
        )  
     }
     handleResponse(response){
         this.task=response;
     }
}