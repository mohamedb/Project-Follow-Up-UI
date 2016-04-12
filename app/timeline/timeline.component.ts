import {Component, OnInit,ElementRef} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {TimelineService} from './timeline.service';
import {TimelineItemComponent} from './timeline-item/item.component';

@Component({ 
    selector: 'timeline',
    templateUrl: 'app/timeline/timeline.component.html',
    providers:[TimelineService],
    directives:[TimelineItemComponent]
})

export class TimelineComponent implements OnInit {
    
    TodayElements:any=[];
    YesterdayElements:any=[];
    OneMonthAgoElements:any=[];
    constructor(private timelineService:TimelineService , private routeParams: RouteParams, private elemRef: ElementRef ) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        this.timelineService.getByProject(projectId).subscribe(
            response=>this.handleReponse(response)
        )
        $("#page_Title").text("Timeline") ; //Change top title
       
     }
     
     handleReponse(response){
         response= JSON.parse(response);
         this.TodayElements=response.TodayElements;
         this.YesterdayElements=response.YesterdayElements;
         this.OneMonthAgoElements=response.OneMonthAgoElements; 
     }
}