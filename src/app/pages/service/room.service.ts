import { Injectable } from '@angular/core';
import { room } from '../model/room';
import { booking } from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

 
  room: Array<room> = [{
    id: 1,
    name: "Luxury room",
    image: "'../../assets/luxury.jpg",
    image2: "../../assets/luxiries1.jpg",
    image3: "../../assets/luxuries3.jpg",
   price: "R3000 pm",
    description: "wifi,inside bathroom ."
  },
  {id: 2,
    name: "Master bedroom",
    image: "../../assets/master.jpg",
    image2: "../../assets/master1.jpg",
    image3: "../../assets/master2.jpg",
   price: "R 4000 pm",
    description: "wifi,inside bathroom and a tv with dstv"
  },
  {id: 3,
    name: "Sharing bedroom",
    image: "../../assets/sharing.jpg",
    image2: "../../assets/sharing1.jpg",
    image3: "../../assets/sharing.jpg",
   price: "R 3500pm",
    description: "for friends, tv and dstv,wifi and inside bathroom"
  },
  {id: 4,
    name: "Kids Rooms",
    image: "../../assets/kids.jpg",
    image2: "../../assets/kids2.jpg",
    image3: "../../assets/kids3.jpg",
  price: "R 1800 pm",
    description: "tv and dstv,playroom"
  },
  {id: 5,
    name: "white Rooms",
    image: "../../assets/white.jpg",
    image2: "../../assets/white2.jpg",
    image3: "../../assets/bathroom-remodel.jpg",
   price: "R 2000 pm",
    description: " inside bathrooom,tv and dstv,wifi"
  },
  {id: 6,
    name: "Wedding Receptions",
    image: "../../assets/event.jpg",
    image2: "../../assets/event1.jpg",
    image3: "../../assets/event2.jpg",
   price: "R 3000 pm",
    description: "host wedding receptions with catering and parties,wifi"
  }


]
  booking: any;

  constructor() { }
  getRoom(): Array<room>{
    return this.room;
  }  

  getRoomById(id: number){
    let tempRoom: room;
    this.room.map(a=>{
      if(a.id == id){
        tempRoom = a;
      }
    });
    return tempRoom;
  }

  viewRoom(room: room){
    this.room.map((a, index) => {
      if (a.id === room.id) {
        a.name = room.name;
        a.image = room.image;
        a.image2 = a.image2;
        a.image3 = a.image3;
        a.price = room.price;
        a.description = room.description;
      }
    });
  }
  getBookingById(id: number) {
    let tempBook: booking;
    this.booking.map(a=>{
      if(a.id == id){
        tempBook = a;
      }
    });
    return tempBook;
  }
}
 