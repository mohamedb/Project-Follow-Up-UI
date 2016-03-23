import {Injectable}     from 'angular2/core';
import {BaseService}     from './../shared/base.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class LoginService extends BaseService {

    constructor(protected http: Http, protected router:Router) {
        super(http,router);
     }

    login(loginModel: any) {
        var route = "http://localhost:64634/api/AccountApi/CheckCredentials";
        let body = JSON.stringify(loginModel);
        let headers = new Headers(
            { "Content-Type": "application/json",
              "Authorization": "Basic " + btoa(loginModel.username + ":" + loginModel.password),
              "accepts": "application/json; charset=utf-8",
            });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(route, body, options)
            .map(res => <any> res.json())
            .catch(this.handleError);
    }
   
}