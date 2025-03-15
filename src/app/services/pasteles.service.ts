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
      sabor: 'Chocolate, Limón, Mixto',
      precio: 230.00,
      imagen: './assets/Pastel8a10personas.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 12 a 15 personas',
      categoria: 'Pastel de 12 a 15',
      descripcion: 'Delicioso pastel de 8 a 10 personas, decoración de la casa.',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 330.00,
      imagen: './assets/Pastel12a15personas1.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 18 a 20 personas',
      categoria: 'Pastel de 18 a 20',
      descripcion: 'Delicioso pastel de 18 a 20 personas, decoración de la casa.',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 420.00,
      imagen: './assets/Pastel18a20personas1.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 1/4 plancha cuadrado de 25 a 30 personas',
      categoria: 'Pastel de 25 a 30',
      descripcion: 'Delicioso pastel de 1/4 plancha cuadrado rendimiento es de 25 a 30 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 600.00,
      imagen: './assets/Pastel25a30personas.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 1/2 plancha cuadrado de 50 a 60 personas',
      categoria: 'Pastel de 50 a 60',
      descripcion: 'Delicioso pastel de 1/2 plancha cuadrado rendimiento es de 50 a 60 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 1250.00,
      imagen: './assets/Pastel50a60personas.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel plancha entera cuadrado de 100 a 120 personas',
      categoria: 'Pastel de 100 a 120',
      descripcion: 'Delicioso pastel plancha entera cuadrado rendimiento es de 100 a 120 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 2600.00,
      imagen: './assets/Pastel50a60personas.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Galletas de mantequilla con m&m, chispas, nuez y naturales de 300 grs',
      categoria: 'Galletas de mantequilla 300 grs',
      descripcion: 'Deliciosas galletas de mantequilla con m&m, chispas, nuez y naturales de 300 grs',
      precio: 115.00,
      imagen: './assets/Galletas115con300grs.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Galletas de mantequilla con m&m, chispas, nuez, y naturales de 500 grs',
      categoria: 'Galletas de mantequilla 500 grs',
      descripcion: 'Deliciosas galletas de mantequilla con m&m, chispas, nuez y naturales de 500 grs',
      precio: 190.00,
      imagen: './assets/Galletas190con500grs.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Panque de mantequilla con nuez de 530 grs',
      categoria: 'Panque de mantequilla con nuez de 530 grs',
      descripcion: 'Delicioso panque de mantequilla con nuez de 530 grs',
      precio: 150.00,
      imagen: './assets/PanqueMantequilla530grs.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Panque de mantequilla con nuez de 530 grs cubierto de betún de limon o chocolate',
      categoria: 'Panque de mantequilla con nuez de 530 grs',
      descripcion: 'Delicioso panque de mantequilla con nuez de 530 grs cubierto de betún de limon o chocolate',
      precio: 180.00,
      imagen: './assets/PanqueMantequilla530grsCubierto.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Galletas besos de nuez de 300grs',
      categoria: 'Galletas besos de nuez',
      descripcion: 'Deliciosas galletas besos de nuez de 300grs',
      precio: 140.00,
      imagen: './assets/GalletasBesosdeNuez.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Polvorones de chocolate, naranja y vainilla de 300grs',
      categoria: 'Polvorones de 300grs',
      descripcion: 'Deliciosos polvorones de chocolate, naranja y vainilla de 300grs',
      precio: 50.00,
      imagen: './assets/Polvoronesde300grs.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Cupcakes 6 piezas',
      categoria: 'Cupcakes 6 piezas',
      descripcion: 'Deliciosos cupcakes 6 piezas',
      precio: 100.00,
      imagen: './assets/Cupcakes.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Galletas besos de nuez de 500grs',
      categoria: 'Galletas besos de nuez',
      descripcion: 'Deliciosas galletas besos de nuez de 500grs',
      precio: 220.00,
      imagen: './assets/GalletasBesosdeNuez.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 8 a 10 personas',
      categoria: 'Pastel de 8 a 10',
      descripcion: 'Delicioso pastel de 8 a 10 personas, decoración de la casa.',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 230.00,
      imagen: './assets/Pastel8a10personas2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 8 a 10 personas',
      categoria: 'Pastel de 8 a 10',
      descripcion: 'Delicioso pastel de 8 a 10 personas, decoración de la casa.',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 230.00,
      imagen: './assets/Pastel8a10personas3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 1/4 plancha cuadrado de 25 a 30 personas',
      categoria: 'Pastel de 25 a 30',
      descripcion: 'Delicioso pastel de 1/4 plancha cuadrado rendimiento es de 25 a 30 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 600.00,
      imagen: './assets/Pastel25a30personas2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado4.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado5.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado6.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado7.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado8.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado9.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado10.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado11.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado12.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado13.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado14.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 y 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado15.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
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

  // Método para obtener pasteles que se muestran en el inicio
  getPastelesParaInicio() {
    return this.pasteles.filter(pastel => pastel.mostrarEnInicio);
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
