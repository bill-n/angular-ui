import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientpageComponent } from './clientpage/clientpage.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AddclientComponent } from './addclient/addclient.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientdetailsComponent } from './clientdetails/clientdetails.component';




const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'client', component:ClientpageComponent},
  {path:'home', component:HomeComponent},
  {path:'footer', component:FooterComponent},
  
  {path:'addclient', component:AddclientComponent},
  {path:'clientlist',component:ClientlistComponent},
  {path:'clientdetails',component:ClientdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
