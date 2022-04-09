import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PokemonfileComponent } from './pokemonfile/pokemonfile.component';
import { PokegroupComponent } from './pokegroup/pokegroup.component';
import { CommonModule } from '@angular/common';
import { ReplacePipePipe } from './shared/replace-pipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccordionModule } from 'ngx-accordion';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonfileComponent,
    PokegroupComponent,
    ReplacePipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    NgxPaginationModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    CommonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
