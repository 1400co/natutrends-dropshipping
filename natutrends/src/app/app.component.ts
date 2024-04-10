import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  PixelService } from 'ngx-multi-pixel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'digital-experts-web';

  constructor(private pixel: PixelService) {

  }

  ngOnInit(): void {
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
      content_ids: ["ABC123", "XYZ456"], // Item SKUs
      value: 100, // Value of all items
      currency: "USD", // Currency of the value
    });
  }

  onContact()
  {
    this.pixel.track("Contact", {});
    window.open('https://wa.me/573213903769', '_blank');
  }



}
