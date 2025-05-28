import { Routes } from '@angular/router';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:"",
        component:AppComponent
    },
    {
        path:"pokemon",
        component:PokemonComponent
    }
];
