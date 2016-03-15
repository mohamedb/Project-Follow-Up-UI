
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
         HTTP_PROVIDERS,    
         // provide(LocationStrategy,{useClass: HashLocationStrategy}), // .../#/crisis-center/ 
         // provide(LocationStrategy, {useClass: HashLocationStrategy}),
         //  provide(APP_BASE_HREF, {useValue: '#'}),
         //  bind(APP_BASE_HREF).toValue('#'),
           bind(LocationStrategy).toClass(HashLocationStrategy)
         // provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
); 