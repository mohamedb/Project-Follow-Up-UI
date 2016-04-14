import {Component, OnInit} from 'angular2/core';
import {IssueModel} from './../issue.model';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'form-issue',
    templateUrl: 'app/issue/form/form-issue.component.html'
})

export class FormIssueComponent implements OnInit {
    issueModel: IssueModel = new IssueModel();
    constructor(private routeParams: RouteParams) { }

    ngOnInit() {
        let projectId = +this.routeParams.get('projectId');
    }
}