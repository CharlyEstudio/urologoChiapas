import { Component, OnInit } from '@angular/core';

// Servicios
import { ImagenesService } from 'src/app/services/imagenes.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styles: []
})
export class SliderComponent implements OnInit {
  video: boolean = true;
  visto: any;

  constructor(
    private _imagenes: ImagenesService
  ) {
    if (localStorage.getItem('visto') !== null) {
      console.log(localStorage.getItem('visto'));
      this.video = false;
      this.visto = localStorage.getItem('visto');
    } else {
      this.video = true;
      this.visto = 'not';
      setTimeout(() => {
        this.video = false;
        this.visto = 'ok';
        this._imagenes.videoVisto(this.visto);
      }, 32000);
    }
  }

  ngOnInit() {}

}
