import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { CookieBanner } from '../../shared/cookie-banner/cookie-banner';

/** Shared page shell: header, routed page content and footer. */
@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, CookieBanner],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
