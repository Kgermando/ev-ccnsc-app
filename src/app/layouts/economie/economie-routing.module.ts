import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EcoListComponent } from './eco-list/eco-list.component';
import { EcoAddComponent } from './eco-add/eco-add.component';
import { EcoEditComponent } from './eco-edit/eco-edit.component';
import { EconomieComponent } from './economie.component';
import { EcoViewComponent } from './eco-view/eco-view.component';
import { AdminGuard } from 'src/app/auth/services/guard/admin.guard';
import { AgentGuard } from 'src/app/auth/services/guard/agent.guard';


const routes: Routes = [
  { path: '', component: EconomieComponent, children: [
    { path: 'eco-list', component: EcoListComponent},
    { path: 'eco-add', component: EcoAddComponent,
      canActivate:[AgentGuard]
    },
    { path: 'eco-edit/:id', component: EcoEditComponent,
     canActivate:[AgentGuard]
    },
    { path: 'eco-view/:id', component: EcoViewComponent},

    { path: '', redirectTo: 'eco-list', pathMatch: 'full'}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EconomieRoutingModule { }
