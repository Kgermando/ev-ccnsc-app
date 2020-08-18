import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'admin-sante', loadChildren: () => import('../admin/admin-sante/admin-sante.module').then(m => m.AdminSanteModule)},
    { path: 'admin-economie', loadChildren: () => import('../admin/admin-economie/admin-economie.module').then(m => m.AdminEconomieModule)},
    { path: 'admin-socio-politique', loadChildren: () => import('../admin/admin-socio-politique/admin-socio-politique.module')
      .then(m => m.AdminSocioPolitiqueModule)},
    { path: 'admin-securitaire', loadChildren: () => import('../admin/admin-securitaire/admin-securitaire.module')
      .then(m => m.AdminSecuritaireModule)},
    { path: 'admin-environnement', loadChildren: () => import('../admin/admin-environnement/admin-environnement.module')
      .then(m => m.AdminEnvironnementModule)},
    { path: 'history', loadChildren: () => import('../admin/history/history.module').then(m => m.HistoryModule)},
    { path: 'users', loadChildren: () => import('../admin/users/users.module').then(m => m.UsersModule)},

    { path: '', redirectTo: 'admin-sante', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
