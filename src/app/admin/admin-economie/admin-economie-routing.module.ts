import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminEconomieComponent } from './admin-economie.component';
import { AdminEcoListComponent } from './admin-eco-list/admin-eco-list.component';
import { AdminEcoHomeComponent } from './admin-eco-home/admin-eco-home.component';


const routes: Routes = [
  {path: '', component: AdminEconomieComponent, children: [
    { path: 'admin-eco-home', component: AdminEcoHomeComponent },
    { path: 'admin-eco-list', component: AdminEcoListComponent },

    { path: '', redirectTo: 'admin-eco-list', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminEconomieRoutingModule { }
