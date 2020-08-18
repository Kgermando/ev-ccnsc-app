import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuritaireRoutingModule } from './securitaire-routing.module';
import { SecuritaireComponent } from './securitaire.component';
import { SecureListComponent } from './secure-list/secure-list.component';
import { SecureAddComponent } from './secure-add/secure-add.component';
import { SecureEditComponent } from './secure-edit/secure-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecureViewComponent } from './secure-view/secure-view.component';


@NgModule({
  declarations: [SecuritaireComponent, SecureListComponent, SecureAddComponent, SecureEditComponent, SecureViewComponent],
  imports: [
    CommonModule,
    SecuritaireRoutingModule,

    SharedModule
  ]
})
export class SecuritaireModule { }
