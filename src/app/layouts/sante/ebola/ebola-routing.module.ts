import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbolaComponent } from './ebola.component';
import { EbolaAddComponent } from './ebola-add/ebola-add.component';
import { EbolaListComponent } from './ebola-list/ebola-list.component';
import { EbolaEditComponent } from './ebola-edit/ebola-edit.component';
import { EbolaViewComponent } from './ebola-view/ebola-view.component';


const routes: Routes = [
  { path: '', component: EbolaComponent, children: [
    { path: 'ebola-add', component: EbolaAddComponent },
    { path: 'ebola-list', component: EbolaListComponent },
    { path: 'ebola-edit/:id', component: EbolaEditComponent },
    { path: 'ebola-view/:id', component: EbolaViewComponent },

    { path: '', redirectTo: 'ebola-list', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EbolaRoutingModule { }
