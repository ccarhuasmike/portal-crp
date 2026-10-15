import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_ITEMS, NavItem } from '../../shared/nav-data';

/**
 * Site header: brand, search, phone/CTA, primary navigation (desktop) and an
 * accessible slide-down mobile menu driven entirely by Angular state.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
})
export class Header {
  protected readonly navItems: NavItem[] = NAV_ITEMS;
  protected readonly blogHref = 'blog/index.html';

  protected readonly activeLang = signal<'es' | 'en'>('es');
  protected readonly mobileMenuOpen = signal(false);
  protected readonly openSubmenuIndex = signal<number | null>(null);
  protected readonly searchQuery = signal('');

  /** Visual-only toggle: real translation needs the Google Translate widget script. */
  setLang(lang: 'es' | 'en'): void {
    this.activeLang.set(lang);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
    if (!this.mobileMenuOpen()) {
      this.openSubmenuIndex.set(null);
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
    this.openSubmenuIndex.set(null);
  }

  toggleSubmenu(index: number): void {
    this.openSubmenuIndex.update((current) => (current === index ? null : index));
  }

  openSubmenuOnHover(index: number): void {
    this.openSubmenuIndex.set(index);
  }

  closeSubmenuOnLeave(): void {
    this.openSubmenuIndex.set(null);
  }

  /** Keeps the dropdown reachable/dismissible via keyboard (Escape). */
  onSubmenuKeydown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Escape') {
      this.openSubmenuIndex.set(null);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleSubmenu(index);
    }
  }

  onSearchInput(value: string): void {
    // No search-results route exists yet in this migration; kept as a
    // UI-only stub (same scope decision as the legacy WordPress search form).
    this.searchQuery.set(value);
  }

  @HostListener('document:keydown.escape')
  onDocumentEscape(): void {
    this.closeMobileMenu();
  }
}
