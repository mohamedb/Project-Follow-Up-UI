import {Component, OnInit} from 'angular2/core';
import {IssueModel} from './../issue.model';
import {IssueService} from './../issue.service';
import {RouteParams, Router} from 'angular2/router';
import {ModelStateComponent} from './../../shared/model-state/model-state.component';
import {ModelState} from './../../shared/model-state/model-state.model';
@Component({
    selector: 'form-issue',
    templateUrl: 'app/issue/form/form-issue.component.html',
    directives: [ModelStateComponent],
    providers: [IssueService]
})

export class FormIssueComponent implements OnInit {
    issueModel: IssueModel = new IssueModel();
    modelState: ModelState = new ModelState();
    projectId:number;
    constructor(private issueService: IssueService, private routeParams: RouteParams,private  router:Router) { }

    ngOnInit() {
       this.projectId = +this.routeParams.get('projectId');
        this.issueService.getFormModel(this.projectId).subscribe(
            res => this.handleGetModelResponse(res)
        )
    }
    handleGetModelResponse(res) {
        this.issueModel = res;
    }

    save() {
        this.issueService.save(this.issueModel).subscribe(
            res => this.handleSaveResponse(res)
        );
    }
    handleSaveResponse(res) {
        this.modelState= <ModelState> res;
        let link =['/BaseApp','ListIssue',{projectId: this.projectId}];
        this.router.navigate(link);
    }
}