import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: LayoutsComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'economie', loadChildren: () => import('../layouts/economie/economie.module').then(mm => mm.EconomieModule)},
    { path: 'environnement', loadChildren: () => import('../layouts/environnement/environnement.module').then(m => m.EnvironnementModule)},
    { path: 'securitaire', loadChildren: () => import('../layouts/securitaire/securitaire.module').then(m => m.SecuritaireModule)},
    { path: 'socio-politique', loadChildren: () => import('../layouts/socio-politique/socio-politique.module')
      .then(m => m.SocioPolitiqueModule)},
    { path: 'sante', loadChildren: () => import('../../app/layouts/sante/sante.module').then(m => m.SanteModule)},
    { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)},

    { path: '', redirectTo: 'home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
