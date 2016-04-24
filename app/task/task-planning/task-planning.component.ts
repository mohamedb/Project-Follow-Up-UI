import { Component, OnInit,Input, Output, EventEmitter } from 'angular2/core';
import {TaskService} from './../task.service';

@Component({
    selector: 'task-planning',
    templateUrl: 'app/task/task-planning/task-planning.component.html',
    providers: [TaskService]
    
})
export class TaskPlanningComponent implements OnInit {
    @Input("Model") Model;
    @Input("IsWorkingDayOver") IsWorkingDayOver;
    @Input("Title") Title;
    @Output("planTaskForCurrentDayResponseEvent") planTaskForCurrentDayResponseEvent= new EventEmitter();
    
    constructor(private taskService:TaskService) { }
    ngOnInit() { }
    planTaskForCurrentDay(taskId:number){
        this.taskService.planTaskForCurrentDay(taskId).subscribe(
            res=>this.handlePlanForTodayResponse(res)
        )
    }
    handlePlanForTodayResponse(res){
        console.log(res);
        this.planTaskForCurrentDayResponseEvent.emit(res);
    }
}