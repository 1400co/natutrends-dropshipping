import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PixelService } from 'ngx-multi-pixel';

@Component({
  selector: 'app-preguntas-lypomax',
  templateUrl: './preguntas-lypomax.component.html',
  styleUrl: './preguntas-lypomax.component.scss'
})
export class PreguntasLypomaxComponent {

  pedidoForm: FormGroup = new FormGroup({});
  @Input() phoneNumber:string = '';
  fbId:string = '';

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private pixel: PixelService,
    private http: HttpClient)
    { }

  ngOnInit(): void {
    this.pedidoForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      numeroCelular: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      barrio: ['', Validators.required],
      productos: ['', Validators.required]
    });

    this.phoneNumber =  this.activatedRoute.snapshot.params['phoneNumber']; //get from route snapshot
    this.fbId =  this.activatedRoute.snapshot.params['facebookId']; //get from route snapshot
    this.onConsent();
  }

  onConsent(): void {
    this.pixel.initialize(['1676952112730164',this.fbId ]);
  }

  submitPedido() {
    if (this.pedidoForm.valid) {
      const formData = this.pedidoForm.value;

      // Construir el mensaje legible para enviar al API de WhatsApp
      const mensajeWhatsapp = `Hola! Te contactamos para realizar un pedido:\n\n` +
        `**Nombre Completo:** ${formData.nombreCompleto}\n` +
        `**Número de Celular:** ${formData.numeroCelular}\n` +
        `**Departamento:** ${formData.departamento}\n` +
        `**Ciudad:** ${formData.ciudad}\n` +
        `**Barrio:** ${formData.barrio}\n` +
        `**Productos:** ${formData.productos}`;

      // Realizar la solicitud POST al API de WhatsApp
      this.http.post('https://whatsapp.nuestrapeople.com/v1/messages', {
        number: this.phoneNumber, // Número de destino
        message: mensajeWhatsapp // Mensaje a enviar
      }).subscribe(
        response => {
          // Manejar la respuesta del servidor si es necesario
          this.onCheckout();
          console.log('Respuesta del servidor:', response);
        },
        error => {
          // Manejar errores si la solicitud falla
          console.error('Error al enviar la solicitud:', error);
        }
      );
    } else {
      this.pedidoForm.markAllAsTouched();
    }
  }


  onCheckout()
  {
    this.pixel.track("Purchase", {
      content_ids: ["Lypomax", "L-01"], // Item SKUs
      value: 69000, // Value of all items
      currency: "COP", // Currency of the value
    });
  }


}
