import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamisetasService, Camiseta } from 'src/app/services/camisetas';

@Component({
  selector: 'app-camisetas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camisetas.html',
  styleUrl: './camisetas.css'
})
export class CamisetasComponent {

  private camisetasService = inject(CamisetasService);

  listaCamisetas: Camiseta[] = this.camisetasService.obtenerCamisetas();

}