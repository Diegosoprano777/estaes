import { TestBed } from '@angular/core/testing';
import { NosotrosComponent } from './nosotros';

describe('NosotrosComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosComponent]
    }).compileComponents();
  });

  it('should exist', () => {
    expect(NosotrosComponent).toBeDefined();
  });
});
