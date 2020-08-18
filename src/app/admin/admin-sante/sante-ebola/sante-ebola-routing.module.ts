import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SanteEbolaComponent } from './sante-ebola.component';
import { SanteEbolaHomeComponent } from './sante-ebola-home/sante-ebola-home.component';
import { SanteEbolaListComponent } from './sante-ebola-list/sante-ebola-list.component';


const routes: Routes = [
  {path: '', component: SanteEbolaComponent, children: [
    {path: 'sante-ebola-home', component: SanteEbolaHomeComponent },
    {path: 'sante-ebola-list', component: SanteEbolaListComponent },

    { path: '', redirectTo: 'sante-ebola-list', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanteEbolaRoutingModule { }
