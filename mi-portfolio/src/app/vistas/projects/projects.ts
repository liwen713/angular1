import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../services/proyectos-service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class ProjectsComponent {
agregarProyecto() {
throw new Error('Method not implemented.');
}
  projectsList: ProjectsContent[] = [];
  isLoading: boolean = true;
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
  id: string;  // string, no number — en tu JSON es "1", "2", etc.
  name: string;
}

export interface ProjectsContent {
  id: string;  // string, no number
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
