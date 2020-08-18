import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminHeaderComponent } from './navigation/admin-header/admin-header.component';
import { AdminSidebarComponent } from './navigation/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './navigation/admin-footer/admin-footer.component';


@NgModule({
  declarations: [AdminComponent, AdminHeaderComponent, AdminSidebarComponent, AdminFooterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,

    SharedModule
  ]
})
export class AdminModule { }
