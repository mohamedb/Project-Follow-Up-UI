import { Component, OnInit, Input } from 'angular2/core';
import {TaskService} from './../task.service'

@Component({
    selector: 'current-day-tasks',
    templateUrl: 'app/task/current-day-tasks/current-day-tasks.component.html',
    providers:[TaskService]
})
export class CurrentDayTasksComponent implements OnInit {
    @Input("CurrentDayTasks") CurrentDayTasks:any;
    @Input("Title") Title:any;
    constructor(private taskService:TaskService) { }

    ngOnInit() { }
    
    markDone(taskId:number){
        this.taskService.changeStateTask(taskId).subscribe(
            res=>alert(res.Message)
        )
    }

}