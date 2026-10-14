import { Component, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CrpSlider } from '../../shared/crp-slider/crp-slider';
import { CookieConsentService } from '../../shared/services/cookie-consent.service';

interface NavChild {
  label: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
}

interface HeroSlide {
  heading: string;
  headingHtml: string;
  image: string;
  alt: string;
  priority: boolean;
}

interface ServiceCard {
  icon: string;
  title: string;
  href: string;
  external?: boolean;
}

interface NewsCard {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

/**
 * Home page: progressive Angular 20 (standalone) migration of the legacy
 * WordPress-rendered homepage at www.crp.com.pe/index.html.
 *
 * Scope notes (Stage 1 of the progressive migration):
 * - Faithfully reproduces markup/classes/text for all sections that are
 *   purely front-end (header, hero, service highlights, news, PlanSalud
 *   promo, testimonials, footer).
 * - Reimplements self-contained interactions natively in Angular (desktop/
 *   mobile navigation, language-toggle UI, GDPR cookie banner, survey-form
 *   validation + conditional field + localStorage "already answered" flag).
 * - Intentionally stubs third-party/back-end-tied widgets that cannot be
 *   faithfully reproduced from a static HTML mirror: the "onetap"
 *   accessibility panel (requires the plugin's nonce + admin-ajax.php
 *   backend), the real Google Translate engine (requires Google's external
 *   script), the Cloudflare Turnstile captcha (site-key bound, requires
 *   Cloudflare's script), and the AttachForm REST submission endpoint
 *   (the mirrored value `wp-json/index.html` is corrupted by the HTTrack
 *   mirroring tool and the real path cannot be recovered from this file).
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, CrpSlider],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly fb = inject(FormBuilder);
  protected readonly cookieConsent = inject(CookieConsentService);

  // ---- Header / navigation state -----------------------------------
  protected readonly activeLang = signal<'es' | 'en'>('es');
  protected readonly mobileNavOpen = signal(false);
  protected readonly openSubmenuIndex = signal<number | null>(null);

  protected readonly navItems: NavItem[] = [
    {
      label: 'PlanSalud',
      href: 'plansalud/index.html',
      children: [
        { label: 'Beneficios', href: 'plansalud/index.html#beneficios_plan_salud' },
        { label: 'Cotizar', href: 'plansalud/index.html#cotizador_formulario' },
        { label: 'Anexos', href: 'plansalud/index.html#anexos_plan_salud' },
      ],
    },
    {
      label: 'Servicios',
      href: '#',
      children: [
        { label: 'Cirugía Robótica', href: 'servicios/cirugia-robotica/index.html' },
        { label: 'Citas Médicas', href: 'servicios/citas-medicas/index.html' },
        { label: 'Departamento Internacional', href: 'servicios/departamento-internacional/index.html' },
        { label: 'Emergencias 24/7', href: 'servicios/emergencias-24-7/index.html' },
        { label: 'Hospitalización', href: 'servicios/hospitalizacion/index.html' },
        { label: 'Medicina Estética', href: 'https://medicinaestetica.crp.com.pe/', external: true },
      ],
    },
    {
      label: 'Especialidades',
      href: 'especialidades/index.html',
      children: [
        { label: 'Especialidades', href: 'especialidades/index.html' },
        { label: 'Unidades Especializadas', href: 'unidades-especializadas/index.html' },
        { label: 'Plantel Médico', href: 'medicos/index.html' },
      ],
    },
    {
      label: 'Productos',
      href: '#',
      children: [
        { label: 'Maternidad', href: 'productos/maternidad/index.html' },
        { label: 'Chequeo Deportivo', href: 'productos/chequeo-deportivo/index.html' },
        { label: 'Cirugía Bariátrica', href: 'productos/cirugia-bariatrica/index.html' },
        { label: 'Cirugía de Varices', href: 'productos/cirugia-vascular/index.html' },
        { label: 'Programa de Nutrición', href: 'productos/programa-de-nutricion-integral/index.html' },
        { label: 'Chequeo Ginecológico', href: 'productos/chequeo-ginecologico-integral/index.html' },
        { label: 'Vasectomía', href: 'productos/vasectomia/index.html' },
      ],
    },
    {
      label: 'Para empresas',
      href: 'para-empresas/index.html',
      children: [
        { label: 'Contactarme', href: 'para-empresas/index.html#contactarme-empresas' },
        { label: 'Planes Corporativos', href: 'para-empresas/index.html#planes-para-empresas' },
      ],
    },
  ];

  // ---- Hero slider ----------------------------------------------------
  protected readonly heroSlides: HeroSlide[] = [
    {
      heading: 'Toda una vida contigo.',
      headingHtml: 'Toda una <br>vida <em>contigo.</em>',
      image: 'wp-content/uploads/2026/04/Hero-1.png',
      alt: 'Toda una vida contigo',
      priority: true,
    },
    {
      heading: 'Somos la Primera Clínica Privada del país en realizar Cirugías Robóticas Pediátricas.',
      headingHtml:
        'Somos la Primera Clínica Privada del país en realizar <em>Cirugías Robóticas Pediátricas.</em>',
      image: 'wp-content/uploads/2026/06/Hero-Davinci.png',
      alt: 'Somos la Primera Clínica Privada del país en realizar Cirugías Robóticas Pediátricas.',
      priority: false,
    },
  ];

  // ---- Service highlight cards -----------------------------------------
  protected readonly serviceCards: ServiceCard[] = [
    {
      icon: 'wp-content/uploads/2026/02/seguro-de-salud.svg',
      title: 'Atención al Paciente',
      href: 'atencion-al-usuario/index.html',
    },
    {
      icon: 'wp-content/uploads/2026/02/paciente.svg',
      title: 'Portal del Paciente',
      href: 'https://portaldelpaciente.crp.com.pe/login',
      external: true,
    },
    {
      icon: 'wp-content/uploads/2026/02/cuidado-de-la-salud.svg',
      title: 'Paquetes de Salud',
      href: 'productos/maternidad/index.html',
    },
  ];

  // ---- Medical staff search (UI only; see class-level note) -----------
  protected readonly staffSearchQuery = signal('');
  protected readonly staffSearchResults = signal<{ name: string; specialty: string }[]>([]);

  // ---- News slider ------------------------------------------------------
  protected readonly newsCards: NewsCard[] = [
    {
      category: 'Cardiología',
      date: '23 Sep 2026',
      title: '¿Cómo prevenir la hipertensión arterial antes que dañe sus órganos?',
      excerpt:
        '¿Cómo prevenir la hipertensión arterial antes que dañe sus órganos? 4 claves para comprender la hipertensión arterial. La detección oportuna, el diagnóstico y la prevención…',
      image: 'wp-content/uploads/2026/09/20690-1-600x400.jpg',
      href: 'blog/cardiologia/como-prevenir-la-hipertension-arterial-antes-que-dane-sus-organos/index.html',
    },
    {
      category: 'Embarazo y Maternidad',
      date: '22 Sep 2026',
      title: 'Preeclampsia: ¿Qué es, síntomas, causas y tratamiento?',
      excerpt:
        'Preeclampsia: ¿Qué es, síntomas, causas y tratamiento? La preeclampsia puede aparecer después de la semana 20 de embarazo y avanzar sin molestias evidentes. Saber qué…',
      image:
        'wp-content/uploads/2026/09/doctor-are-checking-pregnant-woman-with-stethoscope-hospital-healthcare-concept-600x401.jpg',
      href: 'blog/embarazo-maternidad/preeclampsia-que-es-sintomas-causas-y-tratamiento/index.html',
    },
    {
      category: 'Cirugía Robótica',
      date: '21 Sep 2026',
      title:
        'Nuevo hito en la cirugía robótica en el Perú: un moderno tratamiento para las pacientes con patologías mamarias',
      excerpt:
        'La Clínica Ricardo Palma realizó las primeras cirugías robóticas de mama en el país en colaboración con el Hospital Universitario Fundación Jiménez Díaz – Grupo…',
      image: 'wp-content/uploads/2026/09/DSC0145-600x338.jpg',
      href:
        'blog/cirugia-robotica/nuevo-hito-en-la-cirugia-robotica-en-el-peru-un-moderno-tratamiento-para-las-pacientes-con-patologias-mamarias/index.html',
    },
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

  // ---- Survey modal (AttachForm "f_21-ayudanos-a-conocerte-mejor") -----
  private static readonly SURVEY_DONE_KEY = 'crp_encuesta_completada';

  protected readonly surveyModalOpen = signal(false);
  protected readonly surveySubmitted = signal(false);
  protected readonly surveyAlreadyCompleted = signal(this.readSurveyCompleted());

  protected readonly interesadoOptions = ['Para mí', 'Para mi hijo/a', 'Para mis padres', 'Para otro familiar o amigo'];
  protected readonly motivoOptions = [
    'Agendar una cita con un médico',
    'Agendar una cita por especialidad',
    'Cotizar PlanSalud',
    'Buscar información sobre exámenes o procedimientos',
    'Conocer sobre productos o servicios de la clínica',
    'Otro',
  ];
  protected readonly edadOptions = ['18 a 29 años', '30 a 44 años', '45 a 59 años', '60 años a más'];

  protected readonly surveyForm = this.fb.nonNullable.group({
    interesado: ['', Validators.required],
    motivo: ['', Validators.required],
    motivoOtro: [''],
    edad: ['', Validators.required],
  });

  private readonly motivoSub = this.surveyForm.controls.motivo.valueChanges.subscribe((motivo) => {
    const motivoOtroControl = this.surveyForm.controls.motivoOtro;
    if (motivo === 'Otro') {
      motivoOtroControl.setValidators(Validators.required);
    } else {
      motivoOtroControl.clearValidators();
      motivoOtroControl.setValue('');
    }
    motivoOtroControl.updateValueAndValidity({ emitEvent: false });
  });

  get showMotivoOtro(): boolean {
    return this.surveyForm.controls.motivo.value === 'Otro';
  }

  openSurveyModal(): void {
    this.surveyModalOpen.set(true);
  }

  closeSurveyModal(): void {
    this.surveyModalOpen.set(false);
  }

  submitSurvey(): void {
    if (this.surveyForm.invalid) {
      this.surveyForm.markAllAsTouched();
      return;
    }
    // NOTE: The original AttachForm plugin submits to a WordPress REST route
    // (`AttachForm.RestURL`). In the mirrored source that value is corrupted
    // to `wp-json/index.html` by the HTTrack mirroring tool, so the real
    // endpoint cannot be recovered here. Submission is intentionally left as
    // a documented blocker; only the client-side validation/conditional
    // logic and the "already answered" tracking are reproduced.
    this.surveySubmitted.set(true);
    this.persistSurveyCompleted();
  }

  // ---- Header interactions -------------------------------------------
  toggleLang(lang: 'es' | 'en'): void {
    // Visual-only toggle: the real translation requires Google's external
    // Google Translate widget script, not available in this migration.
    this.activeLang.set(lang);
  }

  toggleMobileNav(): void {
    this.mobileNavOpen.update((open) => !open);
  }

  closeMobileNav(): void {
    this.mobileNavOpen.set(false);
  }

  toggleSubmenu(index: number): void {
    this.openSubmenuIndex.update((current) => (current === index ? null : index));
  }

  openSubmenuOnHover(index: number): void {
    this.openSubmenuIndex.set(index);
  }

  closeSubmenuOnLeave(): void {
    this.openSubmenuIndex.set(null);
  }

  // ---- Medical staff search (stub; see class-level note) ---------------
  onStaffSearchInput(value: string): void {
    this.staffSearchQuery.set(value);
    // No real data source was found for this widget in the static mirror
    // (crp-core's medical-staff-search plugin resolves results through its
    // own backend). Kept as a documented UI-only stub with no results.
    this.staffSearchResults.set([]);
  }

  // ---- Cookie consent --------------------------------------------------
  acceptCookies(): void {
    this.cookieConsent.accept();
  }

  rejectCookies(): void {
    this.cookieConsent.reject();
  }

  private readSurveyCompleted(): boolean {
    if (!this.isBrowser) {
      return false;
    }
    return localStorage.getItem(Home.SURVEY_DONE_KEY) === '1';
  }

  private persistSurveyCompleted(): void {
    this.surveyAlreadyCompleted.set(true);
    if (this.isBrowser) {
      localStorage.setItem(Home.SURVEY_DONE_KEY, '1');
    }
  }

  ngOnDestroy(): void {
    this.motivoSub.unsubscribe();
  }
}
