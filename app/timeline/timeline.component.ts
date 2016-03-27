import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
@Component({
    selector: 'timeline',
    templateUrl: 'app/timeline/timeline.component.html'
})

export class TimelineComponent implements OnInit {

    constructor(private routeParams: RouteParams ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
     }
}