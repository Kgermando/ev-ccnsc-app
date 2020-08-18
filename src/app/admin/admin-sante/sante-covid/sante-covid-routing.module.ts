import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanteCovidComponent } from './sante-covid.component';
import { SanteCovidHomeComponent } from './sante-covid-home/sante-covid-home.component';
import { SanteCovidListComponent } from './sante-covid-list/sante-covid-list.component';


const routes: Routes = [
  {path: '', component: SanteCovidComponent, children: [
    { path: 'sante-covid-home', component: SanteCovidHomeComponent },
    { path: 'sante-covid-list', component: SanteCovidListComponent },

    { path: '', redirectTo: 'sante-covid-home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanteCovidRoutingModule { }
