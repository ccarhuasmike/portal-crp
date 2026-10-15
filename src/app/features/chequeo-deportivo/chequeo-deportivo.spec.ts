import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChequeoDeportivo } from './chequeo-deportivo';

describe('ChequeoDeportivo', () => {
  let fixture: ComponentFixture<ChequeoDeportivo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeoDeportivo],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChequeoDeportivo);
    fixture.detectChanges();
  });

  it('renders the main sports checkup content and package options', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()).toContain('Chequeo deportivo');
    expect(page.querySelectorAll('#benefits-title + p + div article').length).toBe(3);
    expect(page.querySelectorAll('table thead th').length).toBe(5);
    expect(page.querySelectorAll('#faq-title + div > div').length).toBe(5);
  });

  it('links appointment actions to the existing patient portal', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length).toBeGreaterThan(0);
  });
});
