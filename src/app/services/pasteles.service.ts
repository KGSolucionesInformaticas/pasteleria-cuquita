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
      nombre: 'Galletas besos de nuez de 300 grs',
      categoria: 'Galletas besos de nuez',
      descripcion: 'Deliciosas galletas besos de nuez de 300 grs',
      precio: 140.00,
      imagen: './assets/GalletasBesosdeNuez.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Polvorones de chocolate, naranja y vainilla de 300 grs',
      categoria: 'Polvorones de 300 grs',
      descripcion: 'Deliciosos polvorones de chocolate, naranja y vainilla de 300 grs',
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
      nombre: 'Galletas besos de nuez de 500 grs',
      categoria: 'Galletas besos de nuez',
      descripcion: 'Deliciosas galletas besos de nuez de 500 grs',
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
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado4.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado5.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado6.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado7.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado8.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado9.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado10.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado11.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado12.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado13.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado14.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado15.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 12 a 15 personas personalizado',
      categoria: 'Pastel de 12 a 15 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 12 a 15 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel12a15personasPersonalizado5.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 12 a 15 personas personalizado',
      categoria: 'Pastel de 12 a 15 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 12 a 15 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel12a15personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 12 a 15 personas personalizado',
      categoria: 'Pastel de 12 a 15 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 12 a 15 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel12a15personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 12 a 15 personas personalizado',
      categoria: 'Pastel de 12 a 15 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 12 a 15 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel12a15personasPersonalizado3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 12 a 15 personas personalizado',
      categoria: 'Pastel de 12 a 15 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 12 a 15 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel12a15personasPersonalizado4.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 12 a 15 personas personalizado',
      categoria: 'Pastel de 12 a 15 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 12 a 15 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel12a15personasPersonalizado6.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado4.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado5.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado6.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado7.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado5.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado4.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado7.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 50 a 60 personas personalizado',
      categoria: 'Pastel de 50 a 60 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 50 a 60 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel50a60personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 50 a 60 personas personalizado',
      categoria: 'Pastel de 50 a 60 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 50 a 60 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel50a60personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 100 personas personalizado',
      categoria: 'Pastel de 100 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir a 100 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel100personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 100 personas personalizado',
      categoria: 'Pastel de 100 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir a 100 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel100personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 150 personas personalizado',
      categoria: 'Pastel de 150 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir a 150 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel150personasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 200 personas personalizado',
      categoria: 'Pastel de 200 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir a 200 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel200personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 50 a 60 personas personalizado',
      categoria: 'Pastel de 50 a 60 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 50 a 60 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel50a60personasPersonalizado3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 50 a 60 personas personalizado',
      categoria: 'Pastel de 50 a 60 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 50 a 60 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel50a60personasPersonalizado4.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado8.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado9.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado8.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado9.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado16.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado17.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado4.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado5.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 50 a 60 personas personalizado',
      categoria: 'Pastel de 50 a 60 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 50 a 60 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel50a60personasPersonalizado5.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 40 personas personalizado',
      categoria: 'Pastel de 40 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 40 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel40personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado18.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado19.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado20.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado21.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 8 a 10 personas personalizado',
      categoria: 'Pastel de 8 a 10 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 8 a 10 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel8a10personasPersonalizado22.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado6.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado10.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado11.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado12.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 25 a 30 personas personalizado',
      categoria: 'Pastel de 25 a 30 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 25 a 30 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel25a30personasPersonalizado13.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 1/4 plancha cuadrado de 25 a 30 personas',
      categoria: 'Pastel de 25 a 30',
      descripcion: 'Delicioso pastel de 1/4 plancha cuadrado rendimiento es de 25 a 30 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 600.00,
      imagen: './assets/Pastel25a30personas3.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 1/2 plancha cuadrado de 50 a 60 personas',
      categoria: 'Pastel de 50 a 60',
      descripcion: 'Delicioso pastel de 1/2 plancha cuadrado rendimiento es de 50 a 60 personas, decoración de la casa',
      betun: 'Endulza tu día con nuestro delicioso betún disponible:',
      sabor: 'Chocolate, Limón, Mixto',
      precio: 1250.00,
      imagen: './assets/Pastel50a60personas2.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false // Indica si el pastel debe mostrarse en el inicio
    },
    {
      nombre: 'Pastel de 50 a 60 personas personalizado',
      categoria: 'Pastel de 50 a 60 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 50 a 60 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel50a60personasPersonalizado6.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 70 a 80 personas personalizado',
      categoria: 'Pastel de 70 a 80 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 70 a 80 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel70a80personasPersonalizado.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 12 a 15 personas personalizado',
      categoria: 'Pastel de 12 a 15 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 12 a 15 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel12a15personasPersonalizado7.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },
    {
      nombre: 'Pastel de 18 a 20 personas personalizado',
      categoria: 'Pastel de 18 a 20 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 18 a 20 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel18a20personasPersonalizado10.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado6.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado7.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Cupcakes personalizados de 6 piezas ',
      categoria: 'Cupcakes personalizados de 6 piezas',
      descripcion: 'Deléitate con Cupcakes personalizados de 6 piezas',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Cupcakes6piezasPersonalizado8.jpg',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: false, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true // Nueva propiedad para identificar pasteles personalizados
    },{
      nombre: 'Pastel de 200 personas personalizado',
      categoria: 'Pastel de 200 personalizado',
      descripcion: 'Deléitate con un exquisito pastel personalizado, ideal para compartir entre 200 personas.',
      personalizado: 'El precio varía de acuerdo al decorado.',
      imagen: './assets/Pastel200personasPersonalizado.png',
      cambioPrecio: 'Sujeto a cambios sin previo aviso',
      mostrarEnInicio: true, // Indica si el pastel debe mostrarse en el inicio
      esPersonalizado: true, // Nueva propiedad para identificar pasteles personalizados
    },
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
