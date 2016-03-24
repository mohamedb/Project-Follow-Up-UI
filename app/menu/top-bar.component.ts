import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';
import {NotificationService} from "./notification.service"
@Component({
    selector: 'top-bar',
    templateUrl: 'app/menu/top-bar.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class TopBarComponent implements OnInit {
   
    constructor() {
       
     }

    ngOnInit() { 
       
    }
}