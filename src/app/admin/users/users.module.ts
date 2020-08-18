import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [UsersComponent, UsersListComponent, UsersViewComponent, UsersAddComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    SharedModule
  ]
})
export class UsersModule { }
