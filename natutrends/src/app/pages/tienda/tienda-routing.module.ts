import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LypomaxComponent } from './components/lypomax/lypomax.component';
import { DietaComponent } from './components/dieta/dieta.component';


const routes: Routes = [
  {
    path: 'lypomax/:phoneNumber/:facebookId',
    component: LypomaxComponent
  },
  {
    path: 'dieta/:phoneNumber/:facebookId',
    component: DietaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }
