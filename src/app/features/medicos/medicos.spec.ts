import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Medicos } from './medicos';

describe('Medicos', () => {
  let fixture: ComponentFixture<Medicos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Medicos],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Medicos);
    fixture.detectChanges();
  });

  it('renders the medical directory with the visible first-page records', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.trim()).toBe('Nuestro equipo médico');
    expect(page.querySelectorAll('article').length).toBe(16);
  });

  it('filters doctors by name and specialty', () => {
    const page = fixture.nativeElement as HTMLElement;
    const search = page.querySelector<HTMLInputElement>('input[type="search"]');
    const selects = page.querySelectorAll<HTMLSelectElement>('select');

    if (!search || selects.length !== 2) {
      fail('Directory filters should be present');
      return;
    }

    search.value = 'acosta';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(page.querySelectorAll('article').length).toBe(2);

    search.value = '';
    search.dispatchEvent(new Event('input'));
    selects[0].value = 'Especialidad de Neurología';
    selects[0].dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(page.querySelectorAll('article').length).toBe(2);
  });
});
