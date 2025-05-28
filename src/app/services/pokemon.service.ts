import { Injectable } from '@angular/core';
import { HttpClient   } from'@angular/common/http';
import { Observable } from 'rxjs';
import { pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private servidor = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

  constructor(private http: HttpClient) { }

   

  getPokemons(): Observable<pokemon[]>{
    const endpoint = this.servidor;
    const headers = {
      'Content-Type':"application/json",
    }
    return this.http.get<pokemon[]>(endpoint,{headers});
  }

}
