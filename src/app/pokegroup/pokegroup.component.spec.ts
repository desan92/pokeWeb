import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokegroupComponent } from './pokegroup.component';

describe('PokegroupComponent', () => {
  let component: PokegroupComponent;
  let fixture: ComponentFixture<PokegroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokegroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokegroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
