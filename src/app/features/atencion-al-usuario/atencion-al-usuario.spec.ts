import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AtencionAlUsuario } from './atencion-al-usuario';

describe('AtencionAlUsuario', () => {
  let fixture: ComponentFixture<AtencionAlUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionAlUsuario],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AtencionAlUsuario);
    fixture.detectChanges();
  });

  it('renders support topics and links to existing destinations', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Atención al usuario');
    expect(page.querySelectorAll('article').length).toBe(9);
    expect(page.querySelector('a[href="https://portaldelpaciente.crp.com.pe/login"]')).not.toBeNull();
    expect(page.querySelector('a[href="/servicios/citas-medicas/index.html"]')).not.toBeNull();
  });

  it('filters support topics from the search field', () => {
    const input = (fixture.nativeElement as HTMLElement).querySelector<HTMLInputElement>('input[type="search"]');
    expect(input).not.toBeNull();

    input!.value = 'PlanSalud';
    input!.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('article').length).toBe(1);
  });
});
