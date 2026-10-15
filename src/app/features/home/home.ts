import { Component, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  external?: boolean;
}

interface NewsCard {
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

interface PlanBenefit {
  text: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * CRP homepage (redesign): standalone, Tailwind-based implementation that
 * reproduces the composition/content supplied in the reference design
 * (hero + PlanSalud promo, maternity banner, "Encuentra a tu médico"
 * search, news highlights, PlanSalud benefits, testimonials, feedback CTA,
 * app-download section). Header/footer/cookie banner live in the shared
 * `MainLayoutComponent` shell, not in this page.
 *
 * Scope notes:
 * - All copy/links below were verified against the real CRP site markup
 *   (see navigation, PlanSalud, maternity, medical-staff-search, footer
 *   sections) except the 3 "news" items and the hero's "PlanSalud 50%
 *   dscto por 9 meses" promo, whose exact wording only exists in the
 *   reference design supplied for this task (the static HTML mirror used
 *   elsewhere in this migration has different/older news items and no
 *   such promo). Their "Leer más"/"Ver todo" links point at the real
 *   `blog/index.html` route rather than an invented article slug.
 * - "Encuentra a tu médico" is kept as a UI-only search stub, consistent
 *   with the rest of the migration: the real widget resolves results
 *   through crp-core's own backend, not reproducible offline.
 * - "Deja tu felicitación" opens a minimal Reactive Form modal. The
 *   original testimonial-submission modal is injected by a WordPress
 *   plugin at runtime and its exact fields/endpoint could not be recovered
 *   from the static mirror, so only generic name/message fields and local
 *   "already sent" tracking are implemented (same documented blocker as
 *   the PlanSalud survey elsewhere in this project).
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.html',
})
export class Home {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly fb = inject(FormBuilder);

  // ---- Medical staff search (UI only; see class-level note) -----------
  protected readonly staffSearchQuery = signal('');

  onStaffSearchInput(value: string): void {
    this.staffSearchQuery.set(value);
  }

  // ---- "Portal del paciente" / highlight cards -------------------------
  protected readonly serviceCards: ServiceCard[] = [
    {
      icon: 'wp-content/uploads/2026/02/paciente.svg',
      title: 'Portal del Paciente',
      description: 'Accede en línea a tus resultados de laboratorio, consultas, citas y pagos.',
      cta: 'Agendar cita →',
      href: 'https://portaldelpaciente.crp.com.pe/login',
      external: true,
    },
    {
      icon: 'wp-content/uploads/2026/02/cuidado-de-la-salud.svg',
      title: 'Paquetes de Salud',
      description: 'Descubre planes diseñados para cuidar de ti y de los que más quieres.',
      cta: 'Conoce más →',
      href: 'productos/maternidad/index.html',
    },
    {
      icon: 'wp-content/uploads/2026/02/seguro-de-salud.svg',
      title: 'Atención al Paciente',
      description: 'Te ayudamos con tus consultas y cómo acceder a tus resultados de laboratorio.',
      cta: 'Más información →',
      href: 'atencion-al-usuario/index.html',
    },
  ];

  // ---- News highlights --------------------------------------------------
  protected readonly newsCards: NewsCard[] = [
    {
      category: 'Gastroenterología',
      date: '09 Oct 2026',
      title: 'Colonoscopia: cuándo se recomienda y qué esperar del examen',
      excerpt:
        'La colonoscopia permite examinar el colon y el recto para identificar diferentes alteraciones. La preparación, el desarrollo del procedimiento y la duración suelen generar dudas…',
    },
    {
      category: 'Ginecología',
      date: '09 Oct 2026',
      title: 'Vaginosis bacteriana: qué es, síntomas, causas y tratamiento',
      excerpt:
        'Los cambios en el flujo vaginal, el olor, la picazón o el ardor pueden tener distintas causas, entre ellas la vaginosis bacteriana. Reconocer sus principales…',
    },
    {
      category: 'Dermatología',
      date: '06 Oct 2026',
      title: 'Dermatitis seborreica: qué es, síntomas, causas y tratamiento',
      excerpt:
        'La dermatitis seborreica puede manifestarse de distintas formas y afectar principalmente el cuero cabelludo y el rostro. Reconocer sus síntomas, identificar los factores que puede…',
    },
  ];

  // ---- PlanSalud benefits -----------------------------------------------
  protected readonly planBenefits: PlanBenefit[] = [
    { text: 'Cobertura completa para toda tu familia' },
    { text: 'Más de 400 médicos especializados' },
    { text: 'Atención preferencial y sin esperas' },
    { text: 'Descuentos en exámenes y procedimientos' },
    { text: 'Telemedicina 24/7' },
  ];

  // ---- Testimonials -------------------------------------------------
  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'Fue una experiencia muy positiva, el equipo de cardiología fue profesional y atento. Los resultados han sido excelentes y recomiendo el servicio a todas mis amigas.',
      name: 'María José G.',
      role: 'Paciente',
    },
    {
      quote:
        'Excelente atención del personal. El Dr. Hernández fue muy profesional y me explicó todo detalladamente. La calidad del servicio fue superior a lo esperado.',
      name: 'Carlos Andrés M.',
      role: 'Paciente',
    },
    {
      quote:
        'Las instalaciones están muy limpias y modernas. Me sentí muy segura y confiada durante todo el procedimiento. El ambiente es muy agradable.',
      name: 'Alejandra S.',
      role: 'Paciente',
    },
    {
      quote:
        'Después del tratamiento me siento mucho mejor. Los resultados fueron visibles desde la primera semana. Definitivamente volvería a confiar en este equipo.',
      name: 'Roberto F.',
      role: 'Paciente',
    },
  ];

  // ---- "Deja tu felicitación" modal (see class-level note) --------------
  private static readonly FEEDBACK_DONE_KEY = 'crp_felicitacion_enviada';

  protected readonly feedbackModalOpen = signal(false);
  protected readonly feedbackSubmitted = signal(false);
  protected readonly feedbackAlreadySent = signal(this.readFeedbackSent());

  protected readonly feedbackForm = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    mensaje: ['', Validators.required],
  });

  openFeedbackModal(): void {
    this.feedbackModalOpen.set(true);
  }

  closeFeedbackModal(): void {
    this.feedbackModalOpen.set(false);
  }

  submitFeedback(): void {
    if (this.feedbackForm.invalid) {
      this.feedbackForm.markAllAsTouched();
      return;
    }
    // NOTE: the original "Libro de Felicitaciones" modal/endpoint is
    // injected by a WordPress plugin at runtime and could not be recovered
    // from the static mirror (see class-level doc comment). Only the
    // client-side validation and "already sent" tracking are reproduced.
    this.feedbackSubmitted.set(true);
    this.feedbackAlreadySent.set(true);
    if (this.isBrowser) {
      localStorage.setItem(Home.FEEDBACK_DONE_KEY, '1');
    }
  }

  private readFeedbackSent(): boolean {
    if (!this.isBrowser) {
      return false;
    }
    return localStorage.getItem(Home.FEEDBACK_DONE_KEY) === '1';
  }
}
