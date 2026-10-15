import { Component } from '@angular/core';

interface Reason {
  title: string;
  description: string;
  icon: string;
}

interface Testimonial {
  quote: string;
  name: string;
  specialty: string;
}

@Component({
  selector: 'app-citas-medicas',
  standalone: true,
  templateUrl: './citas-medicas.html',
})
export class CitasMedicas {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';

  protected readonly reasons: Reason[] = [
    {
      title: 'Amplia cartera de especialidades',
      description:
        'Desde medicina general y pediatría, hasta cardiología, ginecología, traumatología, dermatología y muchas más.',
      icon: 'M4 5h16v14H4zM8 9h8M8 13h5',
    },
    {
      title: 'Médicos especialistas de primer nivel',
      description:
        'Nuestros profesionales son seleccionados por su trayectoria, experiencia y calidad humana. Usted estará en las mejores manos.',
      icon: 'M12 3v18m9-9H3',
    },
    {
      title: 'Diagnóstico preciso y rápido',
      description:
        'Gracias a nuestra plataforma de Laboratorio Clínico y Patología y a modernos servicios de Imagenología, entre otros.',
      icon: 'M3 12h4l3-8 4 16 3-8h4',
    },
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'Fue una experiencia muy positiva, el equipo de cardiología fue profesional y atento. Los resultados han sido excelentes y recomiendo el servicio a todas mis amigas.',
      name: 'María José G.',
      specialty: 'Cardiología',
    },
    {
      quote:
        'Excelente atención del personal. El Dr. Hernández fue muy profesional y me explicó todo detalladamente. La calidad del servicio fue superior a lo esperado.',
      name: 'Carlos Andrés M.',
      specialty: 'Cirugía General',
    },
    {
      quote:
        'Las instalaciones están muy limpias y modernas. Me sentí muy segura y confiada durante todo el procedimiento. El ambiente es muy agradable.',
      name: 'Alejandra S.',
      specialty: 'Dermatología',
    },
    {
      quote:
        'Después del tratamiento me siento mucho mejor. Los resultados fueron visibles desde la primera semana. Definitivamente volvería a confiar en este equipo.',
      name: 'Roberto F.',
      specialty: 'Traumatología',
    },
  ];
}
