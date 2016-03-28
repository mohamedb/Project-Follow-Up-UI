import {Component, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'board-panel',
    templateUrl: 'app/task/board-panel/board-panel.component.html',
     directives: [ROUTER_DIRECTIVES],
})

export class BoardPanelComponent implements OnInit {
    @Input('Tasks') Tasks:any=[];
    @Input('Title') Title:any="";
    constructor() { }

    ngOnInit() { }
}