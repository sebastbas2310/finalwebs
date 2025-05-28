import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, MaterialModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemonList: pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemons().subscribe({
      next: (res) => {
        this.pokemonList = res;
        console.log(this.pokemonList);
      },
      error: (err) => {
        if (err.status === 403) {
          localStorage.removeItem('AuthToken');
          // this.router.navigate(['/login']); // O cualquier acción para manejar el logout
        }
      }
    });
  }

  openPokemonDetails(Pokemon: pokemon): void {
    Swal.fire({
      title: `<strong>${Pokemon.pokemon_name}</strong>`,
      html: `
        <img src="${Pokemon.pokemon_img}" alt="Imagen de ${Pokemon.pokemon_img}" style="width: 100%; height: auto; margin-bottom: 15px; border-radius: 8px;">
        <p><strong>ID:</strong> ${Pokemon.pokemon_id}</p>
        
      `,
      confirmButtonText: 'Cerrar'
    });
  }

  
}
