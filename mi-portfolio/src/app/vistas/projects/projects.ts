import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../services/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data: Project[]) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error al cargar proyectos:', error);
        this.errorMessage = 'Error al cargar los proyectos';
        this.isLoading = false;
      }
    });
  }

  goToGithub(url: string): void {
    window.open(url, '_blank');
  }
}