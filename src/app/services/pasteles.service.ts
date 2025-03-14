import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PastelesService {

  private pasteles = [
    {
      nombre: 'Pastel de 8 a 10 personas',
      categoria: 'Pastel de 8 a 10',
      descripcion: 'Delicioso pastel de 8 a 10 personas, decoración de la casa.',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor1: '1.-Chocolate.',
      sabor2: '2.-Limón.',
      sabor3: '3.-Mixto.',
      precio: 230.00,
      imagen: './assets/Pastel8a10personas.jpg'
    },
    {
      nombre: 'Pastel de 12 a 15 personas',
      categoria: 'Pastel de 12 a 15',
      descripcion: 'Delicioso pastel de 8 a 10 personas, decoración de la casa.',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor1: '1.-Chocolate.',
      sabor2: '2.-Limón.',
      sabor3: '3.-Mixto.',
      precio: 330.00,
      imagen: './assets/Pastel12a15personas1.jpg'
    },
    {
      nombre: 'Pastel de 18 a 20 personas',
      categoria: 'Pastel de 18 a 20',
      descripcion: 'Delicioso pastel de 18 a 20 personas, decoración de la casa.',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor1: '1.-Chocolate.',
      sabor2: '2.-Limón.',
      sabor3: '3.-Mixto.',
      precio: 420.00,
      imagen: './assets/Pastel18a20personas1.jpg'
    },
    {
      nombre: 'Pastel de 1/4 plancha cuadrado de 25 a 30 personas',
      categoria: 'Pastel de 25 a 30',
      descripcion: 'Delicioso pastel de 1/4 plancha cuadrado rendimiento es de 25 a 30 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor1: '1.-Chocolate.',
      sabor2: '2.-Limón.',
      sabor3: '3.-Mixto.',
      precio: 600.00,
      imagen: './assets/Pastel25a30personas.jpg'
    },
    {
      nombre: 'Pastel de 1/2 plancha cuadrado de 50 a 60 personas',
      categoria: 'Pastel de 50 a 60',
      descripcion: 'Delicioso pastel de 1/2 plancha cuadrado rendimiento es de 50 a 60 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor1: '1.-Chocolate.',
      sabor2: '2.-Limón.',
      sabor3: '3.-Mixto.',
      precio: 1250.00,
      imagen: './assets/Pastel50a60personas.jpg'
    },
    {
      nombre: 'Pastel plancha entera cuadrado de 100 a 120 personas',
      categoria: 'Pastel de 100 a 120',
      descripcion: 'Delicioso pastel plancha entera cuadrado rendimiento es de 100 a 120 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor1: '1.-Chocolate.',
      sabor2: '2.-Limón.',
      sabor3: '3.-Mixto.',
      precio: 2600.00,
      imagen: './assets/Pastel50a60personas.jpg'
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
