import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TaskService} from './../task.service';
@Component({
    selector: 'task-details',
    templateUrl: 'app/task/task-details/task-details.component.html',
    providers: [TaskService],
})

export class TaskDetailsComponent implements OnInit {

     constructor(private taskService:TaskService, private routeParams: RouteParams ) { }

    ngOnInit() {
        let taskId = +this.routeParams.get('projectId');
       /* this.taskService.getTask(taskId).subscribe(
            response=>this.handleResponse(response)
        ) */
     }
     handleResponse(response){
         let jsonResponse= JSON.parse(response);
     }
}