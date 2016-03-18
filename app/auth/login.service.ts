import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class LoginService {

    constructor(private http: Http) { }

    check(loginModel: any) {
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

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}