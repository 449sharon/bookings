import { Component, OnInit } from '@angular/core';
import { room } from '../model/room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../service/room.service';
 
//import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  selectedID: number;
  room: room; 

  constructor(
    private activeRouter: ActivatedRoute,
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(data => {
      this.selectedID = data.id;
    });
    this.getRoomById();
  }
  getRoomById(){
    this.room = this.roomService.getRoomById(this.selectedID);
  }
  onSubmit(v)
  {
  
    this.roomService.viewRoom(v);
    this.router.navigate([""]);
  }

  make(room , price ){

    let obj ={
      room:room ,
      price:price

    }

    arry.push(obj)

    this.router.navigateByUrl("/book") ;


  }
  }


var arry = new Array() 

export default arry ;