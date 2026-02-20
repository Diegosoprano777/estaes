import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.css']
})
export class NosotrosComponent {

  formulario = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  descargarJSON(form: NgForm) {

    // Si el formulario no es válido, no hace nada
    if (form.invalid) {
      Object.values(form.controls).forEach(control => control.markAsTouched());
      return;
    }

    const dataStr = JSON.stringify(this.formulario, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'formulario.json';
    a.click();

    window.URL.revokeObjectURL(url);

    // reset formulario después de descargar
    form.resetForm();
  }
}