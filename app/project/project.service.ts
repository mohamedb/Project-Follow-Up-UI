import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';
import {BaseService} from './../shared/base.service';
import {ProjectModel} from "./project.model";
@Injectable()
export class ProjectService extends BaseService {

    constructor(protected http:Http, protected router:Router) {
        super(http,router);
        
     }

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
            .catch(super.handleError);
    }
    
    saveProject(project:ProjectModel){
        var route = "http://localhost:64634/api/ProjectApi/Add";
        let body = JSON.stringify(project);
        let headers = new Headers(
            { "Content-Type": "application/json",
              "Authorization": localStorage.getItem("auth"),
              "accepts": "application/json; charset=utf-8",
            });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(route, body, options)
            .map(res => <any> res.json())
            .catch(this.handleError);
        
    }

    
}