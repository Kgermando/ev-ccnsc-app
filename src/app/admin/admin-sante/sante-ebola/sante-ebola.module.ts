import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanteEbolaRoutingModule } from './sante-ebola-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SanteEbolaComponent } from './sante-ebola.component';
import { SanteEbolaListComponent } from './sante-ebola-list/sante-ebola-list.component';
import { SanteEbolaHomeComponent } from './sante-ebola-home/sante-ebola-home.component';
import { EtatAccessibiliteComponent } from './etat-accessibilite/etat-accessibilite.component';
import { AccessibiliteComponent } from './accessibilite/accessibilite.component';
import { EbolaProvinceComponent } from './ebola-province/ebola-province.component';


@NgModule({
  declarations: [SanteEbolaComponent, SanteEbolaListComponent, SanteEbolaHomeComponent, EtatAccessibiliteComponent, AccessibiliteComponent, EbolaProvinceComponent],
  imports: [
    CommonModule,
    SanteEbolaRoutingModule,
    SharedModule
  ]
})
export class SanteEbolaModule { }
