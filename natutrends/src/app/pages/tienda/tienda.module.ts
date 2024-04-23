import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { DetoxComponent } from './components/detox/detox.component';
import { LypomaxComponent } from './components/lypomax/lypomax.component';
import { MagnesioComponent } from './components/magnesio/magnesio.component';
import { ColagenoComponent } from './components/colageno/colageno.component';
import { DigelasComponent } from './components/digelas/digelas.component';
import { HeadComponent } from './components/lypomax/sections/head/head.component';
import { DescubreLypomaxComponent } from './components/lypomax/sections/descubre-lypomax/descubre-lypomax.component';
import { ContactanosLypomaxComponent } from './components/lypomax/sections/contactanos-lypomax/contactanos-lypomax.component';
import { ProductosLypomaxComponent } from './components/lypomax/sections/productos-lypomax/productos-lypomax.component';
import { KitLypomaxComponent } from './components/lypomax/sections/kit-lypomax/kit-lypomax.component';


@NgModule({
  declarations: [
    DetoxComponent,
    LypomaxComponent,
    MagnesioComponent,
    ColagenoComponent,
    DigelasComponent,
    HeadComponent,
    DescubreLypomaxComponent,
    ContactanosLypomaxComponent,
    ProductosLypomaxComponent,
    KitLypomaxComponent
  ],
  imports: [
    CommonModule,
    TiendaRoutingModule,

  ]
})
export class TiendaModule { }
