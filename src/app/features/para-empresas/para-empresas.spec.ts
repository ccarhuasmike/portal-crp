import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParaEmpresas } from './para-empresas';

describe('ParaEmpresas', () => {
  let fixture: ComponentFixture<ParaEmpresas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParaEmpresas],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ParaEmpresas);
    fixture.detectChanges();
  });

  it('renders corporate tiers, benefits, and activities', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Conoce las categorías');
    expect(page.querySelectorAll('#planes-para-empresas table tbody tr').length).toBe(10);
    expect(page.querySelectorAll('#benefits-title + ul li').length).toBe(5);
    expect(page.querySelectorAll('#momentos-empresas article').length).toBe(2);
  });

  it('links the plans call to action to the tier comparison', () => {
    const page = fixture.nativeElement as HTMLElement;
    const planLinks = page.querySelectorAll<HTMLAnchorElement>('a[href="#planes-para-empresas"]');

    expect(planLinks.length).toBeGreaterThanOrEqual(2);
    expect(page.querySelector('#planes-para-empresas')).not.toBeNull();
    expect(page.querySelector('#contactarme-empresas')).not.toBeNull();
  });
});
