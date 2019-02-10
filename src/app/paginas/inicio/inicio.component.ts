import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: []
})
export class InicioComponent implements OnInit {

  parrafo = 'Una revisión oportuna, puede cambiar tu vida!';
  footer = 'Haz tu cita YA!';
  link = true;

  constructor() { }

  ngOnInit() {
  }

}
