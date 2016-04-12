import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router} from 'angular2/router';
import {IssueService} from './../issue.service';
@Component({
    selector: 'list-issue',
    templateUrl: 'app/issue/list/list-issue.component.html',
    providers: [IssueService]
})

export class ListIssueComponent implements OnInit {
    Issues:Array<any>=[];
    constructor(private issueService:IssueService, private routeParams: RouteParams ) { }

    ngOnInit() { 
       let projectId = +this.routeParams.get('projectId');
       this.issueService.getAll(projectId).subscribe(
           res=>this.handleResponse,
           err=>this.handleError
       )  
    }
    handleResponse(response:any){
        response= JSON.parse(response);
        this.Issues= response;
    }
    handleError(err){
        console.log(err);
    }
}