import {Injectable} from 'angular2/core';
import {BaseService} from "./../../shared/base.service";
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Subject} from 'rxjs/Rx';
import {AppRouteConst} from "./../../shared/app.const";
import {RegisterModel} from "./register.model";
@Injectable()
export class RegisterService {
    constructor(protected http: Http, protected router: Router) {
    }

    register(registerModel: RegisterModel) {
        let body = JSON.stringify(registerModel);
        let headers = new Headers(
            { "Content-Type": "application/json",
              "accepts": "application/json; charset=utf-8",
            });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppRouteConst.REGISTER, body, options)
            .map(res => <any>res.json())
            .catch(this.handleError);
    }
    
    protected handleError(error: Response) {
        console.log("Some problems from the server trying to Post to: "+AppRouteConst.REGISTER+"\n" + error);
        return Observable.throw(error.json() || 'Server error');
    }
}