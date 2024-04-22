import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { DetoxComponent } from './components/detox/detox.component';
import { LypomaxComponent } from './components/lypomax/lypomax.component';
import { MagnesioComponent } from './components/magnesio/magnesio.component';
import { ColagenoComponent } from './components/colageno/colageno.component';
import { DigelasComponent } from './components/digelas/digelas.component';


@NgModule({
  declarations: [
    DetoxComponent,
    LypomaxComponent,
    MagnesioComponent,
    ColagenoComponent,
    DigelasComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
