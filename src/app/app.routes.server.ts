import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'plansalud/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'servicios/cirugia-robotica/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'servicios/citas-medicas/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'servicios/departamento-internacional/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'servicios/emergencias-24-7/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'servicios/hospitalizacion/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'especialidades/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'especialidades/cirugia-de-cabeza-y-cuello/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'unidades-especializadas/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'unidades-especializadas/unidad-de-cuidados-intensivos-pediatrica/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'medicos/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'medicos/iwaki-chavez-roberto/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'productos/maternidad/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'productos/chequeo-deportivo/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'productos/cirugia-bariatrica/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'productos/cirugia-vascular/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'productos/programa-de-nutricion-integral/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'productos/chequeo-ginecologico-integral/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'productos/vasectomia/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'para-empresas/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'blog/general/amigdalitis-que-es-por-que-aparece-y-como-tratarla/',
    renderMode: RenderMode.Server,
  },
  {
    path: 'nosotros',
    renderMode: RenderMode.Server,
  },
  {
    path: 'nosotros/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'atencion-al-usuario',
    renderMode: RenderMode.Server,
  },
  {
    path: 'atencion-al-usuario/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: 'preguntas-frecuentes',
    renderMode: RenderMode.Server,
  },
  {
    path: 'preguntas-frecuentes/index.html',
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
