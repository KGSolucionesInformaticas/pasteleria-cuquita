import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';


export const routes: Routes = [
    // Rutas de la aplicación (componentes)
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },  // Ruta predeterminada
    { path: 'inicio', component: InicioComponent },         // Ruta del componente de inicio
    { path: 'ubicacion', component: UbicacionComponent },
    { path: '**', redirectTo: 'inicio' }                    // Ruta para páginas no encontradas
];
