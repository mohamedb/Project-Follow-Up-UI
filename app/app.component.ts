import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {NotificationService} from './service';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    directives: [],
    providers: [NotificationService,HTTP_PROVIDERS] 
})
export class AppComponent {
     notifs:any;
    constructor(private notifService:NotificationService){
        this.load();
    }
     
    load(){  this.notifService.getAll().subscribe(
                     dataFromServer => this.notifs=dataFromServer,
                     error =>  console.log(JSON.stringify(error))
       );
    } 
 }