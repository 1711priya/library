import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BookComponent } from './book/book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'login',component:RegistrationComponent
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'add-user',component:AddUserComponent
  },
  {
    path:'view-books', component:BookComponent
  },
  {
    path:'edit-book/:id',component:EditBookComponent
  },
  {
    path:'admin-login',component:AdminAuthComponent
  },
  {
    path:'view-users',component:UsersComponent
  },
  {
    path:'edit-user/:id',component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
