import { Component } from '@angular/core';
import { PastelesService } from '../services/pasteles.service'; // Importar el servicio
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { NavigationEnd, Router } from '@angular/router'; // Importar Router
import { RouterModule } from '@angular/router';  // ✅ Importa RouterModule
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  terminoBusqueda: string = '';
  historialBusquedas: string[] = []; // Array para almacenar el historial
  private routerSubscription: Subscription | null = null;

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

    // Verificar la ruta actual
    const rutaActual = this.router.url;

    // Redirigir solo si no está en el componente de categoría
    if (!rutaActual.startsWith('/categoria')) {
      this.router.navigate(['/inicio']); // Redirigir al componente de inicio
    }
  }
}