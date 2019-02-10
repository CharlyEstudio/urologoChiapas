import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
export class ContactoComponent implements OnInit {

  parrafo = 'CONTACTO';
  footer = '';
  link = false;

  constructor() { }

  ngOnInit() {
  }

}
