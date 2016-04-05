import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'filterProject',
    pure: false
})

export class FilterProjectPipe implements PipeTransform {
    transform(items: any[], args: any[]) : any {
        
       return items.filter(item => item.type == "CHAMBRE");
    }
}