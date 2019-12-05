import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent  {
  
  profileForm = new FormGroup({
    Fname: new FormControl(''),
    Address: new FormControl(''),
    Project_Description: new FormControl(''),
    City: new FormControl(''),
    Phone_Number: new FormControl('')
  
  
  })


  constructor() { }

  ngOnInit() {
    
  }

}
