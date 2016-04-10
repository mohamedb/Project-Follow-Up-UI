import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Subject} from 'rxjs/Rx';
import {AppRouteConst} from "./app.const"
/**
*
*Base class for services that need auth, the credentials are checked
*if not valid the user is redirected to login page
*/
@Injectable()
export class BaseService {
    isAuth=false;
    constructor(protected http: Http, protected  router:Router) { 
        this.check();
    }
    check():boolean {
        
        let body = JSON.stringify("");
        if(!localStorage.getItem("auth")){
            console.log("No auth obj! ");
            this.logout();
            return false;
        }
        let headers = new Headers(
            { "Content-Type": "application/json",
               "Authorization": localStorage.getItem("auth"),
              "accepts": "application/json; charset=utf-8",
            });
        let options = new RequestOptions({ headers: headers });
        let response= this.http.post(AppRouteConst.VERIFY, body, options)
            .map(res => <any> res.json())
            .catch(this.handleError);
       response.subscribe(resp=>this.handleAuthServerResponse(resp),this.handleError);
       return this.isAuth;
    }
    
    getReqOptions():RequestOptions{
        let headers = new Headers(
            { "Content-Type": "application/json",
              "Authorization": localStorage.getItem("auth"),
              "accepts": "application/json; charset=utf-8",
            });
        let options = new RequestOptions({ headers: headers });
        return options
    }
    
    private handleAuthServerResponse(response){
        if(response=="1"){
            //nice!
            this.isAuth=true;
            return;
        }
        this.isAuth=false;
        alert("You are not Authentificated, please go to Login page");
        //redirect user to login page!
    }
    protected handleError(error: Response) {
        console.log("Some problem from the server :/ ! "+error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
     goToProjects(){
         console.log("Try redirection to App/projects");
         let link= ['/BaseApp','Projects',{}];
         this.router.navigate(link);
    }
    logout(){
       
            localStorage.removeItem("auth");
            //let link = ['Login',{}];//Dormant bug!
            let link= ['/AuthBase','Login',{}]
            this.router.navigate(link);
        
    }
    
}
