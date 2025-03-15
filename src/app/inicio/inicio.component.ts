import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PastelesService } from '../services/pasteles.service'; // Importar el servicio
import { Router } from '@angular/router'; // Importar Router para la navegación

// Declara bootstrap como una variable global
declare const bootstrap: any;

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
    window.scrollTo(0, 0);

    // Obtener pasteles para el inicio
    this.pasteles = this.pastelesService.getPastelesParaInicio();
    this.pastelesFiltrados = this.pasteles;
  
    // Suscribirse al término de búsqueda
    this.pastelesService.terminoBusqueda$.subscribe(termino => {
      this.terminoBusqueda = termino;
      this.aplicarFiltros();
    });

    // Abrir el modal automáticamente al cargar la página
    const modalElement = document.getElementById('alertaModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // En el componente InicioComponent
  mostrarSoloPersonalizados: boolean = false;

  aplicarFiltros() {
    this.pastelesFiltrados = this.pasteles.filter(pastel => {
      const cumpleCategoria =
        this.categoriasSeleccionadas.includes('Todas') ||
        this.categoriasSeleccionadas.includes(pastel.categoria);
      const cumplePrecio = pastel.esPersonalizado || pastel.precio <= this.precioMaximo;
      const cumpleBusqueda = pastel.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase());
      const cumplePersonalizado = !this.mostrarSoloPersonalizados || pastel.esPersonalizado;
      return cumpleCategoria && cumplePrecio && cumpleBusqueda && cumplePersonalizado;
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
  
  contactarParaPersonalizado(pastel: any) {
    const phoneNumber = '4494189869'; // Reemplaza con tu número de WhatsApp
    const message = encodeURIComponent(
      `Hola, estoy interesado en el pastel: ${pastel.nombre}.\n` +
      `Descripción: ${pastel.descripcion}.\n` +
      `Pueden ver la imagen aquí: ${pastel.imagen}\n` +
      `Por favor, envíenme más información.`
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Abre en una nueva pestaña
  }
  
}