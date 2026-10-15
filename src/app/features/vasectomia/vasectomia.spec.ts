import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vasectomia } from './vasectomia';

describe('Vasectomia', () => {
  let fixture: ComponentFixture<Vasectomia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vasectomia],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Vasectomia);
    fixture.detectChanges();
  });

  it('renders the procedure, package, benefits, specialists, and FAQs', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Vasectomía');
    expect(page.querySelectorAll('#benefits-title + p + div article').length).toBe(4);
    expect(page.querySelectorAll('#faq-title + div button').length).toBe(5);
    expect(page.textContent).toContain('Paquete integral a un precio');
    expect(page.textContent).toContain('Especialistas en urología');
  });

  it('expands and collapses FAQ answers accessibly', () => {
    const page = fixture.nativeElement as HTMLElement;
    const button = page.querySelector<HTMLButtonElement>('#faq-title + div button');

    expect(button).not.toBeNull();
    button?.click();
    fixture.detectChanges();
    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(page.querySelector('#vasectomy-faq-0')).not.toBeNull();

    button?.click();
    fixture.detectChanges();
    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(page.querySelector('#vasectomy-faq-0')).toBeNull();
  });

  it('uses the existing patient portal for appointment actions', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(
      page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length,
    ).toBeGreaterThan(0);
  });
});
