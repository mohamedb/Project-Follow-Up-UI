import {Component, OnInit} from 'angular2/core';
import {ProjectModel } from './../project.model';

@Component({
    selector: 'form-project',
    templateUrl: 'app/project/form/form-project.component.html'
})

export class FormProjectComponent implements OnInit {
    projectModel: ProjectModel = new ProjectModel();
    ariaStat: any = [true, false, false];
    constructor() { }
    ngOnInit() { }

    updateAria(idAria: any) {
        for (let i = 0; i < this.ariaStat.length; i++) {
            this.ariaStat[i] = false;
        }
        this.ariaStat[idAria] = true;
    }
}