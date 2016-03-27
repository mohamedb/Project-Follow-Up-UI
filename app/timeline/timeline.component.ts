import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TimelineService} from './timeline.service';
@Component({
    selector: 'timeline',
    templateUrl: 'app/timeline/timeline.component.html',
    providers:[TimelineService]
})

export class TimelineComponent implements OnInit {
    data:any=[];
    constructor(private timelineService:TimelineService , private routeParams: RouteParams ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        this.timelineService.getByProject(projectId).subscribe(
            response=>this.data=response
        )
     }
}