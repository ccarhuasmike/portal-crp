import { Component, computed, signal } from '@angular/core';

interface Specialty {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-especialidades',
  standalone: true,
  templateUrl: './especialidades.html',
})
export class Especialidades {
  protected readonly searchQuery = signal('');
  protected readonly selectedSpecialty = signal('Todas');

  protected readonly specialties: Specialty[] = [
    {
      name: 'Banco de Sangre',
      icon: 'M12 3c-2 4-6 7-6 12a6 6 0 0 0 12 0c0-5-4-8-6-12ZM9 15a3 3 0 0 0 3 3',
    },
    {
      name: 'Centro de Medicina Estética',
      icon: 'M4 5c2 1 3 3 3 5m-3-1c2 0 4 1 5 3m-4-7 2-2m1 13 4-4m-2 6 5-5m-1 7 5-5',
    },
    {
      name: 'Cirugía de Cabeza y Cuello',
      icon: 'M12 3a7 7 0 0 0-7 7v2a7 7 0 0 0 14 0v-2a7 7 0 0 0-7-7Zm-3 8h.01M15 11h.01M9 15c2 1 4 1 6 0m-3 4v2',
    },
    {
      name: 'Cirugía de Tórax y Cardíaca',
      icon: 'M12 3v18m-5-15h10M7 8h10m-8 4h6m-8 4h10m-7 4h4',
    },
    {
      name: 'Cirugía General',
      icon: 'M12 3a7 7 0 0 0-7 7v2a7 7 0 0 0 14 0v-2a7 7 0 0 0-7-7Zm-3 8h.01M15 11h.01M9 15c2 1 4 1 6 0m-3 4v2',
    },
    {
      name: 'Cirugía Oncológica',
      icon: 'M8 4c-3 0-5 3-5 6s2 6 5 6m8-12c3 0 5 3 5 6s-2 6-5 6m-8-6h8m-4-8v16',
    },
    {
      name: 'Cirugía Pediátrica',
      icon: 'M12 3a6 6 0 0 0-6 6v2a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6Zm-2 6h.01M14 9h.01m-4 4c1.5 1 2.5 1 4 0m-2 4v4',
    },
    {
      name: 'Cirugía Plástica',
      icon: 'M7 4c1 2 2 3 5 3s4-1 5-3m-10 5c2 2 8 2 10 0m-9 3 1 8h8l1-8m-7 3h.01m3 0h.01',
    },
    {
      name: 'Cirugía Vascular Periférica',
      icon: 'M12 3v5m0 0-4 3m4-3 4 3m-8 2-2 8m10-8 2 8m-6-8v8',
    },
    {
      name: 'Especialidad de Alergia e Inmunología',
      icon: 'M12 3v18m-7-9h14m-12-5 10 10m0-10L7 17m5-14a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z',
    },
    {
      name: 'Especialidad de Anestesiología',
      icon: 'M12 3a6 6 0 0 0-6 6v2a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6Zm-3 8h6m-6 4h6m-3-1v7',
    },
    {
      name: 'Especialidad de Cardiología',
      icon: 'M3 12h4l2-5 4 10 2-5h6',
    },
  ];

  protected readonly filteredSpecialties = computed(() => {
    const query = this.searchQuery().trim().toLocaleLowerCase('es');
    const selectedSpecialty = this.selectedSpecialty();

    return this.specialties.filter((specialty) => {
      const matchesName = specialty.name.toLocaleLowerCase('es').includes(query);
      const matchesSelection = selectedSpecialty === 'Todas' || specialty.name === selectedSpecialty;
      return matchesName && matchesSelection;
    });
  });

  protected onSearch(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  protected onSpecialtyChange(event: Event): void {
    this.selectedSpecialty.set((event.target as HTMLSelectElement).value);
  }
}
