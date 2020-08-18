import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid.component';
import { CovidAddComponent } from './covid-add/covid-add.component';
import { CovidListComponent } from './covid-list/covid-list.component';
import { CovidEditComponent } from './covid-edit/covid-edit.component';
import { CovidViewComponent } from './covid-view/covid-view.component';
import { AgentGuard } from 'src/app/auth/services/guard/agent.guard';


const routes: Routes = [
  { path: '', component: CovidComponent, children: [
    { path: 'covid-add', component: CovidAddComponent, canActivate: [AgentGuard] },
    { path: 'covid-list', component: CovidListComponent },
    { path: 'covid-edit/:id', component: CovidEditComponent, canActivate: [AgentGuard] },
    { path: 'covid-view/:id', component: CovidViewComponent },

    { path: '', redirectTo: 'covid-list', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
