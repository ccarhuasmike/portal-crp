import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { BlogArticlePage } from './article';

describe('BlogArticlePage', () => {
  let fixture: ComponentFixture<BlogArticlePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogArticlePage],
      providers: [provideZonelessChangeDetection(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BlogArticlePage);
    fixture.detectChanges();
  });

  it('renders the article structure, accessible image, FAQ, and related stories', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Amigdalitis');
    expect(page.querySelector('nav[aria-label="Ruta de navegación"]')).not.toBeNull();
    expect(page.querySelector('img[alt="Profesional de salud revisa la garganta de una paciente"]')).not.toBeNull();
    expect(page.querySelectorAll('details').length).toBe(4);
    expect(page.querySelectorAll('#related-title + div article').length).toBe(4);
  });
});
