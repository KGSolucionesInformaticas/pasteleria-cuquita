import { Component } from '@angular/core';
import { PastelesService } from '../services/pasteles.service'; // Importar el servicio
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  terminoBusqueda: string = '';

  constructor(private pastelesService: PastelesService) {}

  // Método para buscar pasteles
  buscarPasteles() {
    this.pastelesService.actualizarTerminoBusqueda(this.terminoBusqueda);
  }
}