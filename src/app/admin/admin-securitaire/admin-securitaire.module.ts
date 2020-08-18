import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSecuritaireRoutingModule } from './admin-securitaire-routing.module';
import { AdminSecuritaireComponent } from './admin-securitaire.component';
import { AdminSecuritaireListComponent } from './admin-securitaire-list/admin-securitaire-list.component';
import { AdminSecuritaireHomeComponent } from './admin-securitaire-home/admin-securitaire-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RelationAcSecureComponent } from './relation-ac-secure/relation-ac-secure.component';
import { RelationAcSecureMediaComponent } from './relation-ac-secure-media/relation-ac-secure-media.component';


@NgModule({
  declarations: [AdminSecuritaireComponent, AdminSecuritaireListComponent, AdminSecuritaireHomeComponent, RelationAcSecureComponent, RelationAcSecureMediaComponent],
  imports: [
    CommonModule,
    AdminSecuritaireRoutingModule,

    SharedModule
  ]
})
export class AdminSecuritaireModule { }
