import { Component } from '@angular/core';

interface Advantage {
  title: string;
  icon: string;
}

interface Specialty {
  title: string;
  image?: string;
  imageAlt?: string;
}

interface FAQ {
  question: string;
}

@Component({
  selector: 'app-cirugia-robotica',
  standalone: true,
  templateUrl: './cirugia-robotica.html',
})
export class CirugiaRobotica {
  protected readonly advantages: Advantage[] = [
    { title: 'Precisión superior a la mano humana', icon: 'M12 3v18m9-9H3' },
    { title: 'Visión 3D en alta definición', icon: 'M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z' },
    { title: 'Incisiones mínimas, resultados máximos', icon: 'M12 2v20M2 12h20' },
    { title: 'Seguridad en cada paso', icon: 'm12 3 8 4v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V7l8-4Z' },
    { title: 'Vuelve a tu vida en la mitad del tiempo', icon: 'M12 8v4l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' },
  ];

  protected readonly specialties: Specialty[] = [
    {
      title: 'Cirugía General',
      image: 'wp-content/uploads/2026/09/DSC0145-600x338.jpg',
      imageAlt: 'Sala de cirugía con sistema robótico',
    },
    {
      title: 'Urología',
    },
    {
      title: 'Ginecología',
    },
    {
      title: 'Cirugía Torácica',
      image: 'wp-content/uploads/2026/06/Hero-Davinci.png',
      imageAlt: 'Cirujano junto a un sistema Da Vinci',
    },
  ];

  protected readonly faqs: FAQ[] = [
    { question: 'Descarga nuestra App' },
    { question: '¿Cómo puedo agendar una consulta de urología en Clínica Ricardo Palma?' },
    { question: '¿A qué edad se recomienda realizar un chequeo de próstata?' },
    { question: '¿La urología también atiende a las mujeres?' },
    { question: '¿Cuándo debo acudir a una consulta de urología?' },
  ];
}
