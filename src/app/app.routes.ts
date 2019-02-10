import { RouterModule, Routes } from '@angular/router';

// Páginas
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ServiciosComponent } from './paginas/servicios/servicios.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { GaleriaComponent } from './contenedores/galeria/galeria.component';

// Páginas

const appRoutes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'galeria', component: GaleriaComponent},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
