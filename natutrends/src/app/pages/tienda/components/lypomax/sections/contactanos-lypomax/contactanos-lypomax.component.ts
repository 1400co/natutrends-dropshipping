import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PixelService } from 'ngx-multi-pixel';

@Component({
  selector: 'app-contactanos-lypomax',
  templateUrl: './contactanos-lypomax.component.html',
  styleUrl: './contactanos-lypomax.component.scss'
})
export class ContactanosLypomaxComponent implements OnInit {
  @Input() phoneNumber:string = '';
  fbId:string = '';

  constructor(private pixel: PixelService,
    private activatedRoute: ActivatedRoute,)
  {

  }

  ngOnInit():void{
    this.phoneNumber =  this.activatedRoute.snapshot.params['phoneNumber']; //get from route snapshot
    this.fbId =  this.activatedRoute.snapshot.params['facebookId']; //get from route snapshot
    this.onConsent();
  }

  onConsent(): void {
    this.pixel.initialize(['1676952112730164']);
  }

  onContact() {
    this.pixel.track("Contact", {});
    if (this.phoneNumber) {
      const whatsappURL = `https://wa.me/${this.phoneNumber}`;
      window.open(whatsappURL, '_blank');
    } else {
      console.error('Número de teléfono no proporcionado');
    }
  }
}
