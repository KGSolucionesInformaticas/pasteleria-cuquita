import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PastelesService } from '../services/pasteles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-pasteles',
  standalone: true,
  imports: [CommonModule],
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
}