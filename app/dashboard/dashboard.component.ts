import { Component, OnInit } from 'angular2/core';
import { DashboardService} from './dashboard.service';
import {MatrixComponent } from './matrix/matrix.component';
import {TaskPlanningComponent} from './../task/task-planning/task-planning.component';
import {CurrentDayTasksComponent} from './../task/current-day-tasks/current-day-tasks.component';
import {ModelStateComponent} from './../shared/model-state/model-state.component';
import {ModelState} from './../shared/model-state/model-state.model';
@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [MatrixComponent,TaskPlanningComponent,CurrentDayTasksComponent,ModelStateComponent],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    data: any = {};
    matrix:any;
     modelState:ModelState=new ModelState();
    constructor(private dashboardService: DashboardService) { }

    ngOnInit() {
        $("#page_Title").text("My DashBorad");
        this.dashboardService.getAll().subscribe(
            res => this.handleResponse(res)
        )
    }
    handleResponse(res: any) {
        this.data = res
        this.matrix=res.MatrixVM;
    }
    handleResponseEvent(response){
        this.modelState= <ModelState>response; //this trigger the change in the UI
        if(this.modelState.State ==1  )  {
            this.ngOnInit(); //reload 
        }
    }

    /**
     * Particularly useful to avoid .length on undefined
     */
    testArray(arr) {
        if (arr && arr.length > 0)
            return true;
        return false;
    }

}