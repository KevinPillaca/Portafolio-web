import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../models/contacto.model';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactoForm: FormGroup;
  mensaje = '';
  error = '';
  enviado = false;

  constructor(
    private fb: FormBuilder,
    private contactoService: ContactoService,
    public langService: LanguageService
  ) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  enviar() {
    if (this.contactoForm.invalid) {
      this.contactoForm.markAllAsTouched();
      return;
    }

    const data: Contacto = this.contactoForm.value;

    this.contactoService.enviarContacto(data).subscribe({
      next: (resp) => {
        this.enviado = true;
        this.mensaje = resp.message; // 👈 viene del BACKEND
        this.error = '';
        this.contactoForm.reset();
      },
      error: (err) => {
        this.error = err.error?.message || 'Error al enviar el mensaje';
        this.enviado = false;
      }
    });
  }
}
