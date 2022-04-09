import { TestBed } from '@angular/core/testing';

import { PokemonInfoApiService } from './pokemon-info-api.service';

describe('PokemonInfoApiService', () => {
  let service: PokemonInfoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonInfoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
