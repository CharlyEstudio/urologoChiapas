import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styles: []
})
export class SeccionComponent implements OnInit {

  @Input() parrafo: string = '';
  @Input() footer: string = '';
  @Input() link: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
