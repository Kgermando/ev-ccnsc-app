import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSocioPolitiqueRoutingModule } from './admin-socio-politique-routing.module';
import { AdminSocioPolitiqueComponent } from './admin-socio-politique.component';
import { AdminSocioPoListComponent } from './admin-socio-po-list/admin-socio-po-list.component';
import { AdminSocioPoHomeComponent } from './admin-socio-po-home/admin-socio-po-home.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AdminSocioPolitiqueComponent, AdminSocioPoListComponent, AdminSocioPoHomeComponent],
  imports: [
    CommonModule,
    AdminSocioPolitiqueRoutingModule,
    SharedModule
  ]
})
export class AdminSocioPolitiqueModule { }
