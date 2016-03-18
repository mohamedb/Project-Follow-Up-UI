import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class BaseService {
    isAuth=false;
    constructor(protected http: Http) { 
        this.check();
    }
    check():boolean {
        var route = "http://localhost:64634/api/AccountApi/Verify";
        let body = JSON.stringify("");
        let headers = new Headers(
            { "Content-Type": "application/json",
               "Authorization": localStorage.getItem("auth"),
              "accepts": "application/json; charset=utf-8",
            });
        let options = new RequestOptions({ headers: headers });
        let response= this.http.post(route, body, options)
            .map(res => <any> res.json())
            .catch(this.handleError);
       response.subscribe(resp=>this.handleAuthServerResponse(resp));
       return this.isAuth;
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
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}