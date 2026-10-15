import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartamentoInternacional } from './departamento-internacional';

describe('DepartamentoInternacional', () => {
  let fixture: ComponentFixture<DepartamentoInternacional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartamentoInternacional],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartamentoInternacional);
    fixture.detectChanges();
  });

  it('renders international care, benefits, partner list, and patient feedback', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('respaldo internacional');
    expect(page.querySelectorAll('ul li').length).toBeGreaterThanOrEqual(11);
    expect(page.querySelectorAll('section[aria-labelledby="testimonios-title"] figure').length).toBe(4);
    expect(page.querySelectorAll('button[aria-pressed]').length).toBe(3);
  });

  it('changes the selected facilities image from the carousel controls', () => {
    const page = fixture.nativeElement as HTMLElement;
    const secondImageButton = page.querySelector<HTMLButtonElement>(
      'button[aria-label^="Ver imagen 2"]',
    );

    secondImageButton?.click();
    fixture.detectChanges();

    expect(page.querySelector('section[aria-labelledby="instalaciones-title"] img')?.getAttribute('src'))
      .toContain('doctor-are-checking-pregnant-woman');
  });
});
