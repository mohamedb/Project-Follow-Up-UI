import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {TaskService} from './../task.service';
import {TaskModel} from './../task.model';
import {ModelStateComponent} from './../../shared/model-state/model-state.component';
import {ModelState} from './../../shared/model-state/model-state.model';
@Component({
    selector: 'task-form',
    templateUrl: 'app/task/task-form/task-form.component.html',
    directives: [ModelStateComponent],
    providers: [TaskService],
})

export class TaskFormComponent implements OnInit {
    taskModel: TaskModel = new TaskModel();
    modelState: ModelState = new ModelState();
    errorsOnSave: any = {};
    constructor(private taskService: TaskService, private routeParams: RouteParams) {

    }
    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        let taskId = +this.routeParams.get('taskId');
        this.taskService.getTaskModel(projectId,taskId).subscribe(
            response => this.handleResponse(response)
        );
    }
    handleResponse(response) {
        this.taskModel = response;
    }
    save() {
        this.taskService.saveTaskModel(this.taskModel).subscribe(
            response => this.handleSaveResponse(response),
            error => alert("Error! cant save the task *__* ")
        );
    }
    handleSaveResponse(response) {
        this.modelState = <ModelState>response;
    }
}