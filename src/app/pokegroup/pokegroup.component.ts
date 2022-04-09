import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokemonInfoApiService } from '../services/pokemon-info-api.service';

@Component({
  selector: 'app-pokegroup',
  templateUrl: './pokegroup.component.html',
  styleUrls: ['./pokegroup.component.css']
})
export class PokegroupComponent implements OnInit {

  info_poke_group: any;
  singlePoke: any = [];
  name: string = '';
  page =  1;
  offset = 0;
  limit = 18;
  totalPokemons = 0;
  pagination_pokemon = 0;

  constructor(private PokemonInfoApi: PokemonInfoApiService, private router: Router) { }

  ngOnInit(): void {
    this.groupOfPokemon();
  }


  // tsconfig.json -> "noImplicitAny": false, perque sino el result dona error.
  groupOfPokemon(){
    console.log(this.totalPokemons);
    
    if(this.totalPokemons != 0 && this.offset <= this.totalPokemons)
    {
      this.offset = this.page * this.limit - 18;
    }
    else if(this.offset > this.totalPokemons)
    {
      this.offset = this.totalPokemons;
    }

    console.log(this.offset);
    this.PokemonInfoApi.pokemonGroup(this.offset , this.limit).subscribe(
      (res: any) => {
        this.totalPokemons = res.count;
        res.results.forEach((result) => {
          this.PokemonInfoApi.singlePokemon(result.name).subscribe(
            (resposta: any) => {
              this.singlePoke.push(resposta);
              console.log(this.singlePoke); 
              this.singlePoke.sort((a, b) => {return a.id - b.id});
            }
        )
      })
      
      console.log(this.page);
      },
      error => {
        alert("S'ha produït un error amb el servidor.");
      }
    )
  }

}
