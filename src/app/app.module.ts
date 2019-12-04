import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientpageComponent } from './clientpage/clientpage.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AddclientComponent } from './addclient/addclient.component';
import { ClientlistComponent } from './clientlist/clientlist.component';

// import { ClientserviceComponent } from './clientservice/clientservice.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientpageComponent,
    HomeComponent,
    FooterComponent,
    AddclientComponent,
    ClientlistComponent,
    // ClientserviceComponent,
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
