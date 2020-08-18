import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LayoutsComponent, HomeComponent],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ]
})
export class LayoutsModule { }
