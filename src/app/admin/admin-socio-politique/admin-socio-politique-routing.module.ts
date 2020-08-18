import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSocioPolitiqueComponent } from './admin-socio-politique.component';
import { AdminSocioPoHomeComponent } from './admin-socio-po-home/admin-socio-po-home.component';
import { AdminSocioPoListComponent } from './admin-socio-po-list/admin-socio-po-list.component';


const routes: Routes = [
  { path: '', component: AdminSocioPolitiqueComponent, children: [
    { path: 'admin-socio-po-home', component: AdminSocioPoHomeComponent},
    { path: 'admin-socio-po-list', component: AdminSocioPoListComponent },

    { path: '', redirectTo: 'admin-socio-po-home', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSocioPolitiqueRoutingModule { }
