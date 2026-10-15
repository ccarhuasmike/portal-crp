import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Emergencias247 } from './emergencias-24-7';

describe('Emergencias247', () => {
  let fixture: ComponentFixture<Emergencias247>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emergencias247],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Emergencias247);
    fixture.detectChanges();
  });

  it('renders the emergency call to action and emergency service cards', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Emergencias las 24 horas');
    expect(page.querySelector('a[href="tel:+51112242224"]')?.textContent).toContain(
      'Solicitar atención inmediata',
    );
    expect(page.querySelectorAll('section[aria-label="Servicios de emergencia"] article').length).toBe(3);
    expect(page.querySelector('[aria-label="Espacio para el video informativo de Emergencias 24/7"]')).toBeTruthy();
  });

  it('updates the selected emergency service control', () => {
    const page = fixture.nativeElement as HTMLElement;
    const pediatricControl = page.querySelector<HTMLButtonElement>(
      'button[aria-label="Seleccionar Emergencia Pediátrica"]',
    );

    pediatricControl?.click();
    fixture.detectChanges();

    expect(pediatricControl?.getAttribute('aria-pressed')).toBe('true');
  });
});
