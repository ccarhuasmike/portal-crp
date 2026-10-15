import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CirugiaVascular } from './cirugia-vascular';

describe('CirugiaVascular', () => {
  let fixture: ComponentFixture<CirugiaVascular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirugiaVascular],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CirugiaVascular);
    fixture.detectChanges();
  });

  it('renders the causes, symptoms, treatment options, and package information', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('¿Tienes molestias en las piernas?');
    expect(page.querySelectorAll('#causes-title ~ div article').length).toBe(2);
    expect(page.querySelectorAll('#symptoms-title + p + ul li').length).toBe(5);
    expect(page.querySelectorAll('#treatments-title + p + div article').length).toBe(2);
    expect(page.textContent).toContain('El paquete ideal para cuidar tus venas');
  });

  it('uses the existing patient portal for appointment and quote actions', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(
      page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length,
    ).toBeGreaterThanOrEqual(3);
  });
});
