import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  retrievedclient =[
    {
    
    name: "bill",
    phone: "02444444",
    email: "bill@gmail.com",
    address: "legon"
    },
    {
    name: "ali",
    phone: "0275410383",
    email: "bill@gmail.com",
    address:"achimota"
    },
    {
      name: "mill",
      phone: "0275410383",
      email: "bill@gmail.com",
      address:"lapaz"
      },
  ]

}
