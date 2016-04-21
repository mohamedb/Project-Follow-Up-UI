import { Component, OnInit, Input } from 'angular2/core';

@Component({
    selector: 'matrix',
    templateUrl: 'app/dashboard/matrix/matrix.component.html'
})
export class MatrixComponent implements OnInit {
    @Input("matrixData") Model: any = {
        ImportantAndUrgent: [],
        ImportantNotUrgent: [],
        NotImportantButUrgent: [],
        NotImportantNotUrgent: []
    };
    constructor() { }

    ngOnInit() {
 
    }

}