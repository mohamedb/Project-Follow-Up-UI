import { Component, OnInit,Input } from 'angular2/core';

@Component({
    selector: 'task-planning',
    templateUrl: 'app/task/task-planning/task-planning.component.html'
})
export class TaskPlanningComponent implements OnInit {
    @Input("Model") Model;
    @Input("IsWorkingDayOver") IsWorkingDayOver;
    constructor() { }
    ngOnInit() { }

}