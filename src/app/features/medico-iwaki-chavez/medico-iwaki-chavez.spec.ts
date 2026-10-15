import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MedicoIwakiChavez } from './medico-iwaki-chavez';

describe('MedicoIwakiChavez', () => {
  let fixture: ComponentFixture<MedicoIwakiChavez>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoIwakiChavez],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicoIwakiChavez);
    fixture.detectChanges();
  });

  it('renders the physician profile and education shown in the reference', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()).toBe(
      'Conoce a: Iwaki Chavez, Roberto',
    );
    expect(page.querySelectorAll('#education-title + ul li').length).toBe(3);
    expect(page.textContent).toContain('Cirugía de Cabeza y Cuello');
    expect(page.textContent).toContain('Universidad Nacional Mayor de San Marcos');
  });

  it('links to the existing patient appointment portal', () => {
    const page = fixture.nativeElement as HTMLElement;
    const appointmentLink = page.querySelector<HTMLAnchorElement>('a[href="https://portaldelpaciente.crp.com.pe/login"]');

    expect(appointmentLink?.textContent?.trim()).toBe('Agenda tu cita');
  });
});
