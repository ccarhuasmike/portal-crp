import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Maternidad } from './maternidad';

describe('Maternidad', () => {
  let fixture: ComponentFixture<Maternidad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maternidad],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Maternidad);
    fixture.detectChanges();
  });

  it('renders maternity packages, stages, and frequently asked questions', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()).toContain('Tu maternidad');
    expect(page.querySelectorAll('#paquetes-maternidad article').length).toBe(4);
    expect(page.querySelectorAll('#stages-title + ul li').length).toBe(4);
    expect(page.querySelectorAll('#faq-title + ul li').length).toBe(5);
  });

  it('uses the existing appointment portal for booking calls to action', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length).toBeGreaterThan(0);
  });
});
