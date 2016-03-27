import {Component, OnInit, Input} from 'angular2/core';

@Component({
    selector: 'board-panel',
    templateUrl: 'app/taskboard/board-panel/board-panel.component.html'
})

export class BoardPanelComponent implements OnInit {
    @Input('Tasks') Tasks:any=[];
    @Input('Title') Title:any="";
    constructor() { }

    ngOnInit() { }
}