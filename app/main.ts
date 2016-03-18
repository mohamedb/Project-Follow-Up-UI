
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component';
import {provide,bind} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {APP_BASE_HREF, ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy } from 'angular2/router';
import 'rxjs/Rx'; 
 
bootstrap(
    AppComponent,
    [
         ROUTER_PROVIDERS,  
         provide(LocationStrategy, { useClass: HashLocationStrategy }),
         HTTP_PROVIDERS,    
         
    ]
); 