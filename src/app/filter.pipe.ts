import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // defualt falue to search is empty string 
  transform(array: any [] , searchKey?: string): any {
      // search in product by name has a [searchKey]  
    return array.filter(element => element.name.indexOf(searchKey) > -1);
  }

}
