import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SpecializedUnit {
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-unidades-especializadas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './unidades-especializadas.html',
})
export class UnidadesEspecializadas {
  protected readonly query = signal('');
  protected readonly selectedUnit = signal('Todas');

  protected readonly units: SpecializedUnit[] = [
    {
      name: 'Unidad de Cuidados Intensivos Pediátrica',
      description:
        'Atención especializada para niños en estado crítico, con monitoreo continuo, tecnología avanzada y equipo multidisciplinario.',
      icon: 'M3 14h18M5 14V8h14v6m-2-6V5h2v4M4 14v4m16-4v4M7 18v2m10-2v2M8 11h3m-1.5-1.5v3m8-3h.01',
    },
    {
      name: 'Unidad de Ecocardiografía Avanzada',
      description:
        'Se realizan estudios especializados para el diagnóstico y seguimiento de enfermedades cardiovasculares, falla cardíaca, entre otros más.',
      icon: 'M3 4h15v12H3zM6 8h2l2 4 2-6 2 4h2m-5 4v4m-3 0h6m11-13v7m-2-3.5h4m-2 5v2',
    },
    {
      name: 'Unidad Especializada de Cirugía Bariátrica',
      description:
        'Tratamiento integral de la obesidad mediante cirugía bariátrica, con tecnología avanzada y enfoque multidisciplinario.',
      icon: 'M5 3c4 2 3 5 2 7s-1 5 1 8m11-15c-4 2-3 5-2 7s1 5-1 8M7 6h10m-9 4h8m-8 4h8m-7 4h6',
    },
    {
      name: 'Unidad Especializada de Cirugía Oncológica Pediátrica',
      description:
        'Atención especializada para pacientes críticos que requieren monitoreo avanzado y soporte vital continuo.',
      icon: 'M5 8a4 4 0 1 1 8 0v3H5V8Zm-2 3h12v7H3zm5-9v2m7 3h5v8h-5m-2-2 2-2-2-2m-5 9a4 4 0 0 0 8 0',
    },
    {
      name: 'Unidad Especializada de Cuidados Intensivos',
      description:
        'Atención especializada para pacientes críticos, con monitoreo continuo, tecnología avanzada y equipo médico multidisciplinario.',
      icon: 'M3 5h12v10H3zM5 8h2l2 4 2-6 2 4h2m-7 3v5m-3 0h6m7-9h4v8h-4m2-5h.01',
    },
    {
      name: 'Unidad Especializada de Cuidados Intensivos Neonatal',
      description:
        'Cuidado especializado para recién nacidos críticos, con monitoreo continuo, tecnología avanzada y equipo multidisciplinario.',
      icon: 'M3 7h11v9H3zm2 9v3m7-3v3M5 5h7m-1-2 2 2-2 2m6 0a3 3 0 0 1 3 3v2m-4-2h4m-2-2v4m-5 2h3',
    },
    {
      name: 'Unidad Especializada de Epilepsia',
      description:
        'Diagnóstico y tratamiento integral de la epilepsia, con tecnología avanzada y especialistas en neurología.',
      icon: 'M12 3 9 7l4 2-5 3 5 2-4 5m3-16 3 4-2 3 4 2-3 4 2 4M5 5l2 2m10 10 2 2',
    },
    {
      name: 'Unidad Especializada de Heridas - UNEH',
      description:
        'Atención integral para el tratamiento de heridas complejas, con tecnología avanzada y un equipo multidisciplinario especializado.',
      icon: 'm4 17 9-9 4 4-9 9-4-4Zm8-10 3-3 4 4-3 3m-7 4 3 3m-6-7 3 3',
    },
    {
      name: 'Unidad Especializada de la Columna',
      description:
        'Diagnóstico y tratamiento integral de enfermedades de la columna vertebral, con tecnología avanzada y especialistas altamente capacitados.',
      icon: 'M12 2c-3 3-3 5 0 7-3 2-3 4 0 6-3 2-3 4 0 7m0-20c3 3 3 5 0 7 3 2 3 4 0 6 3 2 3 4 0 7m-2-14h4m-4 6h4m-4 6h4',
    },
    {
      name: 'Unidad Especializada de Lactancia Materna',
      description:
        'Acompañamiento especializado en lactancia materna, promoviendo la nutrición óptima del recién nacido y el bienestar de la madre.',
      icon: 'M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-7 16c0-4 3-7 7-7s7 3 7 7m-7-12v3m-2-2h4',
    },
    {
      name: 'Unidad Especializada de Medicina del Sueño',
      description:
        'Diagnóstico y tratamiento de trastornos del sueño, con tecnología avanzada y especialistas en salud del descanso.',
      icon: 'M18 4a8 8 0 1 0 3 14 8 8 0 0 1-3-14ZM5 17h.01M8 20h.01',
    },
    {
      name: 'Unidad Especializada de Medicina Hiperbárica',
      description:
        'Tratamiento con oxígeno hiperbárico que favorece la recuperación de tejidos y la cicatrización, con tecnología avanzada.',
      icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-2 13c0-2 1-3 2-4s2-2 2-4a2 2 0 1 0-4 0m2 10v.01',
    },
  ];

  protected readonly filteredUnits = computed(() => {
    const search = this.query().trim().toLocaleLowerCase('es');
    const selected = this.selectedUnit();

    return this.units.filter((unit) => {
      const matchesQuery = unit.name.toLocaleLowerCase('es').includes(search);
      const matchesSelection = selected === 'Todas' || unit.name === selected;
      return matchesQuery && matchesSelection;
    });
  });

  protected onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected onUnitChange(event: Event): void {
    this.selectedUnit.set((event.target as HTMLSelectElement).value);
  }

  protected showUnit(unitName: string): void {
    this.selectedUnit.set(unitName);
    this.query.set('');
  }
}
