import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RegisterModel} from './register.model';
import {RegisterService} from './register.service';
@Component({
    selector: 'register',
    templateUrl: 'app/auth/register/register.component.html',
    providers: [RegisterService],
    directives: [ROUTER_DIRECTIVES]
})

 /**
  * @todo Add form validations
  */
export class RegisterComponent implements OnInit {
    registerModel:RegisterModel= new RegisterModel();
    errors= {};
    constructor(private registerService:RegisterService) { }

    ngOnInit() { }
     
    save(){
        this.registerService.register(this.registerModel).subscribe(
            response=>this.handleRegisterResponse,
            errors=>this.errors=errors
        )
    }
    handleRegisterResponse(response){
        response = JSON.parse(response);
        console.log(response);
        if(response.State==1){
           alert("Your account is added, please login now!");
        }
    }
}