import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';

@Injectable()
export class ProjectService {

    constructor(private http: Http) { }

    getAll(data: any) {
        console.log("auth: "+localStorage.getItem("auth"));
        var route = "http://localhost:64634/api/ProjectApi/List";
        //let body = JSON.stringify(data);
        let headers = new Headers(
            { "Content-Type": "application/json",
              "Authorization": localStorage.getItem("auth"),
              "accepts": "application/json",
            });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(route, options)
            .map(res => <any> res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}