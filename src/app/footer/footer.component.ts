import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  contactarParaPersonalizado() {
    const phoneNumber = '4495137162'; 
    const message = encodeURIComponent(
      `Hola, estoy interesado en un pastel.`
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank'); // Abre en una nueva pestaña
  }
}
