import {Component, OnInit, Input, Output, EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {TaskboardService} from './../taskboard/taskboard.service';

@Component({
    selector: 'board-panel',
    templateUrl: 'app/task/board-panel/board-panel.component.html',
     directives: [ROUTER_DIRECTIVES],
     providers:[TaskboardService]
})

export class BoardPanelComponent implements OnInit {
    @Input('Tasks') Tasks:any=[];
    @Input('Title') Title:any="";
    @Output("notifyResponseEvent") notifyEvent = new EventEmitter();
    constructor(private taskboardService:TaskboardService) { }
    changeState(taskId){
         this.taskboardService.changeStateTask(taskId).subscribe(
             response=>this.handleChangeStateResponse(response)
         )
     }
     handleChangeStateResponse(response){
       this.notifyEvent.emit(response);
     }
    ngOnInit() { }
}