import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CirugiaBariatrica } from './cirugia-bariatrica';

describe('CirugiaBariatrica', () => {
  let fixture: ComponentFixture<CirugiaBariatrica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirugiaBariatrica],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CirugiaBariatrica);
    fixture.detectChanges();
  });

  it('renders the bariatric surgery packages and benefit sections', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()).toContain('Da el primer paso');
    expect(page.querySelectorAll('#packages-title + p + div article').length).toBe(2);
    expect(page.querySelectorAll('#benefits-title + p + div article').length).toBe(3);
    expect(page.textContent).toContain('Dr. Fernando Schaffino');
  });

  it('links appointment actions to the existing patient portal', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelectorAll('a[href="https://portaldelpaciente.crp.com.pe/login"]').length).toBeGreaterThan(0);
  });
});
