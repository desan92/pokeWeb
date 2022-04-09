import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonInfoApiService } from '../services/pokemon-info-api.service';

@Component({
  selector: 'app-pokemonfile',
  templateUrl: './pokemonfile.component.html',
  styleUrls: ['./pokemonfile.component.css']
})
export class PokemonfileComponent implements OnInit {

  nom: string = "";
  url: string = "";
  pokemon: any = [];
  moves: any = [];
  type: any = [];
  openAccordion = false;

  constructor(private PokemonInfoApi: PokemonInfoApiService, private routeID:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.nom = this.routeID.snapshot.params['nom'];
    this.getPokemon();

  }

  getPokemon(){
    this.PokemonInfoApi.singlePokemon(this.nom).subscribe(
      (res: any) => {
        this.pokemon = res;
        // console.log(this.pokemon);
        res.types.forEach((restype) =>{
          this.type.push(restype);
          // console.log(this.type)
        }) 
        res.moves.forEach((result) => {
          this.url = result.move.url;
          this.PokemonInfoApi.pokemonMove(this.url).subscribe(
            (resposta: any) => {
              this.moves.push(resposta);
              this.moves.sort((a, b) => {return a.id - b.id});
              console.log(this.moves)
            }
        )
      })
      },
      error => {
        this.router.navigate(['']);
      }
    )
  }

}
