import { Component } from '@angular/core';

interface SocialLink {
  label: string;
  href: string;
  iconPath: string;
  viewBox: string;
}

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Site footer: brand/social, contact, schedule and useful-links columns. */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly socialLinks: SocialLink[] = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/ClinicaRicardoPalmaOfic',
      viewBox: '0 0 24 24',
      iconPath:
        'M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/clinicaricardopalma/',
      viewBox: '0 0 24 24',
      iconPath:
        'M12 3c-2.444 0-2.751.01-3.711.054-.958.044-1.612.196-2.185.418-.592.23-1.094.538-1.594 1.038-.5.5-.808 1.002-1.038 1.594-.222.573-.374 1.227-.418 2.185C3.01 9.25 3 9.556 3 12s.01 2.751.054 3.711c.044.958.196 1.612.418 2.185.23.592.538 1.094 1.038 1.594.5.5 1.002.808 1.594 1.038.573.222 1.227.374 2.185.418C9.25 20.99 9.556 21 12 21s2.751-.01 3.711-.054c.958-.044 1.612-.196 2.185-.418.592-.23 1.094-.538 1.594-1.038.5-.5.808-1.002 1.038-1.594.222-.573.374-1.227.418-2.185C20.99 14.751 21 14.444 21 12s-.01-2.751-.054-3.711c-.044-.958-.196-1.612-.418-2.185-.23-.592-.538-1.094-1.038-1.594-.5-.5-1.002-.808-1.594-1.038-.573-.222-1.227-.374-2.185-.418C14.751 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.671.31.42.163.72.358 1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.949.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.671a2.784 2.784 0 0 1-.673 1.035 2.784 2.784 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.949.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.671-.31a2.784 2.784 0 0 1-1.035-.673 2.784 2.784 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.949-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.671.163-.42.358-.72.673-1.035.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.949-.043 1.234-.052 3.637-.052Zm0 3.756a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm4.804-8.884a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16Z',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@clinicaricardopalma',
      viewBox: '0 0 32 32',
      iconPath:
        'M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/clínica-ricardo-palma/',
      viewBox: '0 0 24 24',
      iconPath:
        'M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/user/ClinicaRicardoPalma',
      viewBox: '0 0 24 24',
      iconPath:
        'M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z',
    },
  ];

  protected readonly legalLinks: FooterLink[] = [
    { label: 'Términos y condiciones', href: 'informacion-legal/terminos-y-condiciones/index.html' },
    { label: 'Política de cookies', href: 'informacion-legal/politicas-de-cookies/index.html' },
    { label: 'Política de privacidad', href: 'informacion-legal/politicas-de-privacidad/index.html' },
  ];

  protected readonly usefulLinks: FooterLink[] = [
    { label: 'Nosotros', href: 'nosotros/index.html' },
    { label: 'Solicitud de Registro Médico', href: 'https://registromedicos.crp.com.pe:2087/', external: true },
    { label: 'Resultados de Laboratorio', href: 'https://www.westernlab.pe/?page_id=1336', external: true },
    { label: 'Beneficiario Final', href: 'informacion-legal/beneficiario-final/index.html' },
    { label: 'PEAS', href: 'informacion-legal/peas/index.html' },
    { label: 'Derechos ARCO', href: 'informacion-legal/derechos-arco/index.html' },
    { label: 'Canal de Integridad', href: 'informacion-legal/canal-de-integridad/index.html' },
    {
      label: 'Código Ético y de Conducta',
      href: 'wp-content/uploads/2026/07/Manual-Codigo-Etico-y-de-Conducta-Terceros.pdf',
      external: true,
    },
    { label: 'Trabaja con Nosotros', href: 'https://clinica-ricardo-palma.pandape.computrabajo.com/', external: true },
  ];
}
