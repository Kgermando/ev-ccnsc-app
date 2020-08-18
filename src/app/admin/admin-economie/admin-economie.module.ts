import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEconomieRoutingModule } from './admin-economie-routing.module';
import { AdminEconomieComponent } from './admin-economie.component';
import { AdminEcoListComponent } from './admin-eco-list/admin-eco-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminEcoHomeComponent } from './admin-eco-home/admin-eco-home.component';


@NgModule({
  declarations: [AdminEconomieComponent, AdminEcoListComponent, AdminEcoHomeComponent],
  imports: [
    CommonModule,
    AdminEconomieRoutingModule,

    SharedModule
  ]
})
export class AdminEconomieModule { }
