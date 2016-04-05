import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'filterProject'
})

export class FilterProjectPipe implements PipeTransform {
    transform(value: any, args: any) : any {
        
    }
}