import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureListComponent } from './secure-list/secure-list.component';
import { SecureAddComponent } from './secure-add/secure-add.component';
import { SecureEditComponent } from './secure-edit/secure-edit.component';
import { SecuritaireComponent } from './securitaire.component';
import { SecureViewComponent } from './secure-view/secure-view.component';


const routes: Routes = [
  { path: '', component: SecuritaireComponent, children: [
    { path: 'secure-list', component: SecureListComponent },
    { path: 'secure-add', component: SecureAddComponent },
    { path: 'secure-edit/:id', component: SecureEditComponent },
    { path: 'secure-view/:id', component: SecureViewComponent },

    { path: '', redirectTo: 'secure-list', pathMatch: 'full'}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuritaireRoutingModule { }
