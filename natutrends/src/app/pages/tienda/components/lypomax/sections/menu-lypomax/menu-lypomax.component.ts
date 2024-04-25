import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-lypomax',
  templateUrl: './menu-lypomax.component.html',
  styleUrl: './menu-lypomax.component.scss'
})
export class MenuLypomaxComponent {

  dias = [
    {
      nombre: 'Lunes',
      recetas: [
        {
          foto: 'path/to/desayuno.jpg',
          titulo: 'Desayuno Lunes',
          descripcion: 'Ingredientes del desayuno...'
        },
        {
          foto: 'path/to/almuerzo.jpg',
          titulo: 'Almuerzo Lunes',
          descripcion: 'Ingredientes del almuerzo...'
        },
        {
          foto: 'path/to/cena.jpg',
          titulo: 'Cena Lunes',
          descripcion: 'Ingredientes de la cena...'
        }
      ]
    },
    // Repite para cada día de la semana
  ];
  
}
