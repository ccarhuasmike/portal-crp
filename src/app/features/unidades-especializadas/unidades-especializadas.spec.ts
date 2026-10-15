import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { UnidadesEspecializadas } from './unidades-especializadas';

describe('UnidadesEspecializadas', () => {
  let fixture: ComponentFixture<UnidadesEspecializadas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadesEspecializadas],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UnidadesEspecializadas);
    fixture.detectChanges();
  });

  it('renders the visible specialty units from the reference', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.trim()).toBe('Elige la especialidad adecuada para ti');
    expect(page.querySelectorAll('#catalogo-unidades article').length).toBe(12);
  });

  it('filters units by search and selected unit', () => {
    const page = fixture.nativeElement as HTMLElement;
    const search = page.querySelector<HTMLInputElement>('input[type="search"]');
    const unit = page.querySelector<HTMLSelectElement>('select');

    if (!search || !unit) {
      fail('Search and unit controls should be present');
      return;
    }

    search.value = 'epilepsia';
    search.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(page.querySelectorAll('#catalogo-unidades article').length).toBe(1);

    search.value = '';
    search.dispatchEvent(new Event('input'));
    unit.value = 'Unidad Especializada de la Columna';
    unit.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(page.querySelectorAll('#catalogo-unidades article').length).toBe(1);
  });
});
