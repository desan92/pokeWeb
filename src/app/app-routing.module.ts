import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonfileComponent } from './pokemonfile/pokemonfile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon/:nom', component: PokemonfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
