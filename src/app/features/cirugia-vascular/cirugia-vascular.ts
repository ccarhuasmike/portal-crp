import { Component } from '@angular/core';

interface Symptom {
  label: string;
  icon: string;
}

interface Treatment {
  title: string;
  points: string[];
}

@Component({
  selector: 'app-cirugia-vascular',
  standalone: true,
  templateUrl: './cirugia-vascular.html',
})
export class CirugiaVascular {
  protected readonly appointmentUrl = 'https://portaldelpaciente.crp.com.pe/login';

  protected readonly causes = [
    'Debilitamiento de las válvulas venosas',
    'Genética y antecedentes familiares',
    'Permanecer mucho tiempo sentado o de pie',
    'Embarazo, edad o sobrepeso',
  ];

  protected readonly riskFactors = [
    'Envejecimiento debilita las válvulas venosas',
    'Las mujeres son más propensas por cambios hormonales',
    'El exceso de peso aumenta la presión en las venas',
    'Permanecer mucho tiempo de pie o sentado',
  ];

  protected readonly symptoms: Symptom[] = [
    { label: 'Dolor y pesadez', icon: 'M8 3v7m8-7v7M6 12h12l-2 9H8l-2-9Zm6-9v7' },
    { label: 'Venas prominentes', icon: 'M7 3c5 3-2 5 3 8s-3 5 3 10m4-18c-5 3 2 5-3 8s3 5-3 10' },
    { label: 'Fatiga por estar parado', icon: 'M7 3v8l-2 4v6h5v-5l2-3 2 3v5h5v-6l-2-4V3m-8 8h8' },
    { label: 'Cambios en la piel y úlceras', icon: 'M12 3v4m0 10v4m9-9h-4M7 12H3m15.36-6.36-2.83 2.83M8.47 15.53l-2.83 2.83m12.72 0-2.83-2.83M8.47 8.47 5.64 5.64' },
    { label: 'Calambres y hormigueos', icon: 'M12 3v3m0 12v3m9-9h-3M6 12H3m15.36-6.36-2.12 2.12M7.76 16.24l-2.12 2.12m12.72 0-2.12-2.12M7.76 7.76 5.64 5.64' },
  ];

  protected readonly treatments: Treatment[] = [
    {
      title: 'Cirugía convencional',
      points: [
        'Técnica segura y ampliamente utilizada.',
        'Indicada para várices de mayor tamaño.',
        'Incisiones pequeñas y resultados efectivos.',
      ],
    },
    {
      title: 'Cirugía con láser',
      points: [
        'Usa radiofrecuencia o láser para cerrar las venas.',
        'Menos invasiva que la cirugía convencional.',
        'Indicada para muchos casos de várices, previa evaluación.',
      ],
    },
  ];

  protected readonly packageIncludes = [
    'Exámenes de laboratorio',
    'Monitoreo en prequirúrgico',
    'Sala de recuperación',
    'Cirugía ambulatoria',
    'Honorarios médicos',
    'Si el médico solicita un Eco-Doppler, se cobrará el 50% de la tarifa',
    'Incluye ambas piernas',
  ];
}
