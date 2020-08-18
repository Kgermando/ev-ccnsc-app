import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocioPolitiqueRoutingModule } from './socio-politique-routing.module';
import { SocioPolitiqueComponent } from './socio-politique.component';
import { SocioPoListComponent } from './socio-po-list/socio-po-list.component';
import { SocioPoAddComponent } from './socio-po-add/socio-po-add.component';
import { SocioPoEditComponent } from './socio-po-edit/socio-po-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SocioViewComponent } from './socio-view/socio-view.component';


@NgModule({
  declarations: [SocioPolitiqueComponent, SocioPoListComponent, SocioPoAddComponent, SocioPoEditComponent, SocioViewComponent],
  imports: [
    CommonModule,
    SocioPolitiqueRoutingModule,

    SharedModule
  ]
})
export class SocioPolitiqueModule { }
