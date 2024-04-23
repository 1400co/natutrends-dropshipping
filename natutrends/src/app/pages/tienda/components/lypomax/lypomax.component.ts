import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PixelService } from 'ngx-multi-pixel';

@Component({
  selector: 'app-lypomax',
  templateUrl: './lypomax.component.html',
  styleUrl: './lypomax.component.scss'
})
export class LypomaxComponent implements OnInit {


  phoneNumber:string = '';
  fbId:string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private pixel: PixelService
    )
  {

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
    this.pixel.track("InitiateCheckout", {
      content_ids: ["ABC123", "XYZ456"], // Item SKUs
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
