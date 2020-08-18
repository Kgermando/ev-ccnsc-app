import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/guard/auth.guard';
import { AdminGuard } from './auth/services/guard/admin.guard';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)},
  { path: 'layouts', loadChildren: () => import('../app/layouts/layouts.module').then(m => m.LayoutsModule),
    canActivate: [AuthGuard]
  },
  { path: 'admin', loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AdminGuard]},

  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: '**', redirectTo: 'auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
