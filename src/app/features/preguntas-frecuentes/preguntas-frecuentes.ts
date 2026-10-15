import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FaqCategory {
  readonly label: string;
  readonly questions: readonly string[];
}

interface FaqItem {
  readonly question: string;
  readonly category: string;
  readonly href?: string;
  readonly external?: boolean;
}

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './preguntas-frecuentes.html',
})
export class PreguntasFrecuentes {
  protected readonly selectedCategory = signal('');

  protected readonly categories: readonly FaqCategory[] = [
    {
      label: 'Portal del Paciente',
      questions: ['Descarga nuestra App'],
    },
    {
      label: 'Resultados de laboratorio',
      questions: [],
    },
    {
      label: 'Cirugía Robótica',
      questions: [
        '¿El robot Da Vinci opera solo al paciente?',
        '¿Para qué tipo de cirugías se utiliza el robot Da Vinci?',
        '¿La cirugía robótica es más segura que la cirugía convencional?',
        '¿Cuánto tiempo dura la recuperación tras una cirugía robótica?',
      ],
    },
    {
      label: 'PlanSalud',
      questions: [],
    },
    {
      label: 'Departamento Internacional',
      questions: [],
    },
    {
      label: 'Citas y programación',
      questions: [
        '¿Cómo puedo agendar una consulta de urología en Clínica Ricardo Palma?',
        '¿A qué edad se recomienda realizar un chequeo de próstata?',
        '¿La urología también atiende a las mujeres?',
        '¿Qué enfermedades trata un urólogo?',
      ],
    },
    {
      label: 'Servicios y Especialidades',
      questions: [],
    },
    {
      label: 'Seguros y facturación',
      questions: [],
    },
    {
      label: 'Antes de su Visita',
      questions: [],
    },
    {
      label: 'Después de su visita',
      questions: [],
    },
    {
      label: 'Preguntas generales',
      questions: [],
    },
  ];

  protected readonly items: readonly FaqItem[] = [
    {
      question: 'Descarga nuestra App',
      category: 'Portal del Paciente',
      href: 'https://play.google.com/store/apps/details?id=com.app.crp&hl=es_PE&pli=1',
      external: true,
    },
    {
      question: '¿Cómo puedo agendar una consulta de urología en Clínica Ricardo Palma?',
      category: 'Citas y programación',
      href: 'https://portaldelpaciente.crp.com.pe/login',
      external: true,
    },
    {
      question: '¿A qué edad se recomienda realizar un chequeo de próstata?',
      category: 'Citas y programación',
      href: '/especialidades/index.html',
    },
    {
      question: '¿La urología también atiende a las mujeres?',
      category: 'Citas y programación',
      href: '/especialidades/index.html',
    },
    {
      question: '¿Qué enfermedades trata un urólogo?',
      category: 'Citas y programación',
      href: '/especialidades/index.html',
    },
    {
      question: '¿El robot Da Vinci opera solo al paciente?',
      category: 'Cirugía Robótica',
      href: '/servicios/cirugia-robotica/index.html',
    },
    {
      question: '¿Para qué tipo de cirugías se utiliza el robot Da Vinci?',
      category: 'Cirugía Robótica',
      href: '/servicios/cirugia-robotica/index.html',
    },
    {
      question: '¿La cirugía robótica es más segura que la cirugía convencional?',
      category: 'Cirugía Robótica',
      href: '/servicios/cirugia-robotica/index.html',
    },
    {
      question: '¿Cuánto tiempo dura la recuperación tras una cirugía robótica?',
      category: 'Cirugía Robótica',
      href: '/servicios/cirugia-robotica/index.html',
    },
  ];

  protected readonly visibleItems = computed(() => {
    const category = this.selectedCategory();

    return this.items.filter((item) => {
      const matchesCategory = !category || item.category === category;
      return matchesCategory;
    });
  });

  protected selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  protected showAllQuestions(): void {
    this.selectedCategory.set('');
  }
}
