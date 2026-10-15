import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogArticle {
  readonly category: string;
  readonly date: string;
  readonly title: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly href?: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.html',
})
export class Blog {
  private static readonly PAGE_SIZE = 12;

  protected readonly articles: readonly BlogArticle[] = [
    {
      category: 'Gastroenterología',
      date: '2026-10-09',
      title: 'Colonoscopia: cuándo se recomienda y qué esperar del examen',
      image: '/wp-content/uploads/2026/09/20690-1.jpg',
      imageAlt: 'Atención médica durante una consulta',
    },
    {
      category: 'Ginecología',
      date: '2026-10-09',
      title: 'Vaginosis bacteriana: qué es, síntomas, causas y tratamiento',
      image: '/wp-content/uploads/2026/09/Planificacion-familiar.png',
      imageAlt: 'Orientación médica sobre salud sexual y reproductiva',
    },
    {
      category: 'Dermatología',
      date: '2026-10-06',
      title: 'Dermatitis seborreica: qué es, síntomas, causas y tratamiento',
      image: '/wp-content/uploads/2026/09/rosacea-y-verano-como-cuidarte-y-mantener-tu-piel-saludable.png',
      imageAlt: 'Cuidado de la piel',
    },
    {
      category: 'Reumatología',
      date: '2026-10-06',
      title: 'Artritis reumatoide: síntomas y tratamiento',
      image: '/wp-content/uploads/2026/09/Fractura-de-columna-vertebral-osteoporosis.png',
      imageAlt: 'Imagen relacionada con salud ósea',
    },
    {
      category: 'Pediatría',
      date: '2026-09-30',
      title: 'Pie plano en niños: importancia de la evaluación ortopédica',
      image: '/wp-content/uploads/2026/09/pie-plano-en-ninos-importancia-de-la-evaluacion-ortopedica.png',
      imageAlt: 'Evaluación de los pies de un niño',
    },
    {
      category: 'Cardiología',
      date: '2026-09-23',
      title: 'Hipertensión arterial: cómo cuidar tu salud cardiovascular',
      image: '/wp-content/uploads/2026/09/20690-1.jpg',
      imageAlt: 'Profesional de salud tomando la presión arterial',
    },
    {
      category: 'Embarazo y maternidad',
      date: '2026-09-22',
      title: 'Preeclampsia: señales de alerta durante el embarazo',
      image: '/wp-content/uploads/2026/09/doctor-are-checking-pregnant-woman-with-stethoscope-hospital-healthcare-concept.jpg',
      imageAlt: 'Control médico durante el embarazo',
    },
    {
      category: 'Cirugía robótica',
      date: '2026-09-21',
      title: 'Cirugía robótica: innovación al servicio de la salud',
      image: '/wp-content/uploads/2026/09/Cirugia-Robotica-Patologia-Mamaria.jpg',
      imageAlt: 'Equipo de cirugía robótica',
    },
    {
      category: 'Embarazo y maternidad',
      date: '2026-09-18',
      title: 'Pérdida gestacional: acompañamiento y atención médica',
      image: '/wp-content/uploads/2026/09/Antes-del-embarazo-Hero-fondo-CSS-38.png',
      imageAlt: 'Acompañamiento en salud materna',
    },
    {
      category: 'Otorrinolaringología',
      date: '2026-09-17',
      title: 'Amigdalitis: síntomas, causas y cuándo acudir al médico',
      image: '/wp-content/uploads/2026/09/270-2-2.jpg',
      imageAlt: 'Evaluación médica de la garganta',
      href: '/blog/general/amigdalitis-que-es-por-que-aparece-y-como-tratarla/',
    },
    {
      category: 'Infectología',
      date: '2026-08-20',
      title: 'Vacuna antirrábica',
      image: '/wp-content/uploads/2026/09/20690-1.jpg',
      imageAlt: 'Atención médica durante una consulta',
    },
    {
      category: 'Embarazo y maternidad',
      date: '2026-08-20',
      title: 'Cuidados durante el puerperio',
      image: '/wp-content/uploads/2026/09/Despues-del-parto-Hero-fondo-CSS-60.png',
      imageAlt: 'Cuidados de salud después del parto',
    },
  ];

  protected readonly searchTerm = signal('');
  protected readonly selectedCategory = signal('');
  protected readonly selectedMonth = signal('');
  protected readonly selectedYear = signal('');
  protected readonly currentPage = signal(1);

  protected readonly categories = [
    'Cardiología',
    'Cirugía robótica',
    'Dermatología',
    'Embarazo y maternidad',
    'Gastroenterología',
    'Ginecología',
    'Infectología',
    'Otorrinolaringología',
    'Pediatría',
    'Reumatología',
  ];

  protected readonly filteredArticles = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase('es');
    return this.articles.filter((article) => {
      const matchesTerm =
        term.length === 0 || article.title.toLocaleLowerCase('es').includes(term);
      const matchesCategory =
        this.selectedCategory().length === 0 ||
        article.category === this.selectedCategory();
      const matchesMonth =
        this.selectedMonth().length === 0 ||
        article.date.slice(5, 7) === this.selectedMonth();
      const matchesYear =
        this.selectedYear().length === 0 ||
        article.date.slice(0, 4) === this.selectedYear();
      return matchesTerm && matchesCategory && matchesMonth && matchesYear;
    });
  });

  protected readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.filteredArticles().length / Blog.PAGE_SIZE)),
  );

  protected readonly visibleArticles = computed(() => {
    const start = (this.currentPage() - 1) * Blog.PAGE_SIZE;
    return this.filteredArticles().slice(start, start + Blog.PAGE_SIZE);
  });

  protected readonly pageNumbers = computed(() =>
    Array.from({ length: this.pageCount() }, (_, index) => index + 1),
  );

  protected formatDate(date: string): string {
    const months: Readonly<Record<string, string>> = {
      '08': 'Ago',
      '09': 'Sep',
      '10': 'Oct',
    };
    return `${date.slice(8, 10)} ${months[date.slice(5, 7)]} ${date.slice(0, 4)}`;
  }

  protected setSearchTerm(event: Event): void {
    const value = this.readControlValue(event);
    this.searchTerm.set(value);
    this.currentPage.set(1);
  }

  protected setCategory(event: Event): void {
    this.selectedCategory.set(this.readControlValue(event));
    this.currentPage.set(1);
  }

  protected setMonth(event: Event): void {
    this.selectedMonth.set(this.readControlValue(event));
    this.currentPage.set(1);
  }

  protected setYear(event: Event): void {
    this.selectedYear.set(this.readControlValue(event));
    this.currentPage.set(1);
  }

  protected setPage(page: number): void {
    if (page >= 1 && page <= this.pageCount()) {
      this.currentPage.set(page);
    }
  }

  private readControlValue(event: Event): string {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
      return target.value;
    }
    return '';
  }
}
