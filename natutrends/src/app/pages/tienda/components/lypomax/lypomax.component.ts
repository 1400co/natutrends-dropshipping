import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PixelService } from 'ngx-multi-pixel';
import { Title, Meta  } from '@angular/platform-browser';


@Component({
  selector: 'app-lypomax',
  templateUrl: './lypomax.component.html',
  styleUrl: './lypomax.component.scss'
})
export class LypomaxComponent implements OnInit {


  phoneNumber:string = '';
  fbId:string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private pixel: PixelService,
    private metaService: Meta,
    private titleService: Title
    )
      {
        this.titleService.setTitle('Lypomax - Natutrends');
        this.metaService.updateTag({ name: 'description', content: 'Este batido sustituto de cena combina la robusta bondad de los corazones de alcachofa 🍃 con el poder antiinflamatorio de la cúrcuma 🌼 y las propiedades desintoxicantes del rábano 🍽️. Ideal para la pérdida de peso, apoya la salud hepática y la digestión gracias a los corazones de alcachofa, mientras que la cúrcuma aporta antioxidantes que pueden reducir la inflamación y mejorar la salud articular. Los rábanos ayudan a purificar la sangre y eliminar toxinas, haciendo de este batido un final nutritivo para tu día, prometiendo bienestar y manejo del peso.' });
      }

  ngOnInit():void{
    this.phoneNumber =  this.activatedRoute.snapshot.params['phoneNumber']; //get from route snapshot
    this.fbId =  this.activatedRoute.snapshot.params['facebookId']; //get from route snapshot
    this.onConsent();
  }

  onConsent(): void {
    this.pixel.initialize(['1676952112730164']);
    this.onPageView();
  }

  onCheckout()
  {
    this.pixel.track("Purchase", {
      content_ids: ["Lypomax-01", "Lypomax-01"], // Item SKUs
      content_name: "Lypomax",
      value: 100, // Value of all items
      currency: "USD", // Currency of the value
    });
  }

  onPageView()
  {
    this.pixel.track("ViewContent", {
      content_ids: ["Dropshipping"], // Item SKUs
      value: 100, // Value of all items
      currency: "COP", // Currency of the value
    });
  }

  onContact()
  {
    this.pixel.track("Contact", {});
    window.open('https://wa.me/573213903769', '_blank');
  }

}
