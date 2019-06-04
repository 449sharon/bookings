import { Pipe, PipeTransform } from '@angular/core';
import { room } from './pages/model/room';

@Pipe({
  name: 'searchRooms'
})
export class SearchRoomsPipe implements PipeTransform {

  transform(value: Array<room>, args?: string): any {
    if(!args){
      return value;
    }
    args = args.toLowerCase();
    
    return value.filter(room =>{
      return room.name.toLowerCase().includes(args);
    });
  }

}
