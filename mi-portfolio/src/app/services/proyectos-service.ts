import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../vistas/projects/projects';
@Injectable({
  providedIn: 'root',
})
export class Projects {
  private urlApi:string = "http://localhost:3000/projects";

  constructor(private http:HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.urlApi);
  }

  getProjectById(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.urlApi}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.urlApi, project);
  }

  updateProject(id: string, project: Project): Observable<Project> {
    return this.http.put<Project>(
      `${this.urlApi}/${id}`,
      project
    );
  }

}

