import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchFilter: any): any {
    return value.filter((e: any) => {
      return e.name.toLowerCase().indexOf(searchFilter) > -1;
    });
  }
}
