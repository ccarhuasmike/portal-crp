import { Component, signal } from '@angular/core';

interface EmergencyService {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-emergencias-24-7',
  standalone: true,
  templateUrl: './emergencias-24-7.html',
})
export class Emergencias247 {
  protected readonly activeService = signal(0);

  protected readonly services: EmergencyService[] = [
    {
      title: 'Emergencia Adultos',
      description:
        'Atención integral a mayores de 16 años por especialistas en Traumatología, Cirugía General y Medicina Interna.',
      image: 'wp-content/uploads/2026/09/20690-1-600x400.jpg',
      imageAlt: 'Médico atendiendo a un paciente adulto',
    },
    {
      title: 'Emergencia Gineco-Obstétrica',
      description:
        'Equipo especializado para atender urgencias de mujeres embarazadas. Seguridad y acompañamiento en cada etapa.',
      image:
        'wp-content/uploads/2026/09/doctor-are-checking-pregnant-woman-with-stethoscope-hospital-healthcare-concept-600x401.jpg',
      imageAlt: 'Profesional de salud atendiendo a una paciente embarazada',
    },
    {
      title: 'Emergencia Pediátrica',
      description:
        'Infraestructura moderna con 8 tópicos equipados para atención 24/7 a nuestros pacientes más pequeños.',
      image: 'wp-content/uploads/2026/04/Hero-1.png',
      imageAlt: 'Familia con una niña',
    },
  ];

  protected readonly emergencyPhone = 'tel:+51112242224';

  selectService(index: number): void {
    this.activeService.set(index);
  }
}
