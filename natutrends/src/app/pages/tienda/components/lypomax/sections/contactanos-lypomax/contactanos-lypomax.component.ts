import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contactanos-lypomax',
  templateUrl: './contactanos-lypomax.component.html',
  styleUrl: './contactanos-lypomax.component.scss'
})
export class ContactanosLypomaxComponent {
  @Input() phoneNumber:string = '';
}
