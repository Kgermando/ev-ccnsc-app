import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvironnementRoutingModule } from './environnement-routing.module';
import { EnvironnementComponent } from './environnement.component';
import { EnvListComponent } from './env-list/env-list.component';
import { EnvAddComponent } from './env-add/env-add.component';
import { EnvEditComponent } from './env-edit/env-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EnvViewComponent } from './env-view/env-view.component';


@NgModule({
  declarations: [EnvironnementComponent, EnvListComponent, EnvAddComponent, EnvEditComponent, EnvViewComponent],
  imports: [
    CommonModule,
    EnvironnementRoutingModule,

    SharedModule
  ]
})
export class EnvironnementModule { }
