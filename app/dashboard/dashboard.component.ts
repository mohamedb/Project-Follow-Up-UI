import { Component, OnInit } from 'angular2/core';
import { DashboardService} from './dashboard.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
    data:any={};
    constructor(private dashboardService:DashboardService) { }

    ngOnInit() {
        this.dashboardService.getAll().subscribe(
            res=>this.data=res
        )
    }

}