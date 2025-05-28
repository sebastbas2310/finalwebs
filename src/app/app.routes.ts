import { Routes } from '@angular/router';
import { PokemonComponent } from './pages/pokemon/pokemon.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full'
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  }
];
