import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CamisetasService {

  constructor() { }

  camisetas = [
    {
      jugador: "Ivan Cordoba",
      equipo: "La camiseta donde el fenómeno volvió a hacer del gol algo inevitable.",
      img: "assets/img/inter.jpg"
    },
    {
      jugador: "Ronaldinho",
      equipo: "Magia pura: sonrisas, gambetas y fútbol convertido en arte.",
      img: "assets/img/barca2.jpg"
    },
    {
      jugador: "Maradona",
      equipo: "Una ciudad entera creyó en un dios vestido de celeste.",
      img: "assets/img/napoli.jpg"
    },
    {
      jugador: "Cristiano Ronaldo",
      equipo: "Real Ambición, récords y mentalidad ganadora eterna.",
      img: "assets/img/madrid.jpg"
    },
    {
      jugador: "Zidane",
      equipo: "Elegancia absoluta: fútbol jugado con clase.",
      img: "assets/img/francia.jpg"
    },
    {
      jugador: "Luis Diaz ",
      equipo: "Disciplina alemana con sangre latina y espíritu luchador.",
      img: "assets/img/bayern.jpg"
    }
  ];

  obtenerCamisetas(){
    return this.camisetas;
  }

}