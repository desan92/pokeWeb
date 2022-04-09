import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonfileComponent } from './pokemonfile.component';

describe('PokemonfileComponent', () => {
  let component: PokemonfileComponent;
  let fixture: ComponentFixture<PokemonfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
