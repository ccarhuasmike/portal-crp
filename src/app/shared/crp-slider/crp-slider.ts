import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnChanges,
  OnDestroy,
  TemplateRef,
  signal,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

/**
 * Lightweight, dependency-free carousel that reproduces the behaviour of the
 * original WordPress "crp-slider" block (autoplay + dot pagination) without
 * pulling in the original Swiper/Slick vendor bundles. Consumers provide the
 * slide markup through an <ng-template #crpSlide let-item> projected inside
 * <app-crp-slider>.
 */
@Component({
  selector: 'app-crp-slider',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './crp-slider.html',
  styleUrl: './crp-slider.css',
})
export class CrpSlider<T = unknown> implements AfterContentInit, OnChanges, OnDestroy {
  @Input({ required: true }) items: T[] = [];
  @Input() autoplay = false;
  @Input() autoplayDelay = 5000;
  @Input() pauseOnHover = true;

  @ContentChild('crpSlide', { static: true }) slideTemplate?: TemplateRef<{ $implicit: T; index: number }>;

  protected readonly activeIndex = signal(0);
  private timerId: ReturnType<typeof setInterval> | null = null;

  ngAfterContentInit(): void {
    this.restartAutoplay();
  }

  ngOnChanges(): void {
    this.activeIndex.set(0);
    this.restartAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goTo(index: number): void {
    const total = this.items.length;
    if (total <= 0) {
      return;
    }
    this.activeIndex.set(((index % total) + total) % total);
  }

  onMouseEnter(): void {
    if (this.pauseOnHover) {
      this.stopAutoplay();
    }
  }

  onMouseLeave(): void {
    if (this.pauseOnHover) {
      this.restartAutoplay();
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    if (this.autoplay && this.items.length > 1) {
      this.timerId = setInterval(() => this.goTo(this.activeIndex() + 1), this.autoplayDelay);
    }
  }

  private stopAutoplay(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
