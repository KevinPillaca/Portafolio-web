import { FormsModule } from '@angular/forms';
import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  constructor(public langService: LanguageService) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".field", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart none none reverse"
      },
      x: -100,
      opacity: 0,
      duration: 3.5,
      stagger: 1.0,
      ease: "power3.out"
    });

    gsap.from("#contact button", {
      scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        toggleActions: "restart none none reverse"
      },
      x: 100,
      opacity: 0,
      duration: 3.5,
      delay: 0.5,
      ease: "power3.out"
    });
  }

  mensajeEstado: string = '';

  submitForm(event: Event) {
      event.preventDefault(); 
      const form = event.target as HTMLFormElement;
      // 1. Verificamos la validez del formulario
      if (!form.checkValidity()) {
        this.mensajeEstado = 'Por favor, completa todos los campos requeridos.';
        form.reportValidity(); 
        setTimeout(() => this.mensajeEstado = '', 5000);
        return; 
      }
      
      const data = new FormData(form);

      fetch('https://formsubmit.co/ajax/kevinjosepillaca@gmail.com', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(res => res.json())
      .then(res => {
        this.mensajeEstado = 'Mensaje enviado correctamente';
        form.reset();
        //limpiar el mensaje después de 5 segundos
        setTimeout(() => this.mensajeEstado = '', 5000);
      })
      .catch(err => {
        console.error(err);
        this.mensajeEstado = 'Hubo un error al enviar el mensaje';
        setTimeout(() => this.mensajeEstado = '', 5000);
      });
  }
}