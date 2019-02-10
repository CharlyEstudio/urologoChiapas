import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

// Servicios
import { EnviardatosService } from 'src/app/services/enviardatos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  nombre: any;
  tel: any;
  email: any;
  mensaje: any = '';

  error: boolean = false;
  enviando: boolean = false;
  correcto: boolean = false;

  constructor(
    private _email: EnviardatosService
  ) { }

  ngOnInit() {
  }

  enviar(forma: NgForm) {
    this.error = false;
    this.enviando = true;
    this.correcto = false;

    this._email.enviarEmail(forma.value.email, forma.value.nombre, forma.value.tel, forma.value.mensaje).subscribe((enviado: any) => {
      if (enviado[0].status) {
        this.error = false;
        this.enviando = false;
        this.correcto = true;
        setTimeout(() => {
          this.correcto = false;
        }, 4000);
      } else {
        this.error = true;
        this.enviando = false;
        this.correcto = false;
        setTimeout(() => {
          this.error = false;
        }, 4000);
      }
    });
  }

}
