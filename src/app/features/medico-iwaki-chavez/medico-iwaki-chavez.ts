import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface EducationItem {
  label: string;
  qualification: string;
  institution: string;
}

@Component({
  selector: 'app-medico-iwaki-chavez',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medico-iwaki-chavez.html',
})
export class MedicoIwakiChavez {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';

  protected readonly education: EducationItem[] = [
    {
      label: 'Profesión',
      qualification: 'Médico Cirujano',
      institution: 'Universidad Peruana Cayetano Heredia',
    },
    {
      label: 'Especialidad',
      qualification: 'Cirugía de Cabeza y Cuello',
      institution: 'Universidad Nacional Mayor de San Marcos',
    },
    {
      label: 'Maestría',
      qualification: 'Anatomía Quirúrgica de Cabeza y Cuello',
      institution: 'Universidad Nacional Mayor de San Marcos',
    },
  ];

  protected readonly appointmentSteps = [
    'Solicita tu cita en cualquier momento.',
    'Elige la especialidad o el médico que necesites.',
    'Consulta tu historial de atenciones.',
    'Recibe tus resultados y recetas en línea.',
  ];
}
