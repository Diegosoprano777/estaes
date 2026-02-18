import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.html',
  styleUrls: ['./noticias.css']
})
export class NoticiasComponent {

  noticias = [
    {
      titulo: 'Barcelona gana el clásico',
      imagen: 'assets/img/barca.jpg',
      descripcion: 'Un partidazo lleno de goles y emociones.'
    },
    {
      titulo: 'Nueva Champions League',
      imagen: 'assets/img/champions.jpg',
      descripcion: 'Cambian el formato para la próxima temporada.'
    },
    {
      titulo: 'Mbappé protagonista',
      imagen: 'assets/img/real.jpg',
      descripcion: 'El francés vuelve a ser noticia mundial.'
    },
    {
      titulo: 'Fichajes del verano',
      imagen: 'assets/img/estadio.jpg',
      descripcion: 'Movimientos importantes en Europa.'
    },
    {
      titulo: 'Liga Colombiana',
      imagen: 'assets/img/liga.jpg',
      descripcion: 'Se aprieta la tabla de posiciones.'
    },
    {
      titulo: 'Balón de Oro',
      imagen: 'assets/img/mundial.jpg',
      descripcion: 'Ya hay favoritos para ganarlo.'
    }
  ];

}
