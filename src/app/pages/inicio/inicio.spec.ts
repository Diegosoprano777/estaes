import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioComponent } from './inicio';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioComponent] // standalone component se importa
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change image when clicking next', () => {
    const inicial = component.indiceActual;
    component.siguiente();
    expect(component.indiceActual).not.toBe(inicial);
  });

  it('should loop images', () => {
    component.indiceActual = component.imagenes.length - 1;
    component.siguiente();
    expect(component.indiceActual).toBe(0);
  });
});
