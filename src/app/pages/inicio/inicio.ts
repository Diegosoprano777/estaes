import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent {

  indiceActual = 0;

  imagenes: string[] = [
    'assets/img/1.jpg',
    'assets/img/2.jpg',
    'assets/img/3.jpg'
  ];

  siguiente() {
    this.indiceActual++;
    if (this.indiceActual >= this.imagenes.length) {
      this.indiceActual = 0;
    }
  }

  anterior() {
    this.indiceActual--;
    if (this.indiceActual < 0) {
      this.indiceActual = this.imagenes.length - 1;
    }
  }
}

