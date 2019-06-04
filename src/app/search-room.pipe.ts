import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRoom'
})
export class SearchRoomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
