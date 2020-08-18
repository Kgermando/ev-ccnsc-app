import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomieRoutingModule } from './economie-routing.module';
import { EconomieComponent } from './economie.component';
import { EcoListComponent } from './eco-list/eco-list.component';
import { EcoAddComponent } from './eco-add/eco-add.component';
import { EcoEditComponent } from './eco-edit/eco-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EcoViewComponent } from './eco-view/eco-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EconomieComponent, EcoListComponent, EcoAddComponent, EcoEditComponent, EcoViewComponent],
  imports: [
    CommonModule,
    EconomieRoutingModule,

    SharedModule
  ]
})
export class EconomieModule { }
