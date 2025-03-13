import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastelesService {

  private pasteles = [
    {
      nombre: 'Pastel de Chocolate',
      categoria: 'Pasteles de Chocolate',
      descripcion: 'Delicioso pastel de chocolate con cubierta de ganache.',
      precio: 230.00,
      precioOriginal: 280.00,
      promocion: 'Hasta 12 meses sin intereses',
      imagen: './assets/Pastel8a10personas.jpg'
    },
    {
      nombre: 'Pastel de Vainilla',
      categoria: 'Pasteles de Vainilla',
      descripcion: 'Pastel esponjoso de vainilla con relleno de crema.',
      precio: 200.00,
      precioOriginal: 250.00,
      promocion: 'Hasta 12 meses sin intereses',
      imagen: './assets/Pastel8a10personas.jpg'
    },
    {
      nombre: 'Pastel de Frutas',
      categoria: 'Pasteles de Frutas',
      descripcion: 'Pastel decorado con frutas frescas y crema batida.',
      precio: 280.00,
      precioOriginal: 330.00,
      promocion: 'Hasta 12 meses sin intereses',
      imagen: './assets/Pastel8a10personas.jpg'
    },
    {
      nombre: 'Pastel de Tres Leches',
      categoria: 'Pasteles Clásicos',
      descripcion: 'Pastel suave y húmedo bañado en tres leches.',
      precio: 260.00,
      precioOriginal: 310.00,
      promocion: 'Hasta 12 meses sin intereses',
      imagen: './assets/Pastel8a10personas.jpg'
    }
  ];

  // BehaviorSubject para manejar el término de búsqueda
  private terminoBusquedaSubject = new BehaviorSubject<string>('');
  terminoBusqueda$ = this.terminoBusquedaSubject.asObservable();

  // Array para almacenar el historial de búsquedas
  private historialBusquedas: string[] = [];
  historialBusquedas$ = new BehaviorSubject<string[]>(this.historialBusquedas);

  constructor() { }

  // Método para obtener todos los pasteles
  getPasteles() {
    return this.pasteles;
  }

  // Método para buscar pasteles por nombre
  buscarPasteles(termino: string) {
    return this.pasteles.filter(pastel =>
      pastel.nombre.toLowerCase().includes(termino.toLowerCase())
    );
  }

  // Método para actualizar el término de búsqueda
  actualizarTerminoBusqueda(termino: string) {
    this.terminoBusquedaSubject.next(termino);
    this.agregarAlHistorial(termino); // Agregar la búsqueda al historial
  }

  // Método para agregar una búsqueda al historial
  private agregarAlHistorial(termino: string) {
    if (termino.trim() && !this.historialBusquedas.includes(termino)) {
      this.historialBusquedas.unshift(termino); // Agregar al inicio del array
      this.historialBusquedas$.next(this.historialBusquedas); // Notificar a los suscriptores
    }
  }

  // Método para obtener el historial de búsquedas
  getHistorialBusquedas() {
    return this.historialBusquedas;
  }
}
