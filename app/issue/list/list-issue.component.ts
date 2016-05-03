import {Component, OnInit} from 'angular2/core';
import {RouteParams,Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {IssueService} from './../issue.service';
import {ModelState} from './../../shared/model-state/model-state.model';
import {ModelStateComponent} from './../../shared/model-state/model-state.component';
@Component({
    selector: 'list-issue',
    templateUrl: 'app/issue/list/list-issue.component.html',
    directives: [ROUTER_DIRECTIVES,ModelStateComponent],
    providers: [IssueService]
})
 
export class ListIssueComponent implements OnInit {
    Issues:Array<any>=[];
    projectId:number=0;
    modelState:ModelState=new ModelState();
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
            res=>  this.handleOpenCloseIssueResponse(res)
        );
    }
    handleOpenCloseIssueResponse(res){
        this.modelState=<ModelState>res;
        this.ngOnInit();
    }
     genetateTaskFromIssue(issueId:number){
         this.issueService.genetateTaskFromIssue(issueId).subscribe(
             res=>this.handleGenerationResponse(res),
             err=>alert("Error transforming issue to new task")
         );
     }
     handleGenerationResponse(res){
         this.modelState= res;
         this.ngOnInit();
     }
    handleResponse(response:any){
        this.Issues= response;
    }
    handleError(err){
        console.log(err);
    }
}