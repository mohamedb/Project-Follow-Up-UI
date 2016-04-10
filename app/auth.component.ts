import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, Location} from 'angular2/router';
import {LoginFormComponent} from './auth/login-form.component';
import {RegisterComponent} from './auth/register/register.component';
@Component({
    selector: 'auth-base',
    template:  `
    <router-outlet></router-outlet>
    `,
    directives: [ ROUTER_DIRECTIVES],
})
@RouteConfig([
    {
        path: '/Login',
        name: 'Login',
        component: LoginFormComponent,
        useAsDefault: true
    },
    {   
        /**
         * This component must not be a direct child of app.component
         * On logout it fails to load notifs => fails to display !
         */
        path: '/Register',
        name: 'Register',
        component: RegisterComponent,
    }
])
export class AuthBaseComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}