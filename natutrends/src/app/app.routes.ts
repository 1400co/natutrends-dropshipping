import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'tienda',
    loadChildren: () => import('./pages/tienda/tienda.module').then((m) => m.TiendaModule),
  },
];
