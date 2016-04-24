import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'current-day-tasks',
    templateUrl: 'app/task/current-day-tasks/current-day-tasks.component.html'
})
export class CurrentDayTasksComponent implements OnInit {
    @Input("CurrentDayTasks") CurrentDayTasks:any;
    @Input("Title") Title:any;
    constructor() { }

    ngOnInit() { }

}