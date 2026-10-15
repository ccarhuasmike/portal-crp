import { Component } from '@angular/core';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Screening {
  name: string;
  included: [boolean, boolean, boolean, boolean, boolean];
}

interface ScreeningPlan {
  name: string;
  age: string;
}

interface Audience {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-chequeo-ginecologico-integral',
  standalone: true,
  templateUrl: './chequeo-ginecologico-integral.html',
})
export class ChequeoGinecologicoIntegral {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';
  protected expandedFaqIndex = -1;

  protected readonly plans: ScreeningPlan[] = [
    { name: 'Integral', age: 'Menores 40 años' },
    { name: 'Integral', age: '40 años a más' },
    { name: 'Esencial', age: 'Menores 40 años' },
    { name: 'Esencial', age: '40 años a más' },
    { name: 'Mayores', age: '65 años' },
  ];

  protected readonly benefits: Benefit[] = [
    {
      title: 'Evaluación integral de mamas',
      description: 'Detecta cambios tempranos, incluso antes de ser visibles.',
      icon: 'M4 12c4-7 12-7 16 0-4 7-12 7-16 0Zm8-3v6m-3-3h6',
    },
    {
      title: 'Detección oportuna en cuello uterino',
      description: 'Identifica lesiones a tiempo para un tratamiento adecuado.',
      icon: 'M8 3h8m-4 0v5m-4 0h8l2 12H6L8 8Zm0 5h8',
    },
    {
      title: 'Detección de VPH de alto riesgo',
      description: 'Identifica el VPH a tiempo para prevenir el cáncer cervicouterino.',
      icon: 'M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Zm-3 9 2 2 4-5',
    },
    {
      title: 'Descarte completo de ITS',
      description: 'Incluye VIH, clamidia, herpes, hepatitis B y más para un cuidado integral.',
      icon: 'M12 3v18m9-9H3m3.5-6.5 11 11m0-11-11 11',
    },
  ];

  protected readonly screenings: Screening[] = [
    {
      name: 'Consulta ginecológica',
      included: [true, true, true, true, true],
    },
    {
      name: 'Papanicolaou',
      included: [true, true, true, true, true],
    },
    {
      name: 'Ecografía transvaginal',
      included: [true, true, true, true, false],
    },
    {
      name: 'Ecografía bilateral de mamas',
      included: [true, false, true, false, false],
    },
    {
      name: 'Cultivo vaginal',
      included: [true, false, true, false, false],
    },
    {
      name: 'Descarte completo de ITS',
      included: [true, false, true, false, false],
    },
    {
      name: 'Mamografía',
      included: [false, true, false, true, true],
    },
    {
      name: 'Consulta de lectura de resultados',
      included: [true, true, true, true, true],
    },
    {
      name: 'Recomendaciones personalizadas',
      included: [true, true, true, true, true],
    },
  ];

  protected readonly cervicalScreenings = [
    'Test VPH (VPH de alto riesgo)',
    'Colposcopía',
    'Biopsia de cérvix',
  ];

  protected readonly audiences: Audience[] = [
    {
      title: 'Síntomas o controles pendientes',
      description: 'Flujo anormal, dolor pélvico leve, papanicolaou sin seguimiento o sospecha de ITS.',
      icon: 'M12 3v18m9-9H3',
    },
    {
      title: 'Antecedentes o riesgo ginecológico',
      description: 'Antecedentes familiares, VPH, quistes, miomas u otras condiciones ginecológicas previas.',
      icon: 'M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3Z',
    },
    {
      title: 'Cambios hormonales o etapas específicas',
      description: 'Perimenopausia, posmenopausia o evaluación por fertilidad.',
      icon: 'M4 12h4l3-8 4 16 3-8h2',
    },
    {
      title: 'Control preventivo anual',
      description: 'Mujeres sin síntomas que eligen cuidar su salud a tiempo.',
      icon: 'M8 3h8m-4 0v5m-4 0h8l2 12H6L8 8Zm0 5h8',
    },
  ];

  protected readonly faqs = [
    '¿Qué incluye un chequeo ginecológico completo?',
    '¿Qué incluye un control ginecológico completo?',
    '¿Qué significa ginecología integral?',
    '¿Qué incluye el paquete ginecológico completo?',
    '¿A qué edad se recomienda realizar un chequeo ginecológico?',
  ];

  protected toggleFaq(index: number): void {
    this.expandedFaqIndex = this.expandedFaqIndex === index ? -1 : index;
  }
}
