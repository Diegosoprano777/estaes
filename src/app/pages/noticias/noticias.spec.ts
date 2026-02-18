import { TestBed } from '@angular/core/testing';
import { NoticiasComponent } from './noticias';

describe('NoticiasComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasComponent]
    }).compileComponents();
  });

  it('should create', () => {
    expect(NoticiasComponent).toBeTruthy();
  });

});
