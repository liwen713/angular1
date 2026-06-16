import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Projects } from '../../services/proyectos-service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})

export class ProjectsComponent {
  projectsList: ProjectsContent[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

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