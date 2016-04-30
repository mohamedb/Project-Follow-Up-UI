import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';
import {BaseService} from './../shared/base.service';
import {AppRouteConst} from './../shared/app.const';

@Injectable()
export class NotificationService extends BaseService {

    constructor(protected http:Http, protected router:Router) {
        super(http,router);
     }

    getAll(data: any) {       
        return this.http.get(AppRouteConst.LIST_NOTIFICATION, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    
    markSeenUnseen(notifId:number){
          return this.http.get(AppRouteConst.SEEN_UNSEEN_NOTIFICATION+"?id="+notifId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    
    markDeleted(notifId:number){
          return this.http.get(AppRouteConst.MARK_DELETED_NOTIFICATION+"?id="+notifId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    

    
}