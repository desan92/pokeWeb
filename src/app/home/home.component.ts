import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PokemonName } from '../models/pokemon.model';
import { PokemonInfoApiService } from '../services/pokemon-info-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pokeInfo: PokemonInfoApiService, private router: Router) { }

  pokemonName = new PokemonName();
  singlePoke: any;

  ngOnInit(): void {
  }

  pokemon = new FormGroup({
    Pokemonnom: new FormControl('', [Validators.required, Validators.minLength(2)])
  });

  get PokemonNom(){ return this.pokemon.get('Pokemonnom'); }
  
  

  pokemonlookingfor(){

    let NomPokemon = this.pokemonName.pokemonName.toLowerCase().replace(' ', '-');
    console.log(NomPokemon); 
    this.pokemonfetch(NomPokemon)
  }

  pokemonfetch(nom:string){
    this.pokeInfo.singlePokemon(nom).subscribe(
      res => {
        this.singlePoke = res;
        console.log(this.singlePoke);
        this.router.navigate(['/pokemon/', nom]);
      },
      error => {
        alert("S'ha produït un error amb el servidor.");
      }
    )
    
  }
}
