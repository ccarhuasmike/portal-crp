import { Component, inject } from '@angular/core';
import { CookieConsentService } from '../services/cookie-consent.service';

/**
 * GDPR-style cookie notice bar. Minimal, framework-native reimplementation
 * of the original "moove_gdpr" bar (see {@link CookieConsentService} for the
 * accept/reject persistence; the plugin's own settings modal/backend
 * logging are not reproduced here as they depend on the live WordPress
 * backend).
 */
@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [],
  templateUrl: './cookie-banner.html',
})
export class CookieBanner {
  protected readonly cookieConsent = inject(CookieConsentService);

  accept(): void {
    this.cookieConsent.accept();
  }

  reject(): void {
    this.cookieConsent.reject();
  }
}
