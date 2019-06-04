import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  error: string;
  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username+" "+password);
 
   if(username == 'admin' && password == '12345') {
     window.location.href = "/room-rates";
 
   }else {
     this.error = "Username/Password is Incorrect";
   }
 
  }

}
