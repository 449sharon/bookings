import { Component, OnInit } from '@angular/core';
import { room } from '../model/room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  roomList: Array<room>;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.getRoom()
  }

  getRoom(){
    this.roomList = this.roomService.getRoom();
    console.log(this.roomList);
  }

}
