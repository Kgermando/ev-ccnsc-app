import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEnvironnementRoutingModule } from './admin-environnement-routing.module';
import { AdminEnvironnementComponent } from './admin-environnement.component';
import { AdminEnvListComponent } from './admin-env-list/admin-env-list.component';
import { AdminEnvHomeComponent } from './admin-env-home/admin-env-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminEnvCalamiteComponent } from './admin-env-calamite/admin-env-calamite.component';
import { AdminEnvAirprotegerComponent } from './admin-env-airproteger/admin-env-airproteger.component';


@NgModule({
  declarations: [AdminEnvironnementComponent, AdminEnvListComponent, AdminEnvHomeComponent, AdminEnvCalamiteComponent, AdminEnvAirprotegerComponent],
  imports: [
    CommonModule,
    AdminEnvironnementRoutingModule,

    SharedModule
  ]
})
export class AdminEnvironnementModule { }
