import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgramaNutricionIntegral } from './programa-nutricion-integral';

describe('ProgramaNutricionIntegral', () => {
  let fixture: ComponentFixture<ProgramaNutricionIntegral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaNutricionIntegral],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramaNutricionIntegral);
    fixture.detectChanges();
  });

  it('renders the nutrition benefits, plans, specialized programs, and FAQs', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Programa de');
    expect(page.querySelectorAll('#benefits-title + p + div article').length).toBe(4);
    expect(page.querySelectorAll('#plans-title + p + div table tbody tr').length).toBe(3);
    expect(page.querySelectorAll('#programs-title + p + div article').length).toBe(4);
    expect(page.querySelectorAll('#faq-title + div button').length).toBe(5);
  });

  it('allows only one FAQ to be expanded at a time', () => {
    const page = fixture.nativeElement as HTMLElement;
    const buttons = page.querySelectorAll<HTMLButtonElement>('#faq-title + div button');

    buttons[0].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
    expect(page.querySelectorAll('#faq-title + div [id^="nutrition-faq-"]').length).toBe(1);

    buttons[1].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true');
  });

  it('uses the existing patient portal for contact actions', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(
      page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length,
    ).toBeGreaterThan(0);
  });
});
