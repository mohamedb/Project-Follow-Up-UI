import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'timeline-item',
    templateUrl: 'app/timeline/timeline-item/item.component.html'
})

export class TimelineItemComponent implements OnInit {
    @Input("element") element:any={};
    constructor() { }

    ngOnInit() {
 
     }
}