import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PastelesService } from '../services/pasteles.service'; // Importar el servicio
import { Router } from '@angular/router'; // Importar Router para la navegación

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
  categoriasSeleccionadas: string[] = ['Todas']; // Array para múltiples selecciones
  precioMaximo: number = 2600; // Precio máximo inicial
  terminoBusqueda: string = '';

  constructor(
    private pastelesService: PastelesService,
    private router: Router // Inyectar Router
  ) {}

  ngOnInit() {
    // Obtener pasteles para el inicio
    this.pasteles = this.pastelesService.getPastelesParaInicio();
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
      const cumpleCategoria =
        this.categoriasSeleccionadas.includes('Todas') || // Si "Todas" está seleccionada
        this.categoriasSeleccionadas.includes(pastel.categoria); // O si la categoría del pastel está seleccionada
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

  // Método para manejar el cambio en los checkboxes de categoría
  onCategoriaChange(event: Event, categoria: string) {
    const checkbox = event.target as HTMLInputElement;

    if (checkbox.checked) {
      // Si se selecciona "Todas", desmarcar las demás opciones
      if (categoria === 'Todas') {
        this.categoriasSeleccionadas = ['Todas'];
      } else {
        // Si se selecciona otra opción, quitar "Todas" del array
        this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(cat => cat !== 'Todas');
        this.categoriasSeleccionadas.push(categoria);
      }
    } else {
      // Si se deselecciona una opción, quitarla del array
      this.categoriasSeleccionadas = this.categoriasSeleccionadas.filter(cat => cat !== categoria);

      // Si no hay ninguna categoría seleccionada, seleccionar "Todas" por defecto
      if (this.categoriasSeleccionadas.length === 0) {
        this.categoriasSeleccionadas = ['Todas'];
      }
    }

    // Aplicar los filtros después de cambiar las categorías
    this.aplicarFiltros();
  }
  verMas(categoria: string) {
    this.router.navigate(['/categoria', categoria]); // Redirige al componente de categoría
  }
}