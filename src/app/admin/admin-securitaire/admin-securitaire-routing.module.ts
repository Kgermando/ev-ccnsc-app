import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSecuritaireComponent } from './admin-securitaire.component';
import { AdminSecuritaireHomeComponent } from './admin-securitaire-home/admin-securitaire-home.component';
import { AdminSecuritaireListComponent } from './admin-securitaire-list/admin-securitaire-list.component';


const routes: Routes = [
  {path: '', component: AdminSecuritaireComponent, children: [
    { path: 'admin-securitaire-home', component: AdminSecuritaireHomeComponent },
    { path: 'admin-securitaire-list', component: AdminSecuritaireListComponent },

    { path: '', redirectTo: 'admin-securitaire-home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSecuritaireRoutingModule { }
