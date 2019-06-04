import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-room-rates',
  templateUrl: './room-rates.component.html',
  styleUrls: ['./room-rates.component.scss']
})
export class RoomRatesComponent implements OnInit {
  title = ' Bookings';
 
   id :number;
  name:string;
 price:string;
   roomType: string;
   description: string;
image : string;
  
rooms: any=[
  {id :1,image:'../../assets/luxury.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
  {id :2,image:'../../assets/purple.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
  {id :3,image:'../../assets/room1.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
  {id :4,image:'../../assets/room2.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
  {id :5,image:'../../assets/sharing.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
  {id :6,image:'../../assets/weddingLounge.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
  {id :7,image:'../../assets/luxury.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
  {id :8,image:'../../assets/luxury.jpg',name:"luxuxy Room",description:" Tv,wifi,Hairdry and inside bathroom"},
];
  
  model:any= {};
  model2: any= {};
  msg:any="";
  addRoom(){
    this.rooms.push(this.model)
    this.model ={};
  }
  myValue;
  viewRoom(k){
    this.model2.id =this.rooms[k].id;
    this.model2.image =this.rooms[k].image;
    this.model2.name =this.rooms[k].name;
    this.model.roomType=this.rooms[k].roomType;
    this.model2.price =this.rooms[k].price;
    this.model2.description =this.rooms[k].description;
    
    this.myValue =k;
  }
  updateEmployee(){ 
    let k = this.myValue;
    for (let i =0; i<this.rooms.length;i++)
    if(i==k){
      this.rooms[i] =this.model2;
      this.rooms={};
      this.msg ="you have successfully book your room......."
     
    } 
  }
  clickMe(){
    this.msg="";
  
    }
  
  constructor() { }


  ngOnInit() {
  }

  members = [];
  rez = [];
  flo:any = {};
  flo2:any = {};
  api:any ={};
  link:string;
 
  val;
 aprice;
 cprice;
 total;
 ctotal;
 res1(x)
 {
 console.log(x);
 this.val = x;
 
 }
 
 enter()
 {
 
 this.members.push(this.flo);
 this.flo ={};
 console.log(this.members);
 }
 
 vc()
 {
 
 
 
 
 if(this.val==0)
 {
 this.cprice = 250;
 this.aprice = 400;
 this.total = this.members[0].days*this.cprice*this.members[0].child;
 this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
 this.flo2.cost = this.total + this.ctotal;
 this.members.splice(0,1);
 
 
 
 }
 else if(this.val==1)
 {
 console.log("5002");
 this.cprice = 400;
 this.aprice = 750;
 this.total = this.members[0].days*this.cprice*this.members[0].child;
 this.ctotal = this.members[0].days*this.aprice*this.members[0].adult;
 this.flo2.cost = this.total + this.ctotal;
 this.members.splice(0,1);
 }
 
 
 
 }
 
 
 
 
 save()
 {
 this.rez.push(this.api);
 this.api = {};
 }


bookRoom(){
   
}
}
