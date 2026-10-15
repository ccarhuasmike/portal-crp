import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nosotros } from './nosotros';

describe('Nosotros', () => {
  let fixture: ComponentFixture<Nosotros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nosotros],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Nosotros);
    fixture.detectChanges();
  });

  it('renders the about, mission, vision, values, and history sections', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('50 años cuidando');
    expect(page.querySelector('h2')?.textContent).toBe('Misión');
    expect(page.textContent).toContain('Visión');
    expect(page.querySelectorAll('#values-title + p + div article').length).toBe(4);
    expect(page.querySelector('#history-title')?.textContent).toBe('Historia');
  });
});
