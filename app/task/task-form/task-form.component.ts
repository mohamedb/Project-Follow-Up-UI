import {Component, OnInit, Input} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TaskService} from './../task.service';
import {TaskModel} from './../task.model';
@Component({
    selector: 'task-form',
    templateUrl: 'app/task/task-form/task-form.component.html',
     providers: [TaskService],
})

export class TaskFormComponent implements OnInit {
    taskModel:TaskModel= new TaskModel();
    usersList:any=[];
 
     constructor(private taskService:TaskService, private routeParams: RouteParams ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        this.taskService.getTaskModel(projectId).subscribe(
            res=>this.handleResponse(res)
        );
     }
    handleResponse(response)  {
        let model =JSON.parse(response);
        this.usersList= Array.from(model.UsersList);
        this.taskModel = model;
        this.usersList=Array.from( model.UsersList);  
      
         
    }
    
    /**
     * Temporary solution to the problem of nested data inside a ngFor
     * @see https://github.com/angular/angular/issues/6392
     */
    workAround(data){
        return Array.from(data);
    }
    
}