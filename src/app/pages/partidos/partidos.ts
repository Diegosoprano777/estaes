import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partidos.html',
  styleUrls: ['./partidos.css']
})
export class PartidosComponent {

  partidos = [
    {
      local: 'Real Madrid',
      visitante: 'Barcelona',
      hora: '3:00 PM',
      estadio: 'Santiago Bernabéu',
      logoLocal: 'img/madrid.png',
      logoVisitante: 'img/barca.png'
    },
    {
      local: 'Manchester City',
      visitante: 'Liverpool',
      hora: '1:30 PM',
      estadio: 'Etihad Stadium',
      logoLocal: 'img/city.png',
      logoVisitante: 'img/liverpool.png'
    },
    {
      local: 'Bayern Munich',
      visitante: 'Dortmund',
      hora: '12:30 PM',
      estadio: 'Allianz Arena',
      logoLocal: 'img/bayern.png',
      logoVisitante: 'img/dortmund.png'
    },
    {
      local: 'Juventus',
      visitante: 'Inter',
      hora: '2:45 PM',
      estadio: 'Allianz Stadium',
      logoLocal: 'img/juve.png',
      logoVisitante: 'img/inter.png'
    }
  ];

}
