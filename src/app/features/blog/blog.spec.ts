import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blog } from './blog';

describe('Blog', () => {
  let fixture: ComponentFixture<Blog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blog],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(Blog);
    fixture.detectChanges();
  });

  it('renders the reference news cards and responsive search filters', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('h1')?.textContent).toContain('Noticias y eventos');
    expect(page.querySelectorAll('article').length).toBe(12);
    expect(page.querySelectorAll('form select').length).toBe(3);
    expect(page.querySelectorAll('article img[alt]').length).toBe(12);
  });

  it('filters cards by category and resets the current page', () => {
    const category = (fixture.nativeElement as HTMLElement).querySelector('select');
    expect(category).not.toBeNull();

    category!.value = 'Ginecología';
    category!.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).querySelectorAll('article').length).toBe(1);
  });
});
