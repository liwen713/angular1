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
  projects: Projects[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';
  goToGithub: any;

  projectsList: any;

  constructor(private projectService: Projects) 
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