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

  imagenesApp: string[] = [
  'images/proyectos/aplicacion_web.jpg',
  'images/proyectos/bienvenido_aplicacion.jpg',
  'images/proyectos/productos_aplicacion.jpg',
  'images/proyectos/agregar_productos.jpg',
  'images/proyectos/detalles_productos.jpg',
  'images/proyectos/clientes_aplicacion.jpg'
];

indiceActual: number = 0;
modalAbierto: boolean = false;

  abrirGaleria(indice: number = 0) {
  this.indiceActual = indice;
  this.modalAbierto = true;
}

siguiente() {
  this.indiceActual =
    (this.indiceActual + 1) % this.imagenesApp.length;
}

anterior() {
  this.indiceActual =
    (this.indiceActual - 1 + this.imagenesApp.length) % this.imagenesApp.length;
}

cerrarImagen() {
  this.modalAbierto = false;
}
}
