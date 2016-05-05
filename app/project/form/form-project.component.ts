import {Component, OnInit} from 'angular2/core';
import {ProjectModel } from './../project.model';
import {ProjectService} from './../project.service';
import {RouteParams, Router} from 'angular2/router';
import {ModelStateComponent} from './../../shared/model-state/model-state.component';
import {ModelState} from './../../shared/model-state/model-state.model';
@Component({
    selector: 'form-project',
    templateUrl: 'app/project/form/form-project.component.html',
    directives: [ModelStateComponent],
    providers: [ProjectService]
})

export class FormProjectComponent implements OnInit {
    projectModel: ProjectModel = new ProjectModel();
     modelState: ModelState = new ModelState();
    constructor(private projetService: ProjectService, private routeParams: RouteParams) { }
    ngOnInit() {
        $("#page_Title").text("Project: Add/Edit"); //Change top title
        let id = +this.routeParams.get('id');
        this.projectModel.Id = id;
        if (id > 0) {
            this.projetService.getProjectViewModel(id).subscribe(
                response => this.initModel(response)
            );
        }
    }
    private initModel(response: any) {
        this.projectModel = <ProjectModel>response;
    }
    save() {
        this.projetService.saveProject(this.projectModel).subscribe(
            response => this.handleSaveResponse(response)
        );
    }
    handleSaveResponse(res) {
        if (res.State == 1) {
            alert("Project saved successfully");
            this.projetService.goToHome();
        }
        this.modelState = <ModelState>res;
    }
}