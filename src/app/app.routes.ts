import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'plansalud',
    loadComponent: () => import('./features/plansalud/plansalud').then((m) => m.PlanSalud),
    title: 'PlanSalud | Clínica Ricardo Palma',
  },
  {
    path: 'plansalud/index.html',
    loadComponent: () => import('./features/plansalud/plansalud').then((m) => m.PlanSalud),
    title: 'PlanSalud | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/cirugia-robotica',
    loadComponent: () =>
      import('./features/cirugia-robotica/cirugia-robotica').then((m) => m.CirugiaRobotica),
    title: 'Cirugía Robótica | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/cirugia-robotica/index.html',
    loadComponent: () =>
      import('./features/cirugia-robotica/cirugia-robotica').then((m) => m.CirugiaRobotica),
    title: 'Cirugía Robótica | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/citas-medicas',
    loadComponent: () =>
      import('./features/citas-medicas/citas-medicas').then((m) => m.CitasMedicas),
    title: 'Citas Médicas | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/citas-medicas/index.html',
    loadComponent: () =>
      import('./features/citas-medicas/citas-medicas').then((m) => m.CitasMedicas),
    title: 'Citas Médicas | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/departamento-internacional',
    loadComponent: () =>
      import('./features/departamento-internacional/departamento-internacional').then(
        (m) => m.DepartamentoInternacional,
      ),
    title: 'Departamento Internacional | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/departamento-internacional/index.html',
    loadComponent: () =>
      import('./features/departamento-internacional/departamento-internacional').then(
        (m) => m.DepartamentoInternacional,
      ),
    title: 'Departamento Internacional | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/emergencias-24-7',
    loadComponent: () =>
      import('./features/emergencias-24-7/emergencias-24-7').then((m) => m.Emergencias247),
    title: 'Emergencias 24/7 | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/emergencias-24-7/index.html',
    loadComponent: () =>
      import('./features/emergencias-24-7/emergencias-24-7').then((m) => m.Emergencias247),
    title: 'Emergencias 24/7 | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/hospitalizacion',
    loadComponent: () =>
      import('./features/hospitalizacion/hospitalizacion').then((m) => m.Hospitalizacion),
    title: 'Hospitalización | Clínica Ricardo Palma',
  },
  {
    path: 'servicios/hospitalizacion/index.html',
    loadComponent: () =>
      import('./features/hospitalizacion/hospitalizacion').then((m) => m.Hospitalizacion),
    title: 'Hospitalización | Clínica Ricardo Palma',
  },
  {
    path: 'especialidades',
    loadComponent: () =>
      import('./features/especialidades/especialidades').then((m) => m.Especialidades),
    title: 'Especialidades médicas | Clínica Ricardo Palma',
  },
  {
    path: 'especialidades/index.html',
    loadComponent: () =>
      import('./features/especialidades/especialidades').then((m) => m.Especialidades),
    title: 'Especialidades médicas | Clínica Ricardo Palma',
  },
  {
    path: 'especialidades/cirugia-de-cabeza-y-cuello',
    loadComponent: () =>
      import('./features/cirugia-cabeza-cuello/cirugia-cabeza-cuello').then(
        (m) => m.CirugiaCabezaCuello,
      ),
    title: 'Cirugía de Cabeza y Cuello | Clínica Ricardo Palma',
  },
  {
    path: 'especialidades/cirugia-de-cabeza-y-cuello/index.html',
    loadComponent: () =>
      import('./features/cirugia-cabeza-cuello/cirugia-cabeza-cuello').then(
        (m) => m.CirugiaCabezaCuello,
      ),
    title: 'Cirugía de Cabeza y Cuello | Clínica Ricardo Palma',
  },
  {
    path: 'unidades-especializadas',
    loadComponent: () =>
      import('./features/unidades-especializadas/unidades-especializadas').then(
        (m) => m.UnidadesEspecializadas,
      ),
    title: 'Unidades especializadas | Clínica Ricardo Palma',
  },
  {
    path: 'unidades-especializadas/index.html',
    loadComponent: () =>
      import('./features/unidades-especializadas/unidades-especializadas').then(
        (m) => m.UnidadesEspecializadas,
      ),
    title: 'Unidades especializadas | Clínica Ricardo Palma',
  },
  {
    path: 'unidades-especializadas/unidad-de-cuidados-intensivos-pediatrica',
    loadComponent: () =>
      import(
        './features/unidad-cuidados-intensivos-pediatrica/unidad-cuidados-intensivos-pediatrica'
      ).then((m) => m.UnidadCuidadosIntensivosPediatrica),
    title: 'Unidad de Cuidados Intensivos Pediátrica | Clínica Ricardo Palma',
  },
  {
    path: 'unidades-especializadas/unidad-de-cuidados-intensivos-pediatrica/index.html',
    loadComponent: () =>
      import(
        './features/unidad-cuidados-intensivos-pediatrica/unidad-cuidados-intensivos-pediatrica'
      ).then((m) => m.UnidadCuidadosIntensivosPediatrica),
    title: 'Unidad de Cuidados Intensivos Pediátrica | Clínica Ricardo Palma',
  },
  {
    path: 'medicos',
    loadComponent: () => import('./features/medicos/medicos').then((m) => m.Medicos),
    title: 'Nuestro equipo médico | Clínica Ricardo Palma',
  },
  {
    path: 'medicos/index.html',
    loadComponent: () => import('./features/medicos/medicos').then((m) => m.Medicos),
    title: 'Nuestro equipo médico | Clínica Ricardo Palma',
  },
  {
    path: 'medicos/iwaki-chavez-roberto',
    loadComponent: () =>
      import('./features/medico-iwaki-chavez/medico-iwaki-chavez').then(
        (m) => m.MedicoIwakiChavez,
      ),
    title: 'Iwaki Chavez, Roberto | Clínica Ricardo Palma',
  },
  {
    path: 'medicos/iwaki-chavez-roberto/index.html',
    loadComponent: () =>
      import('./features/medico-iwaki-chavez/medico-iwaki-chavez').then(
        (m) => m.MedicoIwakiChavez,
      ),
    title: 'Iwaki Chavez, Roberto | Clínica Ricardo Palma',
  },
  {
    path: 'productos/maternidad',
    loadComponent: () => import('./features/maternidad/maternidad').then((m) => m.Maternidad),
    title: 'Maternidad | Clínica Ricardo Palma',
  },
  {
    path: 'productos/maternidad/index.html',
    loadComponent: () => import('./features/maternidad/maternidad').then((m) => m.Maternidad),
    title: 'Maternidad | Clínica Ricardo Palma',
  },
  {
    path: 'productos/chequeo-deportivo',
    loadComponent: () =>
      import('./features/chequeo-deportivo/chequeo-deportivo').then((m) => m.ChequeoDeportivo),
    title: 'Chequeo Deportivo | Clínica Ricardo Palma',
  },
  {
    path: 'productos/chequeo-deportivo/index.html',
    loadComponent: () =>
      import('./features/chequeo-deportivo/chequeo-deportivo').then((m) => m.ChequeoDeportivo),
    title: 'Chequeo Deportivo | Clínica Ricardo Palma',
  },
  {
    path: 'productos/cirugia-bariatrica',
    loadComponent: () =>
      import('./features/cirugia-bariatrica/cirugia-bariatrica').then((m) => m.CirugiaBariatrica),
    title: 'Cirugía Bariátrica | Clínica Ricardo Palma',
  },
  {
    path: 'productos/cirugia-bariatrica/index.html',
    loadComponent: () =>
      import('./features/cirugia-bariatrica/cirugia-bariatrica').then((m) => m.CirugiaBariatrica),
    title: 'Cirugía Bariátrica | Clínica Ricardo Palma',
  },
  {
    path: 'productos/cirugia-vascular',
    loadComponent: () =>
      import('./features/cirugia-vascular/cirugia-vascular').then((m) => m.CirugiaVascular),
    title: 'Cirugía de Várices | Clínica Ricardo Palma',
  },
  {
    path: 'productos/cirugia-vascular/index.html',
    loadComponent: () =>
      import('./features/cirugia-vascular/cirugia-vascular').then((m) => m.CirugiaVascular),
    title: 'Cirugía de Várices | Clínica Ricardo Palma',
  },
  {
    path: 'productos/programa-de-nutricion-integral',
    loadComponent: () =>
      import('./features/programa-nutricion-integral/programa-nutricion-integral').then(
        (m) => m.ProgramaNutricionIntegral,
      ),
    title: 'Programa de Nutrición Integral | Clínica Ricardo Palma',
  },
  {
    path: 'productos/programa-de-nutricion-integral/index.html',
    loadComponent: () =>
      import('./features/programa-nutricion-integral/programa-nutricion-integral').then(
        (m) => m.ProgramaNutricionIntegral,
      ),
    title: 'Programa de Nutrición Integral | Clínica Ricardo Palma',
  },
  {
    path: 'productos/chequeo-ginecologico-integral',
    loadComponent: () =>
      import('./features/chequeo-ginecologico-integral/chequeo-ginecologico-integral').then(
        (m) => m.ChequeoGinecologicoIntegral,
      ),
    title: 'Chequeo Ginecológico Integral | Clínica Ricardo Palma',
  },
  {
    path: 'productos/chequeo-ginecologico-integral/index.html',
    loadComponent: () =>
      import('./features/chequeo-ginecologico-integral/chequeo-ginecologico-integral').then(
        (m) => m.ChequeoGinecologicoIntegral,
      ),
    title: 'Chequeo Ginecológico Integral | Clínica Ricardo Palma',
  },
  {
    path: 'productos/vasectomia',
    loadComponent: () =>
      import('./features/vasectomia/vasectomia').then((m) => m.Vasectomia),
    title: 'Vasectomía | Clínica Ricardo Palma',
  },
  {
    path: 'productos/vasectomia/index.html',
    loadComponent: () =>
      import('./features/vasectomia/vasectomia').then((m) => m.Vasectomia),
    title: 'Vasectomía | Clínica Ricardo Palma',
  },
  {
    path: 'para-empresas',
    loadComponent: () => import('./features/para-empresas/para-empresas').then((m) => m.ParaEmpresas),
    title: 'Para empresas | Clínica Ricardo Palma',
  },
  {
    path: 'para-empresas/index.html',
    loadComponent: () => import('./features/para-empresas/para-empresas').then((m) => m.ParaEmpresas),
    title: 'Para empresas | Clínica Ricardo Palma',
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog').then((m) => m.Blog),
    title: 'Noticias y eventos | Clínica Ricardo Palma',
  },
  {
    path: 'blog/index.html',
    loadComponent: () => import('./features/blog/blog').then((m) => m.Blog),
    title: 'Noticias y eventos | Clínica Ricardo Palma',
  },
  {
    path: 'blog/general/amigdalitis-que-es-por-que-aparece-y-como-tratarla',
    loadComponent: () =>
      import('./features/blog/article/article').then((m) => m.BlogArticlePage),
    title: 'Amigdalitis: qué es, por qué aparece y cómo tratarla | Clínica Ricardo Palma',
  },
  {
    path: 'blog/general/amigdalitis-que-es-por-que-aparece-y-como-tratarla/',
    loadComponent: () =>
      import('./features/blog/article/article').then((m) => m.BlogArticlePage),
    title: 'Amigdalitis: qué es, por qué aparece y cómo tratarla | Clínica Ricardo Palma',
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./features/nosotros/nosotros').then((m) => m.Nosotros),
    title: 'Nosotros | Clínica Ricardo Palma',
  },
  {
    path: 'nosotros/index.html',
    loadComponent: () => import('./features/nosotros/nosotros').then((m) => m.Nosotros),
    title: 'Nosotros | Clínica Ricardo Palma',
  },
  {
    path: 'atencion-al-usuario',
    loadComponent: () =>
      import('./features/atencion-al-usuario/atencion-al-usuario').then(
        (m) => m.AtencionAlUsuario,
      ),
    title: 'Atención al usuario | Clínica Ricardo Palma',
  },
  {
    path: 'atencion-al-usuario/index.html',
    loadComponent: () =>
      import('./features/atencion-al-usuario/atencion-al-usuario').then(
        (m) => m.AtencionAlUsuario,
      ),
    title: 'Atención al usuario | Clínica Ricardo Palma',
  },
  {
    path: 'preguntas-frecuentes',
    loadComponent: () =>
      import('./features/preguntas-frecuentes/preguntas-frecuentes').then(
        (m) => m.PreguntasFrecuentes,
      ),
    title: 'Preguntas frecuentes | Clínica Ricardo Palma',
  },
  {
    path: 'preguntas-frecuentes/index.html',
    loadComponent: () =>
      import('./features/preguntas-frecuentes/preguntas-frecuentes').then(
        (m) => m.PreguntasFrecuentes,
      ),
    title: 'Preguntas frecuentes | Clínica Ricardo Palma',
  },
];
