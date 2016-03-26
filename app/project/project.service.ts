import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';
import {BaseService} from './../shared/base.service';
import {AppRouteConst} from './../shared/app.const';
import {ProjectModel} from "./project.model";
@Injectable()
export class ProjectService extends BaseService {

    constructor(protected http:Http, protected router:Router) {
        super(http,router);
     }

    getAll(data: any) {
        console.log("auth: "+localStorage.getItem("auth"));
        //let body = JSON.stringify(data);
        return this.http.get(AppRouteConst.LIST_PROJECT, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    
    saveProject(project:ProjectModel){
        let body = JSON.stringify(project);
         
        let route= AppRouteConst.ADD_PROJECT;
        if(project.Id>0){ //Edit case
            route= AppRouteConst.EDIT_PROJECT;
        }
        return this.http.post(route, body, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(this.handleError);
        
    }
    
    getProjectViewModel(id:number){
       return this.http.get(AppRouteConst.EDIT_PROJECT+"?id="+id, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(this.handleError); 
    }
    
    
}