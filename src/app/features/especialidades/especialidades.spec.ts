import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Especialidades } from './especialidades';

describe('Especialidades', () => {
  let fixture: ComponentFixture<Especialidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Especialidades],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Especialidades);
    fixture.detectChanges();
  });

  it('renders the medical specialties catalog', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toBe('Especialidades médicas');
    expect(page.querySelectorAll('ul article').length).toBe(12);
  });

  it('filters the catalog by search and selected specialty', () => {
    const page = fixture.nativeElement as HTMLElement;
    const search = page.querySelector<HTMLInputElement>('input[type="search"]');
    const specialty = page.querySelector<HTMLSelectElement>('select');

    if (!search || !specialty) {
      fail('Search and specialty controls should be present');
      return;
    }

    search.value = 'cardiología';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(page.querySelectorAll('ul article').length).toBe(1);

    search.value = '';
    search.dispatchEvent(new Event('input'));
    specialty.value = 'Cirugía General';
    specialty.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(page.querySelectorAll('ul article').length).toBe(1);
  });
});
