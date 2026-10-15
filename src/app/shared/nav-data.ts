/** Shared navigation/content types and data used by the header and footer. */

export interface NavChild {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
}

/** Real top-level navigation (verified against the legacy CRP site markup). */
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'PlanSalud',
    href: 'plansalud/index.html',
    children: [
      { label: 'Beneficios', href: 'plansalud/index.html#beneficios_plan_salud' },
      { label: 'Cotizar', href: 'plansalud/index.html#cotizador_formulario' },
      { label: 'Anexos', href: 'plansalud/index.html#anexos_plan_salud' },
    ],
  },
  {
    label: 'Servicios',
    href: '#',
    children: [
      { label: 'Cirugía Robótica', href: 'servicios/cirugia-robotica/index.html' },
      { label: 'Citas Médicas', href: 'servicios/citas-medicas/index.html' },
      { label: 'Departamento Internacional', href: 'servicios/departamento-internacional/index.html' },
      { label: 'Emergencias 24/7', href: 'servicios/emergencias-24-7/index.html' },
      { label: 'Hospitalización', href: 'servicios/hospitalizacion/index.html' },
      { label: 'Medicina Estética', href: 'https://medicinaestetica.crp.com.pe/', external: true },
    ],
  },
  {
    label: 'Especialidades',
    href: 'especialidades/index.html',
    children: [
      { label: 'Especialidades', href: 'especialidades/index.html' },
      { label: 'Unidades Especializadas', href: 'unidades-especializadas/index.html' },
      { label: 'Plantel Médico', href: 'medicos/index.html' },
    ],
  },
  {
    label: 'Productos',
    href: '#',
    children: [
      { label: 'Maternidad', href: 'productos/maternidad/index.html' },
      { label: 'Chequeo Deportivo', href: 'productos/chequeo-deportivo/index.html' },
      { label: 'Cirugía Bariátrica', href: 'productos/cirugia-bariatrica/index.html' },
      { label: 'Cirugía de Varices', href: 'productos/cirugia-vascular/index.html' },
      { label: 'Programa de Nutrición', href: 'productos/programa-de-nutricion-integral/index.html' },
      { label: 'Chequeo Ginecológico', href: 'productos/chequeo-ginecologico-integral/index.html' },
      { label: 'Vasectomía', href: 'productos/vasectomia/index.html' },
    ],
  },
  {
    label: 'Para empresas',
    href: 'para-empresas/index.html',
    children: [
      { label: 'Contactarme', href: 'para-empresas/index.html#contactarme-empresas' },
      { label: 'Planes Corporativos', href: 'para-empresas/index.html#planes-para-empresas' },
    ],
  },
];
