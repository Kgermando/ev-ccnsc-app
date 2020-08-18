import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CovidRoutingModule } from './covid-routing.module';
import { CovidComponent } from './covid.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CovidAddComponent } from './covid-add/covid-add.component';
import { CovidListComponent } from './covid-list/covid-list.component';
import { CovidEditComponent } from './covid-edit/covid-edit.component';
import { CovidViewComponent } from './covid-view/covid-view.component';


@NgModule({
  declarations: [CovidComponent, CovidAddComponent, CovidListComponent, CovidEditComponent, CovidViewComponent],
  imports: [
    CommonModule,
    CovidRoutingModule,

    SharedModule
  ]
})
export class CovidModule { }
