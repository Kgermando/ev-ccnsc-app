import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanteComponent } from './sante.component';
import { SanteHomeComponent } from './sante-home/sante-home.component';


const routes: Routes = [
  { path: '', component: SanteComponent, children: [
    { path: 'covid', loadChildren: () => import('../sante/covid/covid.module').then(m => m.CovidModule)},
    { path: 'ebola', loadChildren: () => import('../sante/ebola/ebola.module').then(m => m.EbolaModule)},
    { path: 'sante-home', component: SanteHomeComponent },

    { path: '', redirectTo: 'sante-home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanteRoutingModule { }
