import {Injectable} from 'angular2/core';
import {BaseService} from './../shared/base.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {AppRouteConst} from './../shared/app.const';
@Injectable()
export class IssueService  extends BaseService  {

    constructor(protected http: Http, protected  router:Router) {
        super(http,router);
     }
     
     getAll(projectId:number){
          let headers = new Headers(
            { "Content-Type": "application/json",
              "Authorization": localStorage.getItem("auth"),
              "accepts": "application/json; charset=utf-8",
            });
            console.log(localStorage.getItem("auth"));
        let options = new RequestOptions({ headers: headers });
         return this.http.get(AppRouteConst.ALL_ISSUE+"?id="+projectId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError); 
    }

}