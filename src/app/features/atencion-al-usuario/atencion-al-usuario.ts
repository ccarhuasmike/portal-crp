import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface HelpTopic {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly href: string;
  readonly external?: boolean;
}

@Component({
  selector: 'app-atencion-al-usuario',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './atencion-al-usuario.html',
})
export class AtencionAlUsuario {
  protected readonly query = signal('');

  protected readonly topics: readonly HelpTopic[] = [
    {
      title: 'Portal del Paciente',
      description: 'Todo lo que necesitas saber sobre el portal del paciente.',
      icon: '/wp-content/uploads/2026/02/paciente.svg',
      href: 'https://portaldelpaciente.crp.com.pe/login',
      external: true,
    },
    {
      title: 'Resultados de laboratorio',
      description: 'Consulta tus resultados de laboratorio de manera segura y confiable.',
      icon: '/wp-content/uploads/2026/02/laboratorio.svg',
      href: 'https://www.westernlab.pe/?page_id=1336',
      external: true,
    },
    {
      title: 'Cirugía Robótica',
      description: 'Conoce más sobre esta tecnología al servicio de tu salud.',
      icon: '/wp-content/uploads/2026/02/brazo-robot.svg',
      href: '/servicios/cirugia-robotica/index.html',
    },
    {
      title: 'PlanSalud',
      description: 'Todo lo que necesitas saber sobre la cobertura, servicios y trámites de PlanSalud.',
      icon: '/wp-content/uploads/2026/02/seguro-de-salud.svg',
      href: '/plansalud/index.html',
    },
    {
      title: 'Departamento Internacional',
      description: 'Atención integral y de alta calidad en cada paso de tu visita a la clínica.',
      icon: '/wp-content/uploads/2026/02/apreton-de-manos.svg',
      href: '/servicios/departamento-internacional/index.html',
    },
    {
      title: 'Registro Médico',
      description: 'Solicita tu historial médico de forma segura y confiable.',
      icon: '/wp-content/uploads/2026/02/documento-medico.svg',
      href: 'https://registromedicos.crp.com.pe:2087/',
      external: true,
    },
    {
      title: 'Citas y programación',
      description: 'Resuelve tus dudas sobre cómo reservar, reprogramar o cancelar tus citas médicas.',
      icon: '/wp-content/uploads/2026/02/calendario-y-hora.svg',
      href: '/servicios/citas-medicas/index.html',
    },
    {
      title: 'Servicios y Especialidades',
      description: 'Información sobre servicios médicos y especialidades disponibles.',
      icon: '/wp-content/uploads/2026/02/especialidades.svg',
      href: '/especialidades/index.html',
    },
    {
      title: 'Seguros y facturación',
      description: 'Accede al portal del paciente para consultar tus pagos y trámites.',
      icon: '/wp-content/uploads/2026/02/seguro-medico.svg',
      href: 'https://portaldelpaciente.crp.com.pe/login',
      external: true,
    },
  ];

  protected readonly filteredTopics = computed(() => {
    const query = this.query().trim().toLocaleLowerCase('es');
    if (!query) {
      return this.topics;
    }

    return this.topics.filter((topic) =>
      `${topic.title} ${topic.description}`.toLocaleLowerCase('es').includes(query),
    );
  });

  protected setQuery(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.query.set(target.value);
    }
  }
}
