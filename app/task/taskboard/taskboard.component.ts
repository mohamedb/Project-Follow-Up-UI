import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TaskboardService} from "./taskboard.service";
import {BoardPanelComponent } from "./../board-panel/board-panel.component";
import {ModelState} from './../../shared/model-state/model-state.model';
import {ModelStateComponent} from './../../shared/model-state/model-state.component';
@Component({
    selector: 'taskboard',
    templateUrl: 'app/task/taskboard/taskboard.component.html',
    providers: [TaskboardService],
    directives: [BoardPanelComponent,ModelStateComponent]
})

export class TaskboardComponent implements OnInit {
    Upcoming:any   = [];
    Complete:any   = [];
    InProgress:any = [];
    modelState:ModelState=new ModelState();
    constructor(private taskboardService:TaskboardService, private routeParams: RouteParams ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        this.taskboardService.getTaskboard(projectId).subscribe(
            resp=>this.handleResponse(resp)
        );
     }
     
     handleResponse(response){
         this.Upcoming=response.Upcoming;
         this.Complete= response.Complete;
         this.InProgress= response.InProgress;
         
         
     }
      panelUpdated(response){
          this.modelState=response;
          this.ngOnInit();
          console.log("EventEmitter caputred: \n "+response)
      }
}