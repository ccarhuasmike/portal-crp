import { Component, signal } from '@angular/core';

interface Benefit {
  title: string;
  items: string[];
}

interface FacilityImage {
  src: string;
  alt: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

@Component({
  selector: 'app-departamento-internacional',
  standalone: true,
  templateUrl: './departamento-internacional.html',
})
export class DepartamentoInternacional {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';
  protected readonly activeFacility = signal(0);

  protected readonly partners = ['ASSIST CARD', 'ANDES NIPPON', 'VUMI', 'Henner', 'BIC'];

  protected readonly benefits: Benefit[] = [
    {
      title: 'Atención personalizada 24/7',
      items: [
        'Gestión de citas',
        'Gestión de cartas de garantía en varios idiomas',
        'Envío de resultados e informes médicos',
      ],
    },
    {
      title: 'Flexibilidad',
      items: [
        'Direct billing y cartas de garantía',
        'Urgencias y emergencias las 24 horas',
        'Contacto directo con el Departamento Internacional las 24 horas',
        'Telemedicina o visita médica a domicilio',
        'Chequeos médicos personalizados',
      ],
    },
    {
      title: 'Atención a pacientes extranjeros',
      items: [
        'Acompañamiento',
        'Traducción de los reportes médicos al inglés',
        'Servicio de interpretación presencial y a través del call center',
      ],
    },
  ];

  protected readonly facilityImages: FacilityImage[] = [
    {
      src: 'wp-content/uploads/2026/09/DSC0145-600x338.jpg',
      alt: 'Sala de operaciones de la Clínica Ricardo Palma',
    },
    {
      src: 'wp-content/uploads/2026/09/doctor-are-checking-pregnant-woman-with-stethoscope-hospital-healthcare-concept-600x401.jpg',
      alt: 'Atención médica especializada en consultorio',
    },
    {
      src: 'wp-content/uploads/2026/09/20690-1-600x400.jpg',
      alt: 'Profesional de salud atendiendo a una paciente',
    },
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'Tienen buena atención, cuentan con estacionamiento y rampas en la entrada para personas con discapacidad, también con ascensores en cada torre.',
      name: 'Pedro V.',
      role: 'Paciente',
    },
    {
      quote:
        'En la atención de emergencia la atención es muy rápida y el personal de enfermería muy amable.',
      name: 'Noelia R.',
      role: 'Paciente',
    },
    {
      quote:
        'Mi niña fue atendida en pediatría y quedé muy agradecida con el trato cordial y profesional.',
      name: 'Daniel P.',
      role: 'Paciente',
    },
    {
      quote:
        'Tienen buena atención, cuentan con estacionamiento y rampas en la entrada para personas con discapacidad, también con ascensores en cada torre.',
      name: 'Pedro V.',
      role: 'Paciente',
    },
  ];

  selectFacility(index: number): void {
    this.activeFacility.set(index);
  }
}
