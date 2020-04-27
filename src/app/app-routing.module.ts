import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserconfirmComponent } from './userconfirm/userconfirm.component';
import { CreateuserComponent } from './createuser/createuser.component';


const routes: Routes = [
  { path: 'home', component: CreateuserComponent },
  { path: 'confirm', component: UserconfirmComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: CreateuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
