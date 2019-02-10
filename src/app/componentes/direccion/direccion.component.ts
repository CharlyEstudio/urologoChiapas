import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styles: []
})
export class DireccionComponent implements OnInit {

  @Input() mostrar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
