import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './clients';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientserviceService {

  constructor(private http: HttpClient) { }
   private clientsUrl = "https://boiling-bastion-30474.herokuapp.com";
   getClients(): Observable<Client[]>{
     return this.http.get<Client[]>(this.clientsUrl + "/clients");
   }
  

}
