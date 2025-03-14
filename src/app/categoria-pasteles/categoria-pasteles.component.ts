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

  constructor(
    private route: ActivatedRoute,
    private pastelesService: PastelesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoria = params['nombre']; // Obtén la categoría de la URL
      this.pasteles = this.pastelesService.getPasteles().filter(pastel =>
        pastel.categoria === this.categoria
      );
    });
  }
}