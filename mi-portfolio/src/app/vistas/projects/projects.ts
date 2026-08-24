import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../services/proyectos-service';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class ProjectsComponent{
  projects: Project[] = [];
  isLoading: boolean = true;
  ngOnInit(): void {
    this.loadProjects();
  };
  loadProjects(): void {
    this.isLoading=true;
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al agregar proyectos', error);
        this.isLoading = false;
      }
    });
  }
agregarProyecto() {
throw new Error('Method not implemented.');
}
  projectsList: Project[] = [];
  errorMessage: string = '';
  Descripcion: any;
  Link: any;
  Nombre: any;
  registerForm: any;

  constructor(private projectService: Projects) 
  { 
    this.projectService.getProjects().subscribe({
    next: (data) => {
      this.projectsList = data;
      this.isLoading = false;
    },
    error: (error) => {
      console.error(error);
      this.errorMessage = 'Error loading projects';
      this.isLoading = false;
    },
    complete: () => {
      this.isLoading = false;
      console.info('complete');
    }
    })
  
    }

    goToGithub(url: string): void {
      window.open(url, '_blank');
    }

  }

export interface Technology {
  id?: string;
  name: string;
}

export interface Project {
  id?: string;
  name: string;
  description: string;
  technologies: Technology[];
  github: string;
}

export class Registro {

private formBuilder = inject(FormBuilder);

registerForm= this.formBuilder.group({
  nombre:['', [Validators.required]], //uno por cada input
  descripcion:['', [Validators.required]],
  tecnologias:['', [Validators.required]],
  link:['', [Validators.required]]
})

get Nombre() {
  return this.registerForm.get('nombre');
}

get Descripcion() {
  return this.registerForm.get('descripcion');
}

get Tecnologias() {
  return this.registerForm.get('tecnologias');
}

get Link() {
  return this.registerForm.get('link');
}


}

