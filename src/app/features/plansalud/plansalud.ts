import { Component } from '@angular/core';

interface Benefit {
  title: string;
  icon: string;
}

interface FAQ {
  question: string;
}

@Component({
  selector: 'app-plansalud',
  standalone: true,
  templateUrl: './plansalud.html',
})
export class PlanSalud {
  protected readonly benefits: Benefit[] = [
    { title: 'Consulta externa', icon: 'M12 4v16m8-8H4' },
    { title: 'Emergencias', icon: 'M12 4v16m8-8H4' },
    { title: 'Hospitalización', icon: 'M3 12h18M12 3v18' },
    { title: 'Médico a domicilio', icon: 'M3 12h18M12 3v18' },
    { title: 'Enfermedades preexistentes', icon: 'M12 4v16m8-8H4' },
    { title: 'Enfermedades congénitas', icon: 'M3 12h18M12 3v18' },
    { title: 'Maternidad', icon: 'M12 4v16m8-8H4' },
    { title: 'Profesionales de la salud', icon: 'M3 12h18M12 3v18' },
  ];

  protected readonly faqs: FAQ[] = [
    { question: '¿En qué fecha debo realizar el pago del vencimiento de mi cuota?' },
    { question: 'Si dejo de pagar una cuota, ¿en qué momento se suspende mi seguro?' },
    {
      question:
        '¿En la renovación de mi contrato existe alguna promoción al cancelar todas mis cuotas?',
    },
    {
      question:
        '¿Qué tarjetas son válidas para poder realizar la afiliación al cargo automático?',
    },
    { question: 'Para poder anular mi seguro, ¿qué trámite debo seguir?' },
    {
      question:
        'Si quiero desafiliar a uno de los dependientes de mi contrato, ¿qué trámite debo seguir?',
    },
  ];
}
