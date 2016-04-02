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
    @Output() mark = new EventEmitter();
    constructor(private taskboardService:TaskboardService) { }
    changeState(taskId){
         this.taskboardService.changeStateTask(taskId).subscribe(
             response=>this.handleChangeStateResponse(response)
         )
     }
     handleChangeStateResponse(response){
         response = JSON.parse(response);
         if(response.State==1){
             alert("State Change successfully");
             this.ngOnInit(); //Simulate reload!
         }
         else{
             alert("Errors occurs while changing task state!");
             console.log(response);
         }
     }
    ngOnInit() { }
}