import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { UnidadCuidadosIntensivosPediatrica } from './unidad-cuidados-intensivos-pediatrica';

describe('UnidadCuidadosIntensivosPediatrica', () => {
  let fixture: ComponentFixture<UnidadCuidadosIntensivosPediatrica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadCuidadosIntensivosPediatrica],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadCuidadosIntensivosPediatrica);
    fixture.detectChanges();
  });

  it('renders the pediatric intensive care details and benefits', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.trim()).toBe(
      'Unidad de Cuidados Intensivos Pediátrica',
    );
    expect(page.querySelectorAll('#benefits-title + ul li').length).toBe(5);
    expect(page.querySelectorAll('#specialists-title ~ ul article').length).toBe(1);
    expect(page.textContent).toContain('Acosta Galli, Maria Ysabel');
  });
});
