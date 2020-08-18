import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocioPoListComponent } from './socio-po-list/socio-po-list.component';
import { SocioPoAddComponent } from './socio-po-add/socio-po-add.component';
import { SocioPoEditComponent } from './socio-po-edit/socio-po-edit.component';
import { SocioPolitiqueComponent } from './socio-politique.component';
import { SocioViewComponent } from './socio-view/socio-view.component';


const routes: Routes = [
  { path: '', component: SocioPolitiqueComponent, children: [
    { path: 'socio-p-list', component: SocioPoListComponent },
    { path: 'socio-p-add', component: SocioPoAddComponent },
    { path: 'socio-p-edit/:id', component: SocioPoEditComponent },
    { path: 'socio-p-view/:id', component: SocioViewComponent },

    { path: '', redirectTo: 'socio-p-list', pathMatch: 'full'}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocioPolitiqueRoutingModule { }
