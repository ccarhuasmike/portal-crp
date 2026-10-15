import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitasMedicas } from './citas-medicas';

describe('CitasMedicas', () => {
  let fixture: ComponentFixture<CitasMedicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitasMedicas],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CitasMedicas);
    fixture.detectChanges();
  });

  it('renders appointment information, reasons, and patient testimonials', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Citas Médicas');
    expect(page.querySelectorAll('section[aria-labelledby="por-que-title"] article').length).toBe(3);
    expect(page.querySelectorAll('section[aria-labelledby="testimonios-title"] figure').length).toBe(4);
    expect(page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length).toBe(2);
  });
});
