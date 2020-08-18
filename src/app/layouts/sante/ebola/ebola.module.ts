import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbolaRoutingModule } from './ebola-routing.module';
import { EbolaComponent } from './ebola.component';
import { EbolaAddComponent } from './ebola-add/ebola-add.component';
import { EbolaListComponent } from './ebola-list/ebola-list.component';
import { EbolaEditComponent } from './ebola-edit/ebola-edit.component';
import { EbolaViewComponent } from './ebola-view/ebola-view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EbolaComponent, EbolaAddComponent, EbolaListComponent, EbolaEditComponent, EbolaViewComponent],
  imports: [
    CommonModule,
    EbolaRoutingModule,
    SharedModule
  ]
})
export class EbolaModule { }
