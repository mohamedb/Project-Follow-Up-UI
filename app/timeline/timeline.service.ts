import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';
import {BaseService} from './../shared/base.service';
import {AppRouteConst} from './../shared/app.const';

@Injectable()
export class TimelineService extends BaseService {

    constructor(protected http:Http, protected router:Router) {
        super(http,router);
     }

    getByProject(projectId:number) {       
        return this.http.get(AppRouteConst.BYPROJECT_TIMELINE+"?id="+projectId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }

    
}