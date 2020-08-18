import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanteRoutingModule } from './sante-routing.module';
import { SanteComponent } from './sante.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SanteHomeComponent } from './sante-home/sante-home.component';


@NgModule({
  declarations: [SanteComponent, SanteHomeComponent],
  imports: [
    CommonModule,
    SanteRoutingModule,

    SharedModule
  ]
})
export class SanteModule { }
