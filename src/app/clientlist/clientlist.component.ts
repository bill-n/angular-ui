import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../clientservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../clients';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css']
})
export class ClientlistComponent implements OnInit {

  constructor(  private clientservice: ClientserviceService,
    private router: Router) { }
    clientObservable: Observable<Client[]>;
    retrievedClients: Array<Client> = [];

    ngOnInit() {
      this.clientservice.getClients().subscribe(clients => {
         this.retrievedClients = clients;
        
          });
    }
 

}
