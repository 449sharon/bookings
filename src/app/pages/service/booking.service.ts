import { Injectable } from '@angular/core';
import { booking } from '../model/booking';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  booking: Array<booking> = [
    {
      id: 1,
      name: "Example",
      cardno: 111111111111,
      cvv: 123,
      expmonth: "07",
      expyear: "2022",
      datein: "2019/30/1",
      dateout: "2019/06/15"
    }
  ];
 


  constructor() { }

  getBooking(): Array<booking>
  {
    return this.booking;
  }
  addBooking(v: any) {
    this.booking.push(v);
  }
}
