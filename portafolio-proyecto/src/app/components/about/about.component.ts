import { Component,AfterViewInit, ViewEncapsulation } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageService } from '../../services/language.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements AfterViewInit {
  
  constructor(public langService: LanguageService, private sanitizer: DomSanitizer) {}

  safeHtml(key: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(
      this.langService.translate(key)
    );
  }

  ngAfterViewInit(): void {

    gsap.registerPlugin(ScrollTrigger);
    
    // animacion(imagen)
    gsap.from('.imagen img', {
      scrollTrigger: {
        trigger: '.imagen',
        start: 300,
        toggleActions: 'restart none none reverse'
      },
      opacity: 0,
      x: -80,
      scale: 0,
      duration: 2.2,
      delay:0.2,
      ease: 'power3.out'
    });

    // animacion(descripcion)
    gsap.from('.descripcion p', {
      scrollTrigger: {
        trigger: '.descripcion',
        start: 'top 80%',
        toggleActions: 'restart none none reverse'
      },
      x: 100,           //desde la derecha
      opacity: 0,
      duration: 1.8,
      ease: 'power3.out',
      stagger: 0.5      // uno por uno
    });

    // animacion(skill(titulo))
    gsap.from('.skill h2', {
    scrollTrigger: {
      trigger: '.skill',
      start: 'top 80%',
      toggleActions: 'restart none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
    });

    // animacion(bloques(stack))
    gsap.from('.skill .stack', {
    scrollTrigger: {
      trigger: '.skill',
      start: 'top 75%',
      toggleActions: 'restart none none reverse'
    },
      y: 80,
      opacity: 0,
      duration: 3,
      ease: 'power3.out',
      stagger: 1
    });

    // animacion(logos)
    gsap.from('.skill .tecnologia', {
    scrollTrigger: {
      trigger: '.skill',
      start: 'top 70%',
      toggleActions: 'restart none none reverse'
    },
    scale: 0.6,
    opacity: 0,
    duration: 1.6,
    ease: 'back.out(1.7)',
    stagger: {
      each: 0.08,
      from: 'start'
    }
    });
    
    // al pasar el mouse(logos)
    
  }
}
