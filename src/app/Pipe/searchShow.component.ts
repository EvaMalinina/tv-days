import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(shows: any[], searchInput: string, fieldName: string): any[] {

    if (!shows) { return []; }

    if (!searchInput) { return shows; }

    searchInput = searchInput.toLowerCase();
    console.log(searchInput)
    return shows.filter(item => {
      if (item && item[fieldName]) {
        return item[fieldName].toLowerCase().includes(searchInput);
      }
      return false;
    });
  }
}
