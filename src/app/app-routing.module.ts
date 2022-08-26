import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ViewBookComponent } from './view-book/view-book.component';
const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  // {path:'dashboard' ,component:DashboardComponent},
  {path:'view-book' ,component:ViewBookComponent},
  {path:'',redirectTo:'login',pathMatch:'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
