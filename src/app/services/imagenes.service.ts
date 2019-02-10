import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(
    private http: HttpClient
  ) { }

  imagenesSubidos() {
    const url = 'http://api.urologochiapas.com/imagenes.php?opcion=1';
    return this.http.get(url);
  }

  videoVisto(visto: any) {
    localStorage.setItem('visto', visto);
  }
}
