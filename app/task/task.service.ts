import {Injectable}     from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Rx';
import {BaseService} from './../shared/base.service';
import {AppRouteConst} from './../shared/app.const';
import {TaskModel} from './task.model';

@Injectable()
export class TaskService extends BaseService {

    constructor(protected http:Http, protected router:Router) {
        super(http,router);
     }

    getTaskEntity(taskId:number) {       
        return this.http.get(AppRouteConst.GET_TASK+"?id="+taskId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    
    /**
     * Get initialized instance of model for ADD including additional data
     */
    getTaskModel(projectId:number){
        return this.http.get(AppRouteConst.ADD_TASK+"?id="+projectId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    
    /**
     * Save Model
     */
    saveTaskModel(taskModel:TaskModel){
        let body = JSON.stringify(taskModel);
        return this.http.post(AppRouteConst.ADD_TASK,body, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    
    changeStateTask(taskId:number){
         return this.http.get(AppRouteConst.CHANGE_STATE_TASK+"?id="+taskId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError); 
    }
    
    /**
     * Plan a task for current day
     */
    planTaskForCurrentDay(taskId:number){
         return this.http.get(AppRouteConst.PLAN_FOR_CURRENT_DAY_TASK+"?id="+taskId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
    
    /**
     * Postpone a task
     */
    postpone(taskId:number){
         return this.http.get(AppRouteConst.POSTPONE_TASK+"?id="+taskId, this.getReqOptions())
            .map(res => <any> res.json())
            .catch(super.handleError);
    }
}