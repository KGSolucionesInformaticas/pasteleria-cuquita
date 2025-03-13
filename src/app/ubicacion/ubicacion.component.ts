import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent implements OnInit {
  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    const map = L.map('map').setView([21.857071, -102.281159], 15); // Coordenadas de Aguascalientes

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Configurar el icono del marcador
    const iconDefault = L.icon({
      iconUrl: 'assets/marker-icon.png', // Ruta al icono
      shadowUrl: 'assets/marker-shadow.png', // Ruta a la sombra
      iconSize: [25, 41], // Tamaño del icono
      iconAnchor: [12, 41], // Punto de anclaje del icono
      popupAnchor: [1, -34], // Punto de anclaje del popup
      shadowSize: [41, 41] // Tamaño de la sombra
    });

    // Marcador de la pastelería
    const marker = L.marker([21.857071, -102.281159], { icon: iconDefault }).addTo(map);
    marker.bindPopup('<b>Pastelería Cuquita</b><br>¡El mejor sabor en Aguascalientes!').openPopup();
  }
}
