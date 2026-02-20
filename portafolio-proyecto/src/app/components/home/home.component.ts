import { Component,AfterViewInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { gsap } from 'gsap';
import { RouterLink } from '@angular/router';
import SplitType from 'split-type';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(public langService: LanguageService) {}

  t(key: string) {
    return this.langService.translate(key);
  }

  ngAfterViewInit(): void {
    // 1. Dividimos el texto
    const text = new SplitType('.rol', {
      types: 'words,chars'
    });

    // 2. Animamos y añadimos eventos letra por letra
    if (text.chars) {
      text.chars.forEach((char, index) => {
        
        // Animación de entrada (la explosión inicial)
        gsap.from(char, {
          y: gsap.utils.random(-150, 150),
          x: gsap.utils.random(-300, 300),
          rotate: gsap.utils.random(-360, 360),
          scale: gsap.utils.random(0, 2),
          opacity: 0,
          duration: 0.7,
          ease: "back.out",
          delay: index * 0.04
        });

        // Evento de Mouse: Efecto de locura al pasar el cursor
        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            y: gsap.utils.random(-50, 50),
            x: gsap.utils.random(-50, 50),
            rotate: gsap.utils.random(-90, 90),
            scale: gsap.utils.random(0.5, 1.5),
            duration: 0.3,
            ease: "power2.out"
          });
        });

        // Opcional: Que vuelvan a su sitio al quitar el cursor
        char.addEventListener("mouseleave", () => {
          gsap.to(char, {
            y: 0,
            x: 0,
            rotate: 0,
            scale: 1,
            duration: 3.5,
            ease: "elastic.out(1, 0.3)"
          });
        });
        
      });
    }
  

    // gsap al cargar
    gsap.from('.buttons', {
      opacity: 0,
      x:-150,
      duration: 3,
      delay:0.5,
    });
  
    gsap.from('.front2',{
      opacity: 0,
      x:150,
      y:100,
      duration: 3,
      rotationY: 360
    });
    gsap.from('.front1',{
      opacity: 0,
      x:-200,
      y:-200,
      duration: 3,
      rotationY: 360
    });
    gsap.from('.back1',{
      opacity: 0,
      x:200,
      y:-200,
      duration: 3,
      rotationY: 360
    });
    gsap.from('.back2',{
      opacity: 0,
      x:-200,
      y:200,
      duration: 3,
      rotationY: 360
    });

    // gsap efecto flotante
    const floatDelay = 3; // cuando termina la animación de entrada

    gsap.to('.front2', {
      y: '-=20',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: floatDelay
    });

    gsap.to('.back2', {
      y: '+=20',
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: floatDelay
    });

    gsap.to('.front1', {
      y: '-=15',
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: floatDelay
    });

    gsap.to('.back1', {
      y: '+=15',
      duration: 4.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: floatDelay
    });

  }

}
