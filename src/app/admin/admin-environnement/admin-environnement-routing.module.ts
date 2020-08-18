import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEnvironnementComponent } from './admin-environnement.component';
import { AdminEnvHomeComponent } from './admin-env-home/admin-env-home.component';
import { AdminEnvListComponent } from './admin-env-list/admin-env-list.component';


const routes: Routes = [
{ path: '', component: AdminEnvironnementComponent, children: [
  {path: 'admin-env-home', component: AdminEnvHomeComponent },
  {path: 'admin-env-list', component: AdminEnvListComponent },

  { path: '', redirectTo: 'admin-env-home', pathMatch: 'full'}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEnvironnementRoutingModule { }
