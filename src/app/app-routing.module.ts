import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientpageComponent } from './clientpage/clientpage.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';




const routes: Routes = [
  {path: 'client', component:ClientpageComponent},
  {path:'home', component:HomeComponent},
  {path:'footer', component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
