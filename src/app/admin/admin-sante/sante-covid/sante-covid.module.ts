import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SanteCovidRoutingModule } from './sante-covid-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SanteCovidComponent } from './sante-covid.component';
import { ProvinceComponent } from './province/province.component';
import { ContamineNouveauComponent } from './contamine-nouveau/contamine-nouveau.component';
import { EtatFinancementCovidComponent } from './etat-financement-covid/etat-financement-covid.component';
import { AccesibiliteStructureSanitaireCovidComponent } from './accesibilite-structure-sanitaire-covid/accesibilite-structure-sanitaire-covid.component';
import { SanteCovidListComponent } from './sante-covid-list/sante-covid-list.component';
import { SanteCovidHomeComponent } from './sante-covid-home/sante-covid-home.component';


@NgModule({
  declarations: [SanteCovidComponent, ProvinceComponent,  ContamineNouveauComponent, EtatFinancementCovidComponent, AccesibiliteStructureSanitaireCovidComponent, SanteCovidListComponent, SanteCovidHomeComponent],
  imports: [
    CommonModule,
    SanteCovidRoutingModule,
    SharedModule
  ]
})
export class SanteCovidModule { }
