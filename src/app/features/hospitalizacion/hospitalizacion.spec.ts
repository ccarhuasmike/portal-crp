import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hospitalizacion } from './hospitalizacion';

describe('Hospitalizacion', () => {
  let fixture: ComponentFixture<Hospitalizacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hospitalizacion],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Hospitalizacion);
    fixture.detectChanges();
  });

  it('renders visit information, care team, and stay sections', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Recuperarte');
    expect(page.querySelectorAll('section[aria-label="Atención durante la hospitalización"] article').length)
      .toBe(3);
    expect(page.querySelectorAll('section[aria-labelledby="equipo-title"] li').length).toBe(7);
    expect(page.querySelectorAll('a[href^="tel:"]').length).toBe(2);
  });
});
