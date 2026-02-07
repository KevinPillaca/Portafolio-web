import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor(public langService: LanguageService) {}

  imagenActiva: string | null = null;

  abrirImagen(src: string) {
    this.imagenActiva = src;
  }

  cerrarImagen() {
    this.imagenActiva = null;
  }
}
