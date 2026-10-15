import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MaternityPackage {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-maternidad',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './maternidad.html',
})
export class Maternidad {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';

  protected readonly packages: MaternityPackage[] = [
    {
      name: 'Paquete Maternidad Pequeña',
      icon: 'M12 4v16m8-8H4',
    },
    {
      name: 'Paquete Maternidad Clásica',
      icon: 'M12 4v16m8-8H4',
    },
    {
      name: 'Paquete Maternidad Especial',
      icon: 'M12 4v16m8-8H4',
    },
    {
      name: 'Paquete Parto Humanizado',
      icon: 'M12 4v16m8-8H4',
    },
  ];

  protected readonly pregnancyStages = [
    'Antes del embarazo',
    'Durante el embarazo',
    'Parto',
    'Después del parto',
  ];

  protected readonly faqs = [
    '¿Qué incluyen los planes de maternidad en Clínica Ricardo Palma?',
    '¿Cómo funciona la cobertura con un seguro de maternidad en la clínica?',
    '¿Con cuánta anticipación se deben contratar los planes de maternidad?',
    '¿Qué diferencia el paquete de maternidad humanizado de las opciones tradicionales?',
    '¿Existen facilidades de pago para quienes no cuentan con un seguro de maternidad privado?',
  ];
}
