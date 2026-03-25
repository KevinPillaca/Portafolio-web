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

  // Arrays de imágenes (estos se quedan igual)
  imagenesApp: string[] = [
    'images/proyectos/aplicacion_web.jpg',
    'images/proyectos/bienvenido_aplicacion.jpg',
    'images/proyectos/productos_aplicacion.jpg',
    'images/proyectos/agregar_productos.jpg',
    'images/proyectos/detalles_productos.jpg',
    'images/proyectos/clientes_aplicacion.jpg'
  ];

  imagenesVeterinaria: string[] = [
    'images/proyectos/login.jpg',
    'images/proyectos/bienvenido_veterinaria.jpg',
    'images/proyectos/clientes.jpg',
    'images/proyectos/cliente_modal.jpg',
    'images/proyectos/mascotas.jpg',
    'images/proyectos/mascotas_modal.jpg',
    'images/proyectos/citas.jpg',
    'images/proyectos/citas_registrar.jpg',
    'images/proyectos/diagnostico_registrar.jpg',
    'images/proyectos/diagnostico.jpg',
    'images/proyectos/editar_diagnostico.jpg',
    'images/proyectos/ficha_diagnostico.jpg'
  ];

  // Variables de control unificadas
  galeriaActiva: string[] = [];
  indiceActual: number = 0;
  modalAbierto: boolean = false;

  // Una sola función para abrir cualquier galería
  abrirGaleria(imagenes: string[], indice: number = 0) {
    this.galeriaActiva = imagenes;
    this.indiceActual = indice;
    this.modalAbierto = true;
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.galeriaActiva.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.galeriaActiva.length) % this.galeriaActiva.length;
  }

  cerrarImagen() {
    this.modalAbierto = false;
    this.galeriaActiva = []; // Limpiamos para liberar memoria
  }

}

