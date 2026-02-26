import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // 👈 ESTO ES LO QUE FALTABA
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent { }