import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx' ;
 
@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    check(loginModel:any) {
        var route = "http://localhost:64634/api/AccountApi/Check";
        let objHeader = {
            //"Authorization": "Basic " + btoa(loginModel.username + ":" + loginModel.password) ,
            accepts: "application/json; charset=utf-8",
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
        let headers = new Headers(objHeader);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(route)
            .map(res => <any>res.json())
            .catch(this.handleError);
    }
 
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}