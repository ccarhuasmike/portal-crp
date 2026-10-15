import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Specialist {
  name: string;
  initials: string;
}

@Component({
  selector: 'app-cirugia-cabeza-cuello',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cirugia-cabeza-cuello.html',
})
export class CirugiaCabezaCuello {
  protected readonly benefits = [
    'Diagnóstico especializado y planificación quirúrgica personalizada.',
    'Tratamiento de tumores benignos y malignos.',
    'Cirugía de tiroides y glándulas salivales.',
    'Manejo de lesiones de cavidad oral y laringe.',
    'Enfoque multidisciplinario en oncología de cabeza y cuello.',
    'Técnicas quirúrgicas avanzadas para una recuperación segura.',
  ];

  protected readonly specialists: Specialist[] = [
    { name: 'Iwaki Chavez, Roberto', initials: 'RC' },
    { name: 'Quiñones Palomino, Mary Carmen', initials: 'MQ' },
    { name: 'Salas Moscoso, Edgar Jesus', initials: 'ES' },
    { name: 'Sanchez E Ingunza, Pedro Pablo', initials: 'PS' },
  ];

  protected readonly media = [
    {
      src: '/wp-content/uploads/2026/09/20690-1-600x400.jpg',
      alt: 'Profesional de salud atendiendo a un paciente durante una consulta.',
    },
    {
      src: '/wp-content/uploads/2026/09/DSC0145-600x338.jpg',
      alt: 'Equipamiento de una sala quirúrgica.',
    },
  ];
}
