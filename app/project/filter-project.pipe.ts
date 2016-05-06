import {Pipe, PipeTransform} from 'angular2/core';
 
@Pipe({
    name: 'filterProject',
    pure: false
})

export class FilterProjectPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        let argValue= parseInt(args[0]);
        switch (argValue) {
            case -1:
                return items;
            case 0:
                return items.filter(item => item.Over == false);
            case 1:
                return items.filter(item => item.Over == true);
            default:
                return items;
        } 
    }
}