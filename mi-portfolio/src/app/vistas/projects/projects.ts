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

export class ProjectsComponent {
  projects: Project[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';
  goToGithub: any;

  projectsList: any;

  constructor(private projectService: ProjectService) 
  { 
    this.projectService.getProjects().subscribe({
    next: (data) => {
      this.projectsList = data;
      console.log(data);
    },
    error: (error) => console.error(error),
    complete: () => console.info('complete') 
    })
    }
  }