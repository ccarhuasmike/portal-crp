import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CirugiaRobotica } from './cirugia-robotica';

describe('CirugiaRobotica', () => {
  let fixture: ComponentFixture<CirugiaRobotica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirugiaRobotica],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(CirugiaRobotica);
    fixture.detectChanges();
  });

  it('renders the robotic surgery content and specialties', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Cirugía robótica en la Clínica Ricardo Palma');
    expect(page.querySelectorAll('#ventajas-title + div article').length).toBe(5);
    expect(page.querySelectorAll('section[aria-labelledby="especialidades-title"] article').length).toBe(4);
    expect(page.querySelector('a[href="mailto:mtusalud@crp.com.pe"]')).toBeTruthy();
  });
});
