import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastelesService } from '../services/pasteles.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { FormsModule } from '@angular/forms';

// Declara bootstrap como una variable global
declare const bootstrap: any;

@Component({
  selector: 'app-categoria-pasteles',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './categoria-pasteles.component.html',
  styleUrl: './categoria-pasteles.component.css'
})
export class CategoriaPastelesComponent implements OnInit {
  categoria: string = '';
  pasteles: any[] = [];
  pastelesFiltrados: any[] = []; // Lista de pasteles filtrados
  terminoBusqueda: string = ''; // Término de búsqueda

  constructor(
    private route: ActivatedRoute,
    private pastelesService: PastelesService
  ) {}

  ngOnInit() {

    window.scrollTo(0, 0);

    this.route.params.subscribe((params: { [key: string]: string }) => {
      this.categoria = params['nombre'];
      this.pasteles = this.pastelesService.getPasteles().filter(pastel =>
        pastel.categoria === this.categoria
      );
      this.pastelesFiltrados = this.pasteles; // Inicializa los pasteles filtrados
    });
  
    // Suscribirse al término de búsqueda
    this.pastelesService.terminoBusqueda$.subscribe((termino: string) => {
      this.terminoBusqueda = termino;
      this.filtrarPasteles(); // Filtrar los pasteles cuando cambia el término de búsqueda
    });

    // Abrir el modal automáticamente al cargar la página
    const modalElement = document.getElementById('alertaModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  // Método para filtrar los pasteles según el término de búsqueda
  filtrarPasteles() {
    if (this.terminoBusqueda) {
      this.pastelesFiltrados = this.pasteles.filter((pastel: any) =>
        pastel.nombre.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
      );
    } else {
      this.pastelesFiltrados = this.pasteles; // Mostrar todos los pasteles si no hay término de búsqueda
    }
  }

  // En el componente InicioComponent
  contactarParaPersonalizado() {
    const numero = '4494189869';  // Reemplaza con tu número de WhatsApp
    const mensaje = encodeURIComponent('Hola, quiero saber el precio del pastel personalizado.');
    const url = `https://wa.me/${numero}?text=${mensaje}`;
    window.open(url, '_blank');
  }
}