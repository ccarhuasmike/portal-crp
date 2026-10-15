import { Component } from '@angular/core';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

interface Package {
  name: string;
}

@Component({
  selector: 'app-chequeo-deportivo',
  standalone: true,
  templateUrl: './chequeo-deportivo.html',
})
export class ChequeoDeportivo {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';

  protected readonly benefits: Benefit[] = [
    {
      title: 'Detección de enfermedades cardiovasculares',
      description: 'Permite identificar a tiempo factores de riesgo y condiciones que requieren evaluación.',
      icon: 'M3 12h4l3-8 4 16 3-8h4',
    },
    {
      title: 'Prevención de riesgo de muerte súbita',
      description: 'Mediante la prueba de Electrocardiograma Doppler se evalúa la respuesta del corazón al ejercicio.',
      icon: 'M12 3v18m9-9H3',
    },
    {
      title: 'Identificación de debilidades musculares',
      description: 'Permite reconocer desequilibrios y debilidades en articulaciones, músculos y tendones.',
      icon: 'M4 17 17 4m-9 0h9v9M5 5l14 14',
    },
  ];

  protected readonly packages: Package[] = [
    { name: 'Esencial' },
    { name: 'Premium' },
    { name: 'Esencial Plus' },
    { name: 'Premium Plus' },
  ];

  protected readonly packageSections = [
    'Análisis de Laboratorio',
    'Evaluación Cardiológica',
    'Consulta de Cardiología',
    'Estudio Biomecánico de la marcha',
    'Consulta en Traumatología',
  ];

  protected readonly faqs = [
    '¿Qué exámenes incluye un chequeo deportivo?',
    '¿Cuáles son las pruebas de un control médico deportivo?',
    '¿Qué se evalúa en un examen médico deportivo?',
    '¿Cuáles son los test deportivos?',
    '¿Quién debería realizarse un chequeo deportivo?',
  ];

  protected readonly checklist = [
    'Identifica alteraciones cardíacas como el riesgo de arritmias.',
    'Optimiza la técnica al caminar y correr.',
    'Ayuda a prevenir lesiones musculares y articulares.',
  ];
}
