import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';


export const routes: Routes = [
    // Rutas de la aplicación (componentes)
    { path: '', redirectTo: '/pasteleria-cuquita/inicio', pathMatch: 'full' },  // Ruta predeterminada
    { path: '/pasteleria-cuquita/inicio', component: InicioComponent },         // Ruta del componente de inicio
    { path: '/pasteleria-cuquita/ubicacion', component: UbicacionComponent },
    { path: '/pasteleria-cuquita/preguntasfrecuentes', component: PreguntasfrecuentesComponent}, 
    { path: '**', redirectTo: '/pasteleria-cuquita/inicio' }                    // Ruta para páginas no encontradas
];
