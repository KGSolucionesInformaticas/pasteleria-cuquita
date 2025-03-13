import { Component } from '@angular/core';
import { PastelesService } from '../services/pasteles.service'; // Importar el servicio
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    /*terminoBusqueda: string = '';

    constructor(
      private pastelesService: PastelesService,
      private router: Router // Inyectar Router
    ) {}
  
    // Método para buscar pasteles
    buscarPasteles() {
      this.pastelesService.actualizarTerminoBusqueda(this.terminoBusqueda);
      this.router.navigate(['/inicio']); // Redirigir al componente de inicio
    }*/
   terminoBusqueda: string = '';
  historialBusquedas: string[] = []; // Array para almacenar el historial

  constructor(
    private pastelesService: PastelesService,
    private router: Router // Inyectar Router
  ) {}

  ngOnInit() {
    // Suscribirse al historial de búsquedas
    this.pastelesService.historialBusquedas$.subscribe(historial => {
      this.historialBusquedas = historial;
    });
  }

  // Método para buscar pasteles
  buscarPasteles() {
    this.pastelesService.actualizarTerminoBusqueda(this.terminoBusqueda);
    this.router.navigate(['/inicio']); // Redirigir al componente de inicio
  }
}