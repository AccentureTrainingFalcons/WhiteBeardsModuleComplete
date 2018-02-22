import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
name : 'orderBy',
pure: true // set to fale to show impure pipe
})
 export class OrderByPipe implements PipeTransform{
     transform(array: any[], field: string): any[]{
         console.log('sorting');
         if (!Array.isArray(array)){
             return array;
         }
         return array.sort((x,y) => x[field] > y[field] ? 1: x[field] < y[field] ? -1 : 0 );
     }
 }