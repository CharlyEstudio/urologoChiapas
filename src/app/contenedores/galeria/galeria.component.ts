import { Component, OnInit } from '@angular/core';

// Servicios
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: []
})
export class GaleriaComponent implements OnInit {

  imagenes: any[] = [];
  tipo = 'galeria';

  constructor(
    private _galeria: ImagenesService
  ) {
    this._galeria.imagenesSubidos().subscribe((img: any) => {
      if (img.length > 0) {
        this.imagenes = img;
      }
    });
  }

  ngOnInit() {
  }

}
