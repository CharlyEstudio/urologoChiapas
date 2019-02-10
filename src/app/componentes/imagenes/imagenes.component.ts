import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styles: []
})
export class ImagenesComponent implements OnInit {

  @Input() imagenes: any[] = [];
  @Input() tipo: any;

  foto: any;

  constructor() { }

  ngOnInit() {
  }

  modalFoto(imagen: any) {
    this.foto = imagen.src;
  }

}
