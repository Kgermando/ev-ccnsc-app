import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSanteRoutingModule } from './admin-sante-routing.module';
import { AdminSanteComponent } from './admin-sante.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AdminSanteComponent],
  imports: [
    CommonModule,
    AdminSanteRoutingModule,
    SharedModule
  ]
})
export class AdminSanteModule { }
