import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Possible states persisted for the GDPR cookie-consent banner. */
export type CookieConsentStatus = 'accepted' | 'rejected';

const COOKIE_NAME = 'crp_cookie_consent';
const COOKIE_MAX_AGE_DAYS = 365;

/**
 * Minimal, framework-native reimplementation of the original
 * "moove_gdpr" plugin's accept/reject behaviour (the plugin's own
 * backend logging/consent-mode integrations are not reproduced here,
 * as they depend on the live WordPress backend).
 */
@Injectable({ providedIn: 'root' })
export class CookieConsentService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly status = signal<CookieConsentStatus | null>(this.readStoredStatus());

  accept(): void {
    this.persist('accepted');
  }

  reject(): void {
    this.persist('rejected');
  }

  private persist(value: CookieConsentStatus): void {
    this.status.set(value);
    if (!this.isBrowser) {
      return;
    }
    const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60;
    document.cookie = `${COOKIE_NAME}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
  }

  private readStoredStatus(): CookieConsentStatus | null {
    if (!this.isBrowser) {
      return null;
    }
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=(accepted|rejected)`));
    return (match?.[1] as CookieConsentStatus) ?? null;
  }
}
