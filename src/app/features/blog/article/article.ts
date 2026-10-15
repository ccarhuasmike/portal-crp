import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ArticleSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly points?: readonly string[];
}

interface RelatedArticle {
  readonly category: string;
  readonly date: string;
  readonly title: string;
  readonly image: string;
  readonly imageAlt: string;
}

@Component({
  selector: 'app-blog-article-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article.html',
})
export class BlogArticlePage {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  protected readonly shareStatus = signal('');

  protected readonly sections: readonly ArticleSection[] = [
    {
      title: 'Qué es la amigdalitis y cómo afecta la garganta',
      paragraphs: [
        'La amigdalitis es la inflamación de las amígdalas, dos tejidos ubicados a ambos lados de la parte posterior de la garganta. Puede presentarse a cualquier edad y causar dolor al tragar e irritación.',
        'La causa puede ser viral o bacteriana. La evaluación médica ayuda a identificar el origen y orientar el tratamiento más adecuado para cada caso.',
      ],
    },
    {
      title: 'Virus vs. bacterias: identificar la causa de tu amigdalitis',
      paragraphs: [
        'Los virus son una causa frecuente de dolor e inflamación de garganta. Algunas infecciones bacterianas también pueden afectar las amígdalas y requieren una evaluación clínica.',
        'Los síntomas por sí solos no siempre permiten distinguir la causa. El profesional de salud determinará si hace falta una prueba y qué cuidados seguir.',
      ],
    },
    {
      title: 'Síntomas que indican amigdalitis: cuándo consultar',
      paragraphs: ['Entre las manifestaciones que pueden acompañar a la amigdalitis se encuentran:'],
      points: [
        'Dolor de garganta y molestias al tragar.',
        'Amígdalas enrojecidas o inflamadas.',
        'Fiebre.',
        'Ganglios sensibles en el cuello.',
        'Placas o puntos blanquecinos en las amígdalas.',
      ],
    },
    {
      title: 'Tratamiento según el tipo de amigdalitis',
      paragraphs: [
        'El manejo depende de la causa y de la evaluación del profesional de salud. En las infecciones virales, el tratamiento suele enfocarse en aliviar los síntomas y mantener una buena hidratación.',
        'Los antibióticos se indican únicamente cuando el profesional confirma o considera probable una infección bacteriana. No te automediques ni uses antibióticos sobrantes.',
      ],
    },
    {
      title: 'Prevención de amigdalitis recurrente y cuándo considerar cirugía',
      paragraphs: [
        'El lavado frecuente de manos y evitar compartir utensilios ayudan a reducir la propagación de infecciones respiratorias.',
        'Si los episodios son frecuentes o causan complicaciones, un especialista puede evaluar las alternativas de tratamiento, incluida la cirugía en los casos en que esté indicada.',
      ],
    },
    {
      title: 'Cuando la garganta insiste: la señal de que debes actuar',
      paragraphs: [
        'Consulta con un profesional si el dolor es intenso, persiste o se acompaña de fiebre. Busca atención urgente ante dificultad para respirar o para tragar líquidos.',
        'La evaluación oportuna permite recibir orientación adecuada y evitar tratamientos innecesarios.',
      ],
    },
  ];

  protected readonly questions = [
    {
      question: '¿Qué es la amigdalitis y cómo se quita?',
      answer:
        'Es la inflamación de las amígdalas. El tratamiento depende de su causa, por lo que un profesional de salud puede indicarte los cuidados apropiados.',
    },
    {
      question: '¿Cuál es el mejor antibiótico para la amigdalitis?',
      answer:
        'No existe un antibiótico adecuado para todos los casos. Solo debe utilizarse cuando un profesional determine que la causa es bacteriana y lo indique.',
    },
    {
      question: '¿Qué tomar para desinflamar las amígdalas?',
      answer:
        'La elección de medicamentos depende de la edad, los síntomas y los antecedentes de cada persona. Consulta con un profesional antes de tomar medicamentos.',
    },
    {
      question: '¿Cuánto tiempo dura una amigdalitis?',
      answer:
        'La duración puede variar según la causa y cada persona. Si los síntomas persisten, empeoran o dificultan la respiración o la deglución, busca atención médica.',
    },
  ];

  protected readonly relatedArticles: readonly RelatedArticle[] = [
    {
      category: 'Gastroenterología',
      date: '2026-10-09',
      title: 'Colonoscopia: cuándo se recomienda y qué esperar del examen',
      image: '/wp-content/uploads/2026/09/20690-1.jpg',
      imageAlt: 'Profesional de salud durante una consulta',
    },
    {
      category: 'Ginecología',
      date: '2026-10-09',
      title: 'Vaginosis bacteriana: qué es, síntomas, causas y tratamiento',
      image: '/wp-content/uploads/2026/09/Planificacion-familiar.png',
      imageAlt: 'Orientación médica sobre salud reproductiva',
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
      title: 'Artritis reumatoide: síntomas y factores de riesgo',
      image: '/wp-content/uploads/2026/09/Fractura-de-columna-vertebral-osteoporosis.png',
      imageAlt: 'Imagen relacionada con salud ósea',
    },
  ];

  protected formatDate(date: string): string {
    const months: Readonly<Record<string, string>> = {
      '08': 'Ago',
      '09': 'Sep',
      '10': 'Oct',
    };
    return `${date.slice(8, 10)} ${months[date.slice(5, 7)]} ${date.slice(0, 4)}`;
  }

  protected async copyArticleLink(): Promise<void> {
    if (!this.isBrowser) {
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      this.shareStatus.set('Enlace copiado');
    } catch {
      this.shareStatus.set('No fue posible copiar el enlace. Inténtalo nuevamente.');
    }
  }

  protected shareArticle(network: 'facebook' | 'whatsapp'): void {
    if (!this.isBrowser) {
      return;
    }

    const articleUrl = encodeURIComponent(window.location.href);
    const shareUrl =
      network === 'facebook'
        ? `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`
        : `https://wa.me/?text=${encodeURIComponent(`${document.title} ${window.location.href}`)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  }
}
