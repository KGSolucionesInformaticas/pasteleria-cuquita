import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';



export const routes: Routes = [
    // Rutas de la aplicación (componentes)
    { path: '', redirectTo: '/pateleria-cuquita/inicio', pathMatch: 'full' },  // Ruta predeterminada
    { path: '/pateleria-cuquita/inicio', component: InicioComponent },         // Ruta del componente de inicio
    { path: '/pateleria-cuquita/ubicacion', component: UbicacionComponent },
    { path: '/pateleria-cuquita/preguntasfrecuentes', component: PreguntasfrecuentesComponent}, 
    { path: '**', redirectTo: '/pateleria-cuquita/inicio' }                    // Ruta para páginas no encontradas
];
