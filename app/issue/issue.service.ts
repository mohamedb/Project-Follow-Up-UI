import {Injectable} from 'angular2/core';
import {BaseService} from './../shared/base.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
@Injectable()
export class IssueService  extends BaseService  {

    constructor(protected http: Http, protected  router:Router) {
        super(http,router);
     }

}