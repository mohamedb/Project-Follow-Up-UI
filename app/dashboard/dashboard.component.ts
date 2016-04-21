import { Component, OnInit } from 'angular2/core';
import { DashboardService} from './dashboard.service';
import {MatrixComponent } from './matrix/matrix.component';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [MatrixComponent],
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

    /**
     * Particularly useful to avoid .length on undefined
     */
    testArray(arr) {
        if (arr && arr.length > 0)
            return true;
        return false;
    }

}