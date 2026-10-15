import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CirugiaCabezaCuello } from './cirugia-cabeza-cuello';

describe('CirugiaCabezaCuello', () => {
  let fixture: ComponentFixture<CirugiaCabezaCuello>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirugiaCabezaCuello],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CirugiaCabezaCuello);
    fixture.detectChanges();
  });

  it('renders the specialty details, benefits, and listed specialists', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.trim()).toBe('Cirugía de Cabeza y Cuello');
    expect(page.querySelectorAll('#benefits-title + ul li').length).toBe(6);
    expect(page.querySelectorAll('#specialists-title ~ div + ul article').length).toBe(4);
    expect(page.querySelectorAll('img').length).toBe(3);
  });
});
