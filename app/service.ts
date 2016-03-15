import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx' ;
 
@Injectable()
export class NotificationService {

    constructor(private http: Http) { }

    getAll() {
        var route = "http://localhost:64634/api/NotificationApi";
        let objHeader = {
            "Authorization": "Basic " + btoa("lamya@elle.org" + ":" + "123*Aa") 
        }
        let headers = new Headers(objHeader);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(route,options)
            .map(res => <any>res.json())
            .catch(this.handleError);
    }

    add(data) {
        var route = "";
        let body = JSON.stringify(data);
        return this.http.post(route, body)
            .map(res => <any>res.json())
            .catch(this.handleError)
    }



    private handleError(error: Response) {
        // Faire des choses interessantes dans la partie serveur: logging
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}