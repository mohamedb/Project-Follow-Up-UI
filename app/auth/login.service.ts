import {Injectable}     from 'angular2/core';
import {BaseService}     from './../shared/base.service';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Subject} from 'rxjs/Rx';
import {AppRouteConst} from "./../shared/app.const"

@Injectable()
export class LoginService  {

    constructor(protected http: Http, protected router:Router) {
     }

    login(loginModel: any) {
        let body = JSON.stringify(loginModel);
        let headers = new Headers(
            { "Content-Type": "application/json",
              "Authorization": "Basic " + btoa(loginModel.username + ":" + loginModel.password),
              "accepts": "application/json; charset=utf-8",
            });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(AppRouteConst.CHECK_CREDENTIALS, body, options)
            .map(res => <any> res.json())
          //  .catch(this.handleError); let the component handle error and do some dome manipulations 
    }
     protected handleError(error: Response) {
        console.log("Some problem from the server :/ ! "+error);
        return Observable.throw(error.json().error || 'Server error');
    }
     goToHome(){
         console.log("Try redirection to App/Dashboard");
         let link= ['/BaseApp','Dashboard',{}];
         this.router.navigate(link);
    }
    logout(){
            localStorage.removeItem("auth");
            localStorage.removeItem("user");
            let link= ['/AuthBase','Login',{}]
            this.router.navigate(link);
    }
   
}