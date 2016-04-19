import {Injectable } from 'angular2/core';
import {BaseService} from './../shared/base.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Router, Location} from 'angular2/router';
import {AppRouteConst} from './../shared/app.const';
@Injectable()
export class DashboardService extends BaseService {
    constructor(protected http: Http, protected router: Router) {
        super(http, router);
    }
    
    getAll(){
         return this.http.get(AppRouteConst.ALL_DASHBOARD, this.getReqOptions())
            .map(res => <any>res.json())
            .catch(super.handleError);
    }

}