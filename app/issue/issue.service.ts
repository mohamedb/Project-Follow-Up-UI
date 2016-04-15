import {Injectable} from 'angular2/core';
import {BaseService} from './../shared/base.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
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

}