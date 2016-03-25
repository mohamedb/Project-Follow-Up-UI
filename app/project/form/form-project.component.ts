import {Component, OnInit} from 'angular2/core';
import {ProjectModel } from './../project.model';
import {ProjectService} from './../project.service'
@Component({
    selector: 'form-project',
    templateUrl: 'app/project/form/form-project.component.html',
    providers: [ProjectService]
})

export class FormProjectComponent implements OnInit {
    projectModel:ProjectModel= new ProjectModel();
    constructor(private projetService:ProjectService) { }
    ngOnInit() { }
    
    save(){
        this.projetService.saveProject(this.projectModel).subscribe(
            response=>console.log(JSON.stringify(response))
        );
    }
}