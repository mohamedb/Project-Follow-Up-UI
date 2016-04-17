import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {TaskService} from './../task.service';
import {TaskModel} from './../task.model';
@Component({
    selector: 'task-form',
    templateUrl: 'app/task/task-form/task-form.component.html',
    providers: [TaskService],
})

export class TaskFormComponent implements OnInit {
    taskModel: TaskModel = new TaskModel();
    errorsOnSave:any = {};
    constructor(private taskService: TaskService, private routeParams: RouteParams) {

    }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        this.taskService.getTaskModel(projectId).subscribe(
            response => this.handleResponse(response)
        );
    }
    handleResponse(response) {
        this.taskModel = response;
    }

    save() {
        this.taskService.saveTaskModel(this.taskModel).subscribe(
            response => this.handleSaveResponse(response),
            error =>alert("Error! cant save the task *__* ")
        );
    }
    handleSaveResponse(response){
        if(response.State==0  )  {
            this.errorsOnSave=response;
        }
        else {
            alert("OK!")
        }
        this.errorsOnSave=response;
    }
}