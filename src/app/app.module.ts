import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ruta
import { APP_ROUTES } from './app.routes';

// Servicios
import { EnviardatosService } from './services/enviardatos.service';

// Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NavegacionComponent } from './contenedores/navegacion/navegacion.component';
import { SliderComponent } from './componentes/slider/slider.component';
import { AvisoComponent } from './componentes/aviso/aviso.component';
import { SeccionComponent } from './componentes/seccion/seccion.component';
import { BibliografiaComponent } from './componentes/bibliografia/bibliografia.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { FooterComponent } from './contenedores/footer/footer.component';
import { DireccionComponent } from './componentes/direccion/direccion.component';
import { ProcedimientosComponent } from './componentes/procedimientos/procedimientos.component';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { InformacionComponent } from './contenedores/informacion/informacion.component';
import { TelemailComponent } from './componentes/telemail/telemail.component';
import { FormapagoComponent } from './componentes/formapago/formapago.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormcontactoComponent } from './contenedores/formcontacto/formcontacto.component';
import { HorariosComponent } from './componentes/horarios/horarios.component';
import { GaleriaComponent } from './contenedores/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent,
    NavegacionComponent,
    SliderComponent,
    AvisoComponent,
    SeccionComponent,
    BibliografiaComponent,
    MapaComponent,
    FooterComponent,
    DireccionComponent,
    ProcedimientosComponent,
    ImagenesComponent,
    InformacionComponent,
    TelemailComponent,
    FormapagoComponent,
    FormularioComponent,
    FormcontactoComponent,
    HorariosComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EnviardatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
