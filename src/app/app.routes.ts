import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio';
import { NoticiasComponent } from './pages/noticias/noticias';
import { PartidosComponent } from './pages/partidos/partidos';
import { NosotrosComponent } from './pages/nosotros/nosotros';
import { CamisetasComponent } from './pages/camisetas/camisetas';
import { JugadoresComponent } from './pages/jugadores/jugadores'; // 👈 NUEVO

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'camisetas', component: CamisetasComponent },
  { path: 'jugadores', component: JugadoresComponent }, // 👈 NUEVA RUTA
  { path: '**', redirectTo: '' }
];
