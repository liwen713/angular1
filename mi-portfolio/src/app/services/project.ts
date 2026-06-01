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

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<{ projects: Project[] }>(this.jsonUrl)
      .pipe(
        map(data => data.projects)
      );
  }
}