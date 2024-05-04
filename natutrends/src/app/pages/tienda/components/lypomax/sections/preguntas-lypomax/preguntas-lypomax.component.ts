import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PixelService } from 'ngx-multi-pixel';


@Component({
  selector: 'app-preguntas-lypomax',
  templateUrl: './preguntas-lypomax.component.html',
  styleUrl: './preguntas-lypomax.component.scss'
})
export class PreguntasLypomaxComponent {

  showModal = false;

  pedidoForm: FormGroup = new FormGroup({});
  @Input() phoneNumber: string = '';
  fbId: string = '';

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private pixel: PixelService,
    private cookieService: CookieService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      numeroCelular: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      productos: ['', Validators.required]
    });

    this.phoneNumber = this.activatedRoute.snapshot.params['phoneNumber']; //get from route snapshot
    this.fbId = this.activatedRoute.snapshot.params['facebookId']; //get from route snapshot
    this.onConsent();
    this.loadFormDataFromCookie();
  }

  loadFormDataFromCookie(): void {
    const formDataFromCookie = JSON.parse(this.cookieService.get('pedidoNatutrendsFormData'));
    if (formDataFromCookie) {
      this.pedidoForm.patchValue(formDataFromCookie);
    }
  }

  onConsent(): void {
    this.pixel.initialize(['1676952112730164', this.fbId]);
  }

  submitPedido() {
    if (this.pedidoForm.valid) {
      const formData = this.pedidoForm.value;

      this.cookieService.set('pedidoNatutrendsFormData', JSON.stringify(formData));

      // Build the message to send through the new API
      const mensaje = {
        number: this.phoneNumber, // Destination number
        message: `Hola! Te contactamos para realizar un pedido:\n\n` +
          `**Nombre Completo:** ${formData.nombreCompleto}\n` +
          `**Número de Celular:** ${formData.numeroCelular}\n` +
          `**Departamento:** ${formData.departamento}\n` +
          `**Ciudad:** ${formData.ciudad}\n` +
          `**Direccion:** ${formData.direccion}\n` +
          `**Productos:** ${formData.productos}`,
        urlMedia: null // Assuming there is no media to send by default
      };

      // Send the POST request to the new API endpoint
      this.http.post('https://whatsapp.nuestrapeople.com/v1/messages', mensaje, { responseType: 'text' }).subscribe(
        response => {
          console.log('Server response:', response);
          this.onCheckout();
          this.showModal = true; // Open modal on successful submission
        },
        error => {
          console.error('Error sending the request:', error);
          alert('Ha ocurrido un error, inténtelo más tarde.');
        }
      );
    } else {
      this.pedidoForm.markAllAsTouched();
    }
  }


  submitPedido2() {
    if (this.pedidoForm.valid) {
      const formData = this.pedidoForm.value;
      // ...resto de tu código...

      // Encode your message to make it URL-safe
      const mensajeWhatsapp = encodeURIComponent(`Hola! Te contactamos para realizar un pedido:\n\n` +
        `Nombre Completo: ${formData.nombreCompleto}\n` +
        `Número de Celular: ${formData.numeroCelular}\n` +
        `Departamento: ${formData.departamento}\n` +
        `Ciudad: ${formData.ciudad}\n` +
        `Dirección: ${formData.direccion}\n` +
        `Productos: ${formData.productos}`);

      // Build the WhatsApp URL
      const whatsappURL = `https://wa.me/${this.phoneNumber}?text=${mensajeWhatsapp}`;

      this.onCheckout();
      // Redirect to the WhatsApp URL
      window.open(whatsappURL, '_blank');
    } else {
      this.pedidoForm.markAllAsTouched();
    }
  }



  onCheckout() {
    this.pixel.track("Purchase", {
      content_ids: ["Lypomax", "L-01"], // Item SKUs
      value: 69000, // Value of all items
      currency: "COP", // Currency of the value
    });
  }





}
