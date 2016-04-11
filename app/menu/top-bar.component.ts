import {Component, OnInit, Output,EventEmitter} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';
import {NotificationService} from "./notification.service"
@Component({
    selector: 'top-bar',
    templateUrl: 'app/menu/top-bar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class TopBarComponent implements OnInit {
    @Output("flipNotifTopBarEvent") flipNotifBarEvent = new EventEmitter();
    @Output("flipMenuEvent") flipMenuEvent = new EventEmitter();
    
    constructor() {
       
     }

    ngOnInit() { 
       
    }
    flipMenu(){
        console.log("FlipMenu Event Emitted!");
        this.flipMenuEvent.emit(null);
    }
    flipNotifs(){
          this.flipNotifBarEvent.emit(null);
     }
     
}