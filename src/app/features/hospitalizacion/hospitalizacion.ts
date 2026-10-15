import { Component } from '@angular/core';

interface CarePillar {
  title: string;
  description: string;
  icon: string;
}

interface TeamService {
  title: string;
  icon: string;
}

interface VisitSchedule {
  unit: string;
  times: string[];
}

interface HospitalSection {
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-hospitalizacion',
  standalone: true,
  templateUrl: './hospitalizacion.html',
})
export class Hospitalizacion {
  protected readonly phoneNumbers = [
    { label: '(511) 224-2224', href: 'tel:+51112242224' },
    { label: '(511) 224-2226', href: 'tel:+51112242226' },
  ];

  protected readonly carePillars: CarePillar[] = [
    {
      title: 'Atención humana',
      description: 'Cuidamos de ti como si fueras parte de nuestra familia.',
      icon: 'M12 21s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.5-8 11-8 11Z',
    },
    {
      title: 'Confort y privacidad',
      description: 'Modernización continua y mobiliario ergonómico.',
      icon: 'M3 7h18v13H3zM7 7V4h10v3M7 12h10',
    },
    {
      title: 'Eficiencia',
      description: 'Infraestructura moderna y atención especializada y de calidad.',
      icon: 'M4 19h16M6 16V8l6-4 6 4v8m-8 3v-6h4v6',
    },
  ];

  protected readonly teamServices: TeamService[] = [
    { title: 'Equipo médico', icon: 'M9 3h6v5H9zM5 21v-5a7 7 0 0 1 14 0v5M12 8v5m-3-2h6' },
    { title: 'Farmacia', icon: 'M4 8h16v12H4zM7 8V5h10v3m-8 5h6m-3-3v6' },
    { title: 'Fisioterapia', icon: 'M12 3v5m0 0-4 3m4-3 4 3m-8 2-2 8m10-8 2 8m-6-8v8' },
    { title: 'Nutrición', icon: 'M12 4v16m0-12c-5-4-8 0-7 4 1 3 4 3 7 1m0-5c5-4 8 0 7 4-1 3-4 3-7 1' },
    { title: 'Enfermería', icon: 'M12 3v5m-2.5-2.5h5M5 21v-4a7 7 0 0 1 14 0v4m-7-8v8' },
    { title: 'UCI', icon: 'M3 12h4l2-5 4 10 2-5h6' },
    { title: 'UCI Neonatal', icon: 'M12 4c-4 0-7 3-7 7v8h14v-8c0-4-3-7-7-7Zm-3 8h.01M15 12h.01M9 16c2 2 4 2 6 0' },
  ];

  protected readonly schedules: VisitSchedule[] = [
    {
      unit: 'UCI Adultos',
      times: ['Lun a Vie: 04:00 pm a 06:00 pm', 'Sáb y Dom: 04:00 pm a 06:00 pm'],
    },
    { unit: 'UCI Pediátrica', times: ['08:00 am a 06:00 pm'] },
    {
      unit: 'UCI Neonatal',
      times: ['08:00 am a 10:00 am', '04:00 pm a 06:00 pm', '08:00 pm a 09:00 pm'],
    },
  ];

  protected readonly staySections: HospitalSection[] = [
    {
      title: 'Nuestras habitaciones',
      image: 'wp-content/uploads/2026/09/DSC0145-600x338.jpg',
      imageAlt: 'Ambiente de atención hospitalaria equipado',
      paragraphs: [
        'Ofrecen un ambiente seguro y confortable, diseñado para brindarte las mejores condiciones durante tu estancia y en comunidad con el cuidado de tu salud.',
        'Contamos con servicios que contribuyen a tu bienestar integral.',
      ],
    },
    {
      title: 'Alimentación',
      image: 'wp-content/uploads/2026/09/20690-1-600x400.jpg',
      imageAlt: 'Atención y cuidado de una paciente durante su estancia',
      paragraphs: [
        'La alimentación es programada por el servicio de nutrición de la Clínica según la indicación médica. Una nutricionista te visitará, evaluará y elaborará las indicaciones de acuerdo con tus necesidades y estado de salud.',
        'Los alimentos se preparan con los más altos estándares de calidad e inocuidad.',
      ],
    },
  ];

  protected readonly visitingRestrictions: string[] = [
    'Las visitas de niños menores de 12 años no están permitidas.',
    'Está prohibido el ingreso de alimentos.',
    'Desinfecte sus manos antes y después de permanecer cerca del paciente.',
    'Evite las visitas si presenta síntomas respiratorios.',
    'Respete los horarios de visita y las indicaciones del personal de salud.',
    'Mantenga un ambiente tranquilo para favorecer el descanso del paciente.',
  ];
}
