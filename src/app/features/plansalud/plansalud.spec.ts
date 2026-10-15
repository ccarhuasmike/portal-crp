import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { PlanSalud } from './plansalud';

describe('PlanSalud', () => {
  let fixture: ComponentFixture<PlanSalud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanSalud],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanSalud);
    fixture.detectChanges();
  });

  it('renders the PlanSalud page sections', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Plan de Salud en Clínica Ricardo Palma');
    expect(page.querySelectorAll('#beneficios_plan_salud article').length).toBe(8);
    expect(page.querySelectorAll('#faq-title + ul li').length).toBe(6);
  });
});
