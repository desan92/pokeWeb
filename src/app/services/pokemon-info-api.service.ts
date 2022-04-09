import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonInfoApiService {

  public pokemonfile: any = [];
  
  private messageSource = new BehaviorSubject(this.pokemonfile);
  currentmessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) { }

  singlePokemon(nom:string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + nom);
    // this.messageSource.next('https://pokeapi.co/api/v2/pokemon/' + nom)
    // console.log(this.messageSource.value);
  }

  pokemonGroup(offset:number, limit:number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
  }

  pokemonMove(url: string){
    return this.http.get(url);
  }
}
