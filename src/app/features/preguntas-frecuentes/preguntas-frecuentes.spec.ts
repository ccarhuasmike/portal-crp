import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PreguntasFrecuentes } from './preguntas-frecuentes';

describe('PreguntasFrecuentes', () => {
  let fixture: ComponentFixture<PreguntasFrecuentes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntasFrecuentes],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PreguntasFrecuentes);
    fixture.detectChanges();
  });

  it('renders the categories and existing FAQ questions', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Citas médicas');
    expect(page.querySelectorAll('aside nav button').length).toBe(11);
    expect(page.querySelectorAll('details').length).toBe(9);
  });

  it('filters the question list when a category is selected', () => {
    const categoryButtons = (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLButtonElement>('aside nav button');
    const roboticsCategory = [...categoryButtons].find((button) => button.textContent?.includes('Cirugía Robótica'));

    expect(roboticsCategory).toBeDefined();
    roboticsCategory!.click();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('details').length).toBe(4);
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('Cirugía Robótica');
  });
});
