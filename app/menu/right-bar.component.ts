import {Component, OnInit, Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';
import {NotificationService} from "./notification.service"
@Component({
    selector: 'right-bar',
    templateUrl: 'app/menu/right-bar.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [NotificationService]
})

export class RightBarComponent implements OnInit {
     notifications: any = [];
     @Output("flipNotifBarEvent") flipNotifBarEvent = new EventEmitter();
     showNotifs=false;
    constructor(private notificationService: NotificationService) { }

     ngOnInit() {
        this.notificationService.getAll("").subscribe(
            resp=>this.handleResponse(resp)
        )
     }
     handleResponse(resp:any){
         let json = JSON.parse(resp);
         this.notifications=json;
         
     }
     flipNotifs(){
         console.log("flip cliked V:"+ this.showNotifs);
          this.flipNotifBarEvent.emit(this.showNotifs);
     }
     refresh(){
         this.ngOnInit();
     }
}