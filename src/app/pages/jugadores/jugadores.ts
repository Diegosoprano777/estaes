import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jugadores.html',
  styleUrls: ['./jugadores.css']
})
export class JugadoresComponent {

  nombre = 'Selecciona un jugador';
  descripcion = '';
  colorClase = ''; // 👈 NUEVO

  seleccionarJugador(jugador: string) {

    if (jugador === 'ronaldinho') {
      this.nombre = 'Ronaldinho';
      this.descripcion = 'Magia pura, regates imposibles y sonrisa eterna.';
      this.colorClase = 'ronaldinho';
    }

    if (jugador === 'cr7') {
      this.nombre = 'Cristiano Ronaldo';
      this.descripcion = 'Disciplina, potencia y mentalidad ganadora.';
      this.colorClase = 'cr7';
    }

    if (jugador === 'pirlo') {
      this.nombre = 'Andrea Pirlo';
      this.descripcion = 'Elegancia y precisión desde el mediocampo.';
      this.colorClase = 'pirlo';
    }

    if (jugador === 'shaarawy') {
      this.nombre = 'Shaarawy';
      this.descripcion = 'Velocidad y técnica con estilo italiano.';
      this.colorClase = 'shaarawy';
    }
  }
}