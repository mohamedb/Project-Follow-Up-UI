import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'formatLongText',
    pure: false
})

/*
 var str = "Hello world!";
 var res = str.substr(1, 4);
 -> ello
 Extends: if args[0]=null default = 37
*/
export class FormatLongTextPipe implements PipeTransform {
    transform(value: any, args: any[]): any {
        let len   = args[0];
        let start = args[1];
        if(!isNaN(start) && start>0){
          return  " .. "+value.substr(start,len)+" ..." ;
        }
        return value.substr(0,len) +" ... ";
    }
}