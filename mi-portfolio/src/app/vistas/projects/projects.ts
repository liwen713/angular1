import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'Citas de Breaking Bad',
      description: 'Una lista de las citas más famosas de la serie Breaking Bad. Este proyecto se realizó en marco a la materia "Desarrollo" en el año 2024. Es un proyecto individual.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/liwen713/citasBreakingBad'
    },
    {
      id: 2,
      name: 'Gestión de Productos',
      description: 'Gestor de productos que utiliza LocalStorage, realizado durante el año 2024 en marco de la materia "Desarrollo", integrando funciones como agregar, listar y eliminar productos, además de buscarlos por categoría, actualizar el stock y calcular el valor total del inventario. Es un proyecto individual.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/liwen713/gestionProductosLocalStorage'
    },
    {
      id: 3,
      name: 'Portfolio Personal',
      description: 'Mi portafolio personal usando Angular. Estoy realizando este proyecto en marco de la materia "Desarrollo. El objetivo es crear un sitio web que muestre mi trabajo y experiencia. Es un proyecto individual.',
      technologies: ['Angular', 'Javascript', 'CSS'],
      github: 'https://github.com/liwen713/angular1'
    }
  ];

  goToGithub(url: string) {
  window.open(url, '_blank');
  }
}