import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unidad-cuidados-intensivos-pediatrica',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './unidad-cuidados-intensivos-pediatrica.html',
})
export class UnidadCuidadosIntensivosPediatrica {
  protected readonly benefits = [
    'Monitoreo continuo las 24 horas.',
    'Protocolos de seguridad y calidad en el cuidado pediátrico.',
    'Equipo multidisciplinario altamente capacitado.',
    'Acompañamiento y orientación permanente a la familia.',
    'Tecnología de última generación.',
  ];

  protected readonly specialist = {
    name: 'Acosta Galli, Maria Ysabel',
    initials: 'MA',
  };
}
