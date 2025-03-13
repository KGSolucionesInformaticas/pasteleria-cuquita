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
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  terminoBusqueda: string = '';

  constructor(
    private pastelesService: PastelesService,
    private router: Router // Inyectar Router
  ) {}

  // Método para buscar pasteles
  buscarPasteles() {
    this.pastelesService.actualizarTerminoBusqueda(this.terminoBusqueda);
    this.router.navigate(['/inicio']); // Redirigir al componente de inicio
  }
}