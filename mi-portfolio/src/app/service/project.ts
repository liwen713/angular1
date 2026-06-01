import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private jsonUrl = 'assets/data/projects.json';
  private apiUrl = 'https://api.github.com/users/liwen713';

  constructor(private http: HttpClient) { }

  getProjectsFromJson(): Observable<Project[]> {
    return this.http.get<{ projects: Project[] }>(this.jsonUrl)
      .pipe(
        map(data => data.projects)
      );
  }

  getProjectsFromGithub(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map(repos => repos.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description || 'Sin descripción',
          technologies: ['GitHub'],
          github: repo.html_url
        })))
      );
  }


  getAllProjects(): Observable<Project[]> {
    return this.getProjectsFromJson();   // para obtener proyectos combinados (json+github)
  }
}