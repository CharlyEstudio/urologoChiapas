import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styles: []
})
export class ServiciosComponent implements OnInit {

  parrafo = 'ESTUDIOS Y PROCEDIMIENTOS EN UROLOGIA';
  footer = '';
  link = false;

  imagenes: any[] = [];
  tipo = 'servicios';

  constructor() {
    this.imagenes = [
      {id: 1, src: 'assets/servicios/foto1.jpg'},
      {id: 2, src: 'assets/servicios/foto2.jpg'},
      {id: 3, src: 'assets/servicios/foto3.jpg'},
      {id: 4, src: 'assets/servicios/foto4.jpg'},
      {id: 5, src: 'assets/servicios/foto5.jpg'},
      {id: 6, src: 'assets/servicios/foto6.jpg'}
    ];
  }

  ngOnInit() {
  }

}
