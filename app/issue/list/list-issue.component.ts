import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {IssueService} from './../issue.service';
@Component({
    selector: 'list-issue',
    templateUrl: 'app/issue/list/list-issue.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [IssueService]
})

export class ListIssueComponent implements OnInit {
    Issues:Array<any>=[];
    projectId:number=0;
    constructor(private issueService:IssueService, private routeParams: RouteParams ) { }

    ngOnInit() { 
       $("#page_Title").text("Issues list") ; //Change top title
       this.projectId= +this.routeParams.get('projectId');
       this.issueService.getAll(this.projectId).subscribe(
           res=>this.handleResponse(res),
           err=>this.handleError(err)
       )  
    }
    openCloseIssue(id){
        this.issueService.openCloseIssue(parseInt(id)).subscribe(
            res=>alert(""+ JSON.parse(res).Messages)
        );
    }
    handleResponse(response:any){
        response= JSON.parse(response);
        this.Issues= response;
    }
    handleError(err){
        console.log(err);
    }
}