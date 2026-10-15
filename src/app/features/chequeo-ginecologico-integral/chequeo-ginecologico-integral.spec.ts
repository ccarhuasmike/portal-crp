import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChequeoGinecologicoIntegral } from './chequeo-ginecologico-integral';

describe('ChequeoGinecologicoIntegral', () => {
  let fixture: ComponentFixture<ChequeoGinecologicoIntegral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChequeoGinecologicoIntegral],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ChequeoGinecologicoIntegral);
    fixture.detectChanges();
  });

  it('renders benefits, package tables, audience cards, and FAQs', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Chequeo Ginecológico Integral');
    expect(page.querySelectorAll('#benefits-title + p + div article').length).toBe(4);
    expect(page.querySelectorAll('#packages-title + p + div table tbody tr').length).toBe(9);
    expect(page.querySelectorAll('#audience-title + p + div article').length).toBe(4);
    expect(page.querySelectorAll('#faq-title + div button').length).toBe(5);
  });

  it('supports expanding and collapsing FAQ answers accessibly', () => {
    const page = fixture.nativeElement as HTMLElement;
    const button = page.querySelector<HTMLButtonElement>('#faq-title + div button');

    expect(button).not.toBeNull();
    button?.click();
    fixture.detectChanges();
    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(page.querySelector('#gynecology-faq-0')).not.toBeNull();

    button?.click();
    fixture.detectChanges();
    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(page.querySelector('#gynecology-faq-0')).toBeNull();
  });

  it('uses the existing patient portal for contact actions', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(
      page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length,
    ).toBeGreaterThan(0);
  });
});
