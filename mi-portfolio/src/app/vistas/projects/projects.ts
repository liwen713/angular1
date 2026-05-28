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
      description: 'Una lista de las citas más famosas de la serie Breaking Bad. Este proyecto se realizó en marco a la materia "Desarrollo Web".',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/liwen713/citasBreakingBad'
    },
    {
      id: 2,
      name: 'Gestión de Productos',
      description: 'Gestor de productos que utiliza LocalStorage.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/liwen713/gestionProductosLocalStorage'
    },
    {
      id: 3,
      name: 'Portfolio Personal',
      description: 'Mi portafolio personal usando Angular.',
      technologies: ['Angular', 'Javascript', 'CSS']
    }
  ];

  goToGithub(url: string) {
  window.open(url, '_blank');
  }
}