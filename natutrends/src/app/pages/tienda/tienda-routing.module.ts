import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LypomaxComponent } from './components/lypomax/lypomax.component';

const routes: Routes = [
  {
    path: 'lypomax/:phoneNumber/:facebookId',
    component: LypomaxComponent // Este es el componente que manejará la ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
