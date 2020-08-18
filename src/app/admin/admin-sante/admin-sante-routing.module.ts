import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSanteComponent } from './admin-sante.component';


const routes: Routes = [
  { path: '', component: AdminSanteComponent, children: [
    { path: 'sante-covid', loadChildren: () => import('../admin-sante/sante-covid/sante-covid.module').then( m => m.SanteCovidModule)},
    { path: 'sante-ebola', loadChildren: () => import('../admin-sante/sante-ebola/sante-ebola.module').then(m => m.SanteEbolaModule)},

    { path: '', redirectTo: 'sante-covid', pathMatch: 'full'}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSanteRoutingModule { }
