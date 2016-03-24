import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';
import {BaseService} from './../shared/base.service';

@Injectable()
export class NotificationService extends BaseService {

    constructor(protected http:Http, protected router:Router) {
        super(http,router);
        
     }

    getAll(data: any) {
        console.log("auth: "+localStorage.getItem("auth"));
        var route = "http://localhost:64634/api/NotificationApi/all";
        //let body = JSON.stringify(data);
        let headers = new Headers(
            { "Content-Type": "application/json",
              "Authorization": localStorage.getItem("auth"),
              "accepts": "application/json",
            });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(route, options)
            .map(res => <any> res.json())
            .catch(super.handleError);
    }

    
}