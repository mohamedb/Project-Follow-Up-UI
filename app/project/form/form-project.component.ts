import {Component, OnInit} from 'angular2/core';
import {ProjectModel } from './../project.model';
import {ProjectService} from './../project.service';
import {RouteParams,Router} from 'angular2/router';
@Component({
    selector: 'form-project',
    templateUrl: 'app/project/form/form-project.component.html',
    providers: [ProjectService]
})

export class FormProjectComponent implements OnInit {
    projectModel:ProjectModel= new ProjectModel();
    constructor(private projetService:ProjectService, private routeParams: RouteParams) { }
    ngOnInit() {
          $("#page_Title").text("Project: Add/Edit") ; //Change top title
          let id = +this.routeParams.get('id');
          this.projectModel.Id=id;
          if(id>0){
              this.projetService.getProjectViewModel(id).subscribe(
                  response=>this.initModel(response)
              );
          }
     }
    private initModel(response:any){
        let model= JSON.parse(response);
        this.projectModel= <ProjectModel>model;
    }
    save(){
        this.projetService.saveProject(this.projectModel).subscribe(
            response=>console.log(JSON.stringify(response))
        );
    }
}