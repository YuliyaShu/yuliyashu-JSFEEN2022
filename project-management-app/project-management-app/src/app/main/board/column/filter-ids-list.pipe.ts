import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterIdsList'
})
export class FilterIdsListPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    return value.filter(unit => unit !== args[0]);
  }

}
