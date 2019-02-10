import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnviardatosService {

  constructor(
    private http: HttpClient
  ) { }

  enviarEmail(email: any, nombre: any, tel: any, mensaje: any) {
    const url = 'http://api.urologochiapas.com/email.php?email=' + email + '&nombre=' + nombre + '&telefono=' + tel + '&mensaje=' + mensaje;
    return this.http.get(url);
  }
}
