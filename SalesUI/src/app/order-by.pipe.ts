import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], field: string, reverse : boolean = false): any[] {
    if(Array.isArray(array)){
    }
    array.sort((a:any, b:any)=>{
      const aValue = a[field];
      const bValue = b[field];

      if(typeof aValue === 'string' && typeof bValue === 'string'){
        return reverse ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
      }
      else{
        return reverse ? bValue - aValue : aValue - bValue;
      }
    });
    return array;
  }

}
