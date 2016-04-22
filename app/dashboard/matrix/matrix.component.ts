import { Component, OnInit, Input } from 'angular2/core';
import { MatrixModel } from './matrix.model';

@Component({
    selector: 'matrix',
    templateUrl: 'app/dashboard/matrix/matrix.component.html'
})
export class MatrixComponent implements OnInit {
    @Input("matrixData") Model:MatrixModel;
    constructor() { }

    ngOnInit() {
 
    }

}