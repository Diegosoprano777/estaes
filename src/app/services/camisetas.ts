import { Injectable } from '@angular/core';

export interface Camiseta {
  jugador: string;
  equipo: string;
  img: string;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class CamisetasService {

  private camisetas: Camiseta[] = [
    {
      jugador: "Ivan cordoba",
      equipo: "El fenómeno que hizo del gol una obra de arte.",
      img: "assets/img/inter.jpg",
      descripcion: "El fenómeno que hizo del gol una obra de arte."
    },
    {
      jugador: "Ronaldinho",
      equipo: "Magia brasileña que conquistó el Camp Nou",
      img: "assets/img/barca2.jpg",
      descripcion: "Magia brasileña que conquistó el Camp Nou."
    },
    {
      jugador: "Maradona",
      equipo: "La camiseta que convirtió a Nápoles en leyenda.",
      img: "assets/img/napoli.jpg",
      descripcion: "La camiseta que convirtió a Nápoles en leyenda."
    },
    {
      jugador: "Cristiano Ronaldo",
      equipo: "Mentalidad ganadora y récords históricos.",
      img: "assets/img/madrid.jpg",
      descripcion: "Mentalidad ganadora y récords históricos."
    },
    {
      jugador: "Zidane",
      equipo: "Elegancia y clase en cada toque de balón",
      img: "assets/img/francia.jpg",
      descripcion: "Elegancia y clase en cada toque de balón."
    },
    {
      jugador: "Luis diaz",
      equipo: "Disciplina alemana con espíritu competitivo",
      img: "assets/img/bayern.jpg",
      descripcion: "Disciplina alemana con espíritu competitivo."
    }
  ];

  obtenerCamisetas(): Camiseta[] {
    return this.camisetas;
  }

}