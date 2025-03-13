import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PastelesService } from '../services/pasteles.service'; // Importar el servicio

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  pasteles: any[] = [];
  pastelesFiltrados: any[] = [];

  // Propiedades para los filtros
  categoriaSeleccionada: string = 'Todas';
  precioMaximo: number = 500;
  terminoBusqueda: string = '';

  constructor(private pastelesService: PastelesService) {}

  ngOnInit() {
    this.pasteles = this.pastelesService.getPasteles();
    this.pastelesFiltrados = this.pasteles;

    // Suscribirse al término de búsqueda
    this.pastelesService.terminoBusqueda$.subscribe(termino => {
      this.terminoBusqueda = termino;
      this.aplicarFiltros();
    });
  }

  // Método para aplicar los filtros
  aplicarFiltros() {
    this.pastelesFiltrados = this.pasteles.filter(pastel => {
      const cumpleCategoria = this.categoriaSeleccionada === 'Todas' || pastel.categoria === this.categoriaSeleccionada;
      const cumplePrecio = pastel.precio <= this.precioMaximo;
      const cumpleBusqueda = pastel.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase());
      return cumpleCategoria && cumplePrecio && cumpleBusqueda;
    });
  }

  // Método para manejar el cambio en el rango de precio
  onPrecioChange(event: Event) {
    this.precioMaximo = +(event.target as HTMLInputElement).value;
    this.aplicarFiltros();
  }
}