import { Component } from '@angular/core';

interface Advantage {
  title: string;
  description: string;
  icon: string;
}

interface Detail {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-vasectomia',
  standalone: true,
  templateUrl: './vasectomia.html',
})
export class Vasectomia {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';
  protected expandedFaqIndex = -1;

  protected readonly reasons: Detail[] = [
    {
      title: 'Experiencia especializada',
      description: 'Equipo de urología con amplia trayectoria en procedimientos ambulatorios seguros y efectivos.',
      icon: 'M12 3 3 7l9 4 9-4-9-4Zm-9 9 9 4 9-4M3 16l9 4 9-4',
    },
    {
      title: 'Atención personalizada',
      description: 'Te acompañamos desde la evaluación inicial hasta el seguimiento postoperatorio.',
      icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-1v6m-3-3h6',
    },
    {
      title: 'Tecnología de última generación',
      description: 'Equipamiento moderno que favorece precisión y una recuperación más rápida.',
      icon: 'M4 5h16v12H4zM8 21h8m-4-4v4m-4-9 3-3 3 3 3-4',
    },
  ];

  protected readonly packageIncludes = [
    'Exámenes de laboratorio',
    'Examen prequirúrgico',
    'Cirugía ambulatoria',
    'Honorarios médicos',
    'Monitoreo en sala de recuperación',
  ];

  protected readonly benefits: Advantage[] = [
    {
      title: 'Alta efectividad',
      description: 'Método anticonceptivo seguro y confiable a largo plazo.',
      icon: 'M4 17 10 11l4 4 6-8m-5 0h5v5',
    },
    {
      title: 'Procedimiento simple',
      description: 'Ambulatorio, de pocos minutos y vuelves a casa el mismo día.',
      icon: 'M7 3 3 7l14 14 4-4L7 3Zm-2 6 4-4m6 14 4-4',
    },
    {
      title: 'Sin cambios en tu vida sexual',
      description: 'No afecta tu deseo, erección ni producción hormonal.',
      icon: 'M7 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM7 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
    },
    {
      title: 'Recuperación rápida',
      description: 'Mínimas molestias y retorno rápido a tus actividades.',
      icon: 'M12 3v7m0 0 4-4m-4 4L8 6m-2 8a6 6 0 1 0 12 0m-12 0H3m15 0h3',
    },
  ];

  protected readonly faqs = [
    '¿La vasectomía duele?',
    '¿La vasectomía afecta el deseo sexual o la erección?',
    '¿Cuánto dura el procedimiento y cuándo puedo volver a mis actividades?',
    '¿Qué tan efectiva es la vasectomía como método anticonceptivo?',
    '¿La vasectomía es reversible?',
  ];

  protected toggleFaq(index: number): void {
    this.expandedFaqIndex = this.expandedFaqIndex === index ? -1 : index;
  }
}
