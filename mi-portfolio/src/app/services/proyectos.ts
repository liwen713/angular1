import { HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Projects {

  private urlApi:string = "http://localhost:3000/proyectos";

  constructor(private http:HttpClient) {}

  getProjects(): Observable<any> 
  {
    return this.http.get(this.urlApi);
  }
}
