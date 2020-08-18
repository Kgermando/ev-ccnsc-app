import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [ProfileComponent, ProfileUpdateComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    SharedModule
  ]
})
export class DashboardModule { }
