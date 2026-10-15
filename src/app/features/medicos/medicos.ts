import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Doctor {
  name: string;
  specialty: string;
}

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medicos.html',
})
export class Medicos {
  protected readonly query = signal('');
  protected readonly selectedSpecialty = signal('Todas');
  protected readonly selectedUnit = signal('Todas');

  protected readonly doctors: Doctor[] = [
    { name: 'Abanto Guiop, Franklin Manuel', specialty: '' },
    { name: 'Abdala Castro, Lucero Guadalupe', specialty: '' },
    { name: 'Abuhabda Rondon, Giafar', specialty: '' },
    { name: 'Abuid Ticona, Juan', specialty: '' },
    { name: 'Acha Sanchez, Jose Luis Christian', specialty: 'Especialidad de Neurocirugía' },
    { name: 'Achata Arenas, Jorge Hernan', specialty: 'Cirugía Vascular Periférica' },
    { name: 'Acosta Galli, Maria Ysabel', specialty: 'Unidad Especializada de Cuidados Intensivos Pediátrica' },
    { name: 'Acosta Viera, Alvaro', specialty: 'Especialidad de Oftalmología' },
    { name: 'Aguilar Del Rosario, Clemente Luis', specialty: 'Especialidad de Traumatología' },
    { name: 'Aguilar Mejia, Celia Lucia', specialty: 'Especialidad de Cardiología' },
    { name: 'Aguilar Rivera, William', specialty: 'Especialidad de Psiquiatría' },
    { name: 'Aguirre Carrasco, Susant Stephany', specialty: 'Unidad de Chequeos M...' },
    { name: 'Aguirre Garrido, Milena', specialty: 'Especialidad de Neurología' },
    { name: 'Aguirre Quispe, Wilfor', specialty: 'Especialidad de Neurología' },
    { name: 'Alarcon Santisteban, Shirley Marcela', specialty: 'Especialidad de Medicina Nuclear' },
    { name: 'Alegre Tuesta, Teresa De La Prudencia', specialty: '' },
  ];

  protected readonly unavailablePages = [2, 3, 4, 5];

  protected readonly specialties = [
    'Todas',
    ...new Set(
      this.doctors
        .map((doctor) => doctor.specialty)
        .filter((specialty) => specialty.startsWith('Especialidad')),
    ),
  ];

  protected readonly units = [
    'Todas',
    ...new Set(
      this.doctors
        .map((doctor) => doctor.specialty)
        .filter((specialty) => specialty.startsWith('Unidad')),
    ),
  ];

  protected readonly filteredDoctors = computed(() => {
    const query = this.query().trim().toLocaleLowerCase('es');
    const specialty = this.selectedSpecialty();
    const unit = this.selectedUnit();

    return this.doctors.filter((doctor) => {
      const matchesQuery = doctor.name.toLocaleLowerCase('es').includes(query);
      const matchesSpecialty =
        specialty === 'Todas' ||
        doctor.specialty.toLocaleLowerCase('es').includes(specialty.toLocaleLowerCase('es'));
      const matchesUnit =
        unit === 'Todas' ||
        doctor.specialty.toLocaleLowerCase('es').includes(unit.toLocaleLowerCase('es'));
      return matchesQuery && matchesSpecialty && matchesUnit;
    });
  });

  protected initials(name: string): string {
    return name
      .split(/[ ,]+/)
      .filter((part) => part.length > 0)
      .slice(0, 2)
      .map((part) => part[0].toLocaleUpperCase('es'))
      .join('');
  }

  protected onSearch(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected onSpecialtyChange(event: Event): void {
    this.selectedSpecialty.set((event.target as HTMLSelectElement).value);
  }

  protected onUnitChange(event: Event): void {
    this.selectedUnit.set((event.target as HTMLSelectElement).value);
  }
}
