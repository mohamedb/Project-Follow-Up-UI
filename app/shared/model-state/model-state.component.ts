import { Component, OnInit, Input } from 'angular2/core';
import {ModelState} from './model-state.model';

@Component({
    selector: 'model-state',
    template: `
        <div  class="alert fade in m-b-0"
             [ngClass]="{'alert-success':modelState.State==1, 'alert-error':modelState.State==0}" >
            <h4>{{modelState.Message}}</h4>
            <p  *ngFor="#errMsg of modelState.SuccessMessages">
                {{errMsg.Value}}
            </p>
            <p  *ngFor="#errMsg of modelState.ErrorMessages">
                {{errMsg.Value}}
            </p>
            <p class="m-t-10" *ngIf="modelState.Message">
                <a (click)="hide()" class="btn  a-btn-red">
                   Close
                </a>
            </p>
        </div>
     `
})

/**
 * The way the panel is "hide" is by setting modelState prop to null |= default values
 */
export class ModelStateComponent implements OnInit {
    @Input("modelState") modelState: ModelState = new ModelState();
 
    constructor() { }
    ngOnInit() { }
    /**
     * This is the simple way to "hide" panel
     */
    hide(){
       this.modelState= new ModelState();
    }

}