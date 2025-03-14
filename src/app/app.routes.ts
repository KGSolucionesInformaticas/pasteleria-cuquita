/*import { Routes } from '@angular/router';*/
import { InicioComponent } from './inicio/inicio.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { PreguntasfrecuentesComponent } from './preguntasfrecuentes/preguntasfrecuentes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaPastelesComponent } from './categoria-pasteles/categoria-pasteles.component';


export const routes: Routes = [
    // Rutas de la aplicación (componentes)
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },  // Ruta predeterminada
    { path: 'inicio', component: InicioComponent },         // Ruta del componente de inicio
    { path: 'ubicacion', component: UbicacionComponent },
    { path: 'preguntasfrecuentes', component: PreguntasfrecuentesComponent}, 
    { path: 'categoria/:nombre', component: CategoriaPastelesComponent }, // Nueva ruta dinámica para categorías
    { path: '**', redirectTo: 'inicio' }                    // Ruta para páginas no encontradas
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Sin el modo Hash
    exports: [RouterModule]
})
export class AppRoutingModule { }