import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
@Component({
    selector: 'left-menu',
    templateUrl: 'app/menu/left-menu.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class LeftMenuComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}