import { Component, OnInit } from 'angular2/core';
import { DashboardService} from './dashboard.service';
import {MatrixComponent } from './matrix/matrix.component';
import {TaskPlanningComponent} from './../task/task-planning/task-planning.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [MatrixComponent,TaskPlanningComponent],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    data: any = {};
    matrix:any;
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
        if(response.State==1  )  {
            this.ngOnInit(); //reload 
        }
        else {
            alert(response.Message);
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