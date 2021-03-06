import {Injectable} from 'angular2/core';
import {BaseService} from './../shared/base.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {  Router, Location} from 'angular2/router';
import {AppRouteConst} from './../shared/app.const';
import {IssueModel} from './issue.model';
@Injectable()
export class IssueService extends BaseService {

    constructor(protected http: Http, protected router: Router) {
        super(http, router);
    }

    getAll(projectId: number) {
        return this.http.get(AppRouteConst.ALL_ISSUE + "?id=" + projectId, this.getReqOptions())
            .map(res => <any>res.json())
            .catch(super.handleError);
    }
    
    /**
     * Get The model (initialized) by project
     */
    getFormModel(projectId: number){
        return this.http.get(AppRouteConst.ADD_ISSUE + "?id=" + projectId, this.getReqOptions())
            .map(res => <any>res.json())
            .catch(super.handleError);
    }
    /**
     * Save the model
     */
    save(model:IssueModel){
        let body=  JSON.stringify(model);
        return this.http.post(AppRouteConst.ADD_ISSUE,body,this.getReqOptions())
            .map(res => <any>res.json())
            .catch(super.handleError);
    }
    openCloseIssue(issueId:number){
        return this.http.get(AppRouteConst.OPEN_CLOSE_ISSUE + "?id=" + issueId, this.getReqOptions())
            .map(res => <any>res.json())
            .catch(super.handleError);
    }
    
    genetateTaskFromIssue(issueId:number){
         return this.http.get(AppRouteConst.GENERATE_TASK_FROM_ISSUE_TASK + "?id=" + issueId, this.getReqOptions())
            .map(res => <any>res.json())
            .catch(super.handleError);
    }

}