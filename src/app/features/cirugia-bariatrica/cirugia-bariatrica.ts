import { Component } from '@angular/core';

interface BenefitGroup {
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
}

@Component({
  selector: 'app-cirugia-bariatrica',
  standalone: true,
  templateUrl: './cirugia-bariatrica.html',
})
export class CirugiaBariatrica {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';

  protected readonly packages = [
    'Bypass Gástrico',
    'Manga Gástrica',
  ];

  protected readonly evaluationSteps = [
    'Cita con el cirujano bariátrico',
    'Evaluaciones clínicas',
    'Lectura de resultados',
    'Exámenes pre quirúrgicos',
  ];

  protected readonly benefitGroups: BenefitGroup[] = [
    {
      title: 'Beneficios Clínicos',
      image: '/wp-content/uploads/2026/09/20690-1-600x400.jpg',
      imageAlt: 'Atención de salud durante una consulta médica',
      points: [
        'Mejora del control de diabetes tipo 2.',
        'Reducción de colesterol e hipertensión.',
        'Menor riesgo de enfermedades cardiovasculares.',
      ],
    },
    {
      title: 'Beneficios Físicos',
      image: '/wp-content/uploads/2026/09/DSC0145-600x338.jpg',
      imageAlt: 'Equipamiento para procedimientos médicos',
      points: [
        'Pérdida de peso significativa y sostenida en el tiempo.',
        'Mayor movilidad y reducción del dolor articular.',
        'Incremento de energía y mejora en la calidad de vida.',
      ],
    },
    {
      title: 'Beneficios Emocionales',
      image: '/wp-content/uploads/2026/04/Hero-1.png',
      imageAlt: 'Familia compartiendo una actividad al aire libre',
      points: [
        'Aumento de la autoestima y seguridad personal.',
        'Mejoría en la calidad del sueño y bienestar mental.',
        'Mayor motivación para mantener hábitos saludables.',
      ],
    },
  ];

}
