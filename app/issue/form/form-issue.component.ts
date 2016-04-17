import {Component, OnInit} from 'angular2/core';
import {IssueModel} from './../issue.model';
import {IssueService} from './../issue.service';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'form-issue',
    templateUrl: 'app/issue/form/form-issue.component.html',
    providers:[IssueService]
})

export class FormIssueComponent implements OnInit {
    issueModel: IssueModel = new IssueModel();
    constructor(private issueService: IssueService, private routeParams: RouteParams) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
        this.issueService.getFormModel(projectId).subscribe(
            res => this.handleGetModelResponse(res)
        )
    }
    handleGetModelResponse(res) {
        this.issueModel =  res;
    }

    save() {
        this.issueService.save(this.issueModel).subscribe(
            res => this.handleSaveResponse(res)
        );
    }
    handleSaveResponse(res) {
        if (res.State == 1) {
            alert(res.Message);
            this.issueService.goToProjects();/* @todo redirect to issues list */
        }
        else {
            alert("Some errors occured\n: " + res.Message);
        }

    }
}