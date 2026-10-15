import { Component } from '@angular/core';

interface CoreValue {
  readonly name: string;
  readonly description: string;
  readonly icon: string;
  readonly iconAlt: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  templateUrl: './nosotros.html',
})
export class Nosotros {
  protected readonly values: readonly CoreValue[] = [
    {
      name: 'Ética',
      description:
        'Ser un modelo de conducta inspirado a los demás para sacar lo mejor de sí y cumplir con las normas.',
      icon: '/wp-content/uploads/2026/02/etica-de-negocios.svg',
      iconAlt: '',
    },
    {
      name: 'Confianza',
      description:
        'Inspirar y mantener la confianza a nuestros pacientes mediante la ejecución de las mejores prácticas hospitalarias.',
      icon: '/wp-content/uploads/2026/02/confianza-en-si-mismo.svg',
      iconAlt: '',
    },
    {
      name: 'Veracidad',
      description:
        'Proveer información transparente, clara y oportuna en todo momento y lugar.',
      icon: '/wp-content/uploads/2026/02/veracidad.svg',
      iconAlt: '',
    },
    {
      name: 'Seguridad',
      description:
        'Velar por la integridad de nuestros pacientes y colaboradores, ofreciendo espacios seguros.',
      icon: '/wp-content/uploads/2026/02/seguridad-en-el-trabajo.svg',
      iconAlt: '',
    },
  ];
}
