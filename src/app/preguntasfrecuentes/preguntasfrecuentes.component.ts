import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntasfrecuentes',
  standalone: true,
  imports: [],
  templateUrl: './preguntasfrecuentes.component.html',
  styleUrl: './preguntasfrecuentes.component.css'
})
export class PreguntasfrecuentesComponent implements OnInit{
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
}
