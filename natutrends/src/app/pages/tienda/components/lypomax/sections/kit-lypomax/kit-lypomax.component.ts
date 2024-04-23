import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kit-lypomax',
  templateUrl: './kit-lypomax.component.html',
  styleUrl: './kit-lypomax.component.scss'
})
export class KitLypomaxComponent {
  @Input() phoneNumber:string = '';
}
