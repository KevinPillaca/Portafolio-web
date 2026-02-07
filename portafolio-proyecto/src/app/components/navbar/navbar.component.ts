import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {

  // MENÚ HAMBURGUESA (NO SE TOCA)
  isMenuOpen = false;

  // INYECTAMOS EL SERVICE (NUEVO)
  constructor(public langService: LanguageService) {}

  // GSAP (NO SE TOCA)
  ngAfterViewInit(): void {
    gsap.from('.navbar-links li', {
      duration: 1,
      y: -50,
      opacity: 0,
      stagger: 0.5,
      delay: 0.5,
      ease: 'power2.out'
    });
  }

  // HAMBURGUESA (NO SE TOCA)
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  cerrarMenu() {
    this.isMenuOpen = false;
  }

  // CAMBIO DE IDIOMA (NUEVO)
  changeLang(lang: 'es' | 'en') {
    this.langService.setLanguage(lang);
  }
}
