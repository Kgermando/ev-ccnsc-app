import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnvListComponent } from './env-list/env-list.component';
import { EnvAddComponent } from './env-add/env-add.component';
import { EnvEditComponent } from './env-edit/env-edit.component';
import { EnvironnementComponent } from './environnement.component';
import { EnvViewComponent } from './env-view/env-view.component';


const routes: Routes = [
  { path: '', component: EnvironnementComponent, children: [
    { path: 'env-list', component: EnvListComponent },
    { path: 'env-add', component: EnvAddComponent },
    { path: 'env-edit/:id', component: EnvEditComponent },
    { path: 'env-view/:id', component: EnvViewComponent },

    { path: '', redirectTo: 'env-list', pathMatch: 'full'}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnvironnementRoutingModule { }
