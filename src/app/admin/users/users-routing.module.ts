import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';


const routes: Routes = [
  { path: '', component: UsersComponent, children: [
    { path: 'user-add', component: UsersAddComponent },
    { path: 'users-list', component: UsersListComponent },
    { path: 'user-view/:id', component: UsersViewComponent },

    { path: '', redirectTo: 'users-list', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
