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
  
    City: new FormControl(''),
    Telephone: new FormControl('')
  
  
  })


  constructor() { }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  ngOnInit() {
    
    
  }

}
