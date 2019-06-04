import { Component, OnInit } from '@angular/core';
import { booking } from '../model/booking';
import { BookingService } from '../service/booking.service';
import arry from '../view/view.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 bookingList: Array<booking>;
 d =arry ;

 room ;
 price ;
  constructor(private bookingService: BookingService) {
    this.room=this.d[0].room ;
this.price = this.d[0].price
   }

  ngOnInit() {
    this.getBooking();
  }
  getBooking(){
    this.bookingList = this.bookingService.getBooking();
    console.log(this.bookingList);
  }

}
