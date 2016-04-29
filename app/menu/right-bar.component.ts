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
     markSeenUnseen(notifId:number){
         this.notificationService.markSeenUnseen(notifId).subscribe(
             res=> alert("success ?"+res),
             err=> confirm("Did you imlplemente yet the func?")
         )
     }
     handleResponse(res:any){
         this.notifications=res;
         
     }
     flipNotifs(){
         console.log("flip cliked V:"+ this.showNotifs);
          this.flipNotifBarEvent.emit(this.showNotifs);
     }
     refresh(){
         this.ngOnInit();
     }
}