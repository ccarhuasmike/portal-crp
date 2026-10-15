import { Component } from '@angular/core';

interface CorporateTier {
  benefit: string;
  oro: boolean;
  plata: boolean;
  bronce: boolean;
}

interface CorporateActivity {
  title: string;
  description: string;
  illustration: 'team' | 'wellness';
}

@Component({
  selector: 'app-para-empresas',
  standalone: true,
  templateUrl: './para-empresas.html',
})
export class ParaEmpresas {
  protected readonly corporateTiers: CorporateTier[] = [
    { benefit: 'Charlas personalizadas', oro: true, plata: true, bronce: true },
    { benefit: 'Activaciones de salud', oro: true, plata: true, bronce: true },
    { benefit: 'Campañas de prevención', oro: true, plata: true, bronce: true },
    { benefit: 'Entradas a eventos', oro: true, plata: true, bronce: false },
    { benefit: 'Consultas gratuitas de salud', oro: true, plata: true, bronce: true },
    { benefit: 'Gestor de cuentas personalizado', oro: true, plata: false, bronce: false },
    { benefit: 'Reportes trimestrales', oro: true, plata: false, bronce: false },
    { benefit: 'Atención VIP', oro: true, plata: true, bronce: true },
    { benefit: 'Cuponera de descuentos', oro: true, plata: true, bronce: true },
    { benefit: 'Eventos de networking sectorial', oro: true, plata: true, bronce: true },
  ];

  protected readonly benefits = [
    'Atención VIP para colaboradores priorizados.',
    'Campañas de prevención personalizadas.',
    'Participación en eventos corporativos y ferias de bienestar.',
    'Reportes trimestrales con resultados e indicadores clave.',
    'Charlas especializadas y activaciones de salud dentro de la empresa.',
  ];

  protected readonly activities: CorporateActivity[] = [
    {
      title: 'Charlas y actividades de bienestar',
      description: 'Encuentros para compartir y fomentar hábitos saludables en el equipo.',
      illustration: 'team',
    },
    {
      title: 'Activaciones de salud',
      description: 'Jornadas de orientación y prevención para colaboradores.',
      illustration: 'wellness',
    },
  ];
}
