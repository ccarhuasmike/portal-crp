import { Component } from '@angular/core';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Program {
  title: string;
  description: string;
  icon: string;
}

interface NutritionService {
  name: string;
  description: string;
  monthly: string;
  quarterly: string;
  semiannual: string;
}

@Component({
  selector: 'app-programa-nutricion-integral',
  standalone: true,
  templateUrl: './programa-nutricion-integral.html',
})
export class ProgramaNutricionIntegral {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';
  protected expandedFaqIndex = -1;

  protected readonly benefits: Benefit[] = [
    {
      title: 'Baja de peso saludable y sostenible',
      description: 'Reduce peso de forma progresiva, sin dietas extremas ni efecto rebote.',
      icon: 'M12 3v18m-6-4 6 4 6-4M5 8c2-2 4-2 7 0s5 2 7 0',
    },
    {
      title: 'Mejora de composición corporal',
      description: 'Pierde grasa y conserva masa muscular mediante un plan personalizado.',
      icon: 'M4 19V5m0 14h16M7 15l4-5 3 2 5-7',
    },
    {
      title: 'Resultados medibles y controlados',
      description: 'Monitorea tu progreso con exámenes de laboratorio incluidos.',
      icon: 'M5 3h14v18H5zM8 8h8m-8 4h8m-8 4h5',
    },
    {
      title: 'Prevención y enfoque personalizado',
      description: 'Previene enfermedades asociadas al sobrepeso con programas adaptados a cada etapa de vida.',
      icon: 'M12 21s-8-4.5-8-11a4 4 0 0 1 8-2 4 4 0 0 1 8 2c0 6.5-8 11-8 11Z',
    },
  ];

  protected readonly services: NutritionService[] = [
    {
      name: 'Análisis de laboratorio',
      description: 'Hemograma, glucosa basal, perfil lipídico completo',
      monthly: '(1) evaluación',
      quarterly: '(2) evaluaciones',
      semiannual: '(3) evaluaciones',
    },
    {
      name: 'Consulta de nutrición',
      description: 'Evaluación y plan personalizado',
      monthly: '(1) consulta',
      quarterly: '(4) consultas',
      semiannual: '(7) consultas',
    },
    {
      name: 'Bioimpedancia',
      description: 'Medición de composición corporal',
      monthly: '(1) procedimiento',
      quarterly: '(4) procedimientos',
      semiannual: '(7) procedimientos',
    },
  ];

  protected readonly programs: Program[] = [
    {
      title: 'Gestantes',
      description: 'Acompañamiento nutricional para una gestación saludable y el bienestar del bebé.',
      icon: 'M12 21s-7-4-7-10a7 7 0 0 1 14 0c0 6-7 10-7 10Zm0-13v7m-3-3h6',
    },
    {
      title: 'Postparto y alimentación complementaria del bebé',
      description: 'Recuperación progresiva y guía en la alimentación del bebé en sus primeros meses.',
      icon: 'M12 21s-7-4-7-10a7 7 0 0 1 14 0c0 6-7 10-7 10Zm-3-9h6m-3-3v6',
    },
    {
      title: 'Pre y postquirúrgico',
      description: 'Optimiza la recuperación, peso y masa muscular, favoreciendo la cicatrización y reducir el riesgo de complicaciones.',
      icon: 'M12 3v18m9-9H3m3.5-6.5 11 11m0-11-11 11',
    },
    {
      title: 'Adulto mayor',
      description: 'Nutrición enfocada en mantener la salud y energía, apoyar el manejo de enfermedades crónicas y reducir el riesgo de infecciones y caídas.',
      icon: 'M12 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v8m0-4-5 4m5-4 5 4m-5 0-4 8m4-8 4 8',
    },
  ];

  protected readonly faqs = [
    '¿Qué incluye un programa de nutrición integral?',
    '¿Para quién está recomendado un programa de nutrición?',
    '¿Cuánto tiempo dura un programa de nutrición?',
    '¿Qué beneficios tiene un programa de nutrición?',
    '¿Qué diferencia hay entre una consulta nutricional y un programa de nutrición?',
  ];

  protected toggleFaq(index: number): void {
    this.expandedFaqIndex = this.expandedFaqIndex === index ? -1 : index;
  }
}
