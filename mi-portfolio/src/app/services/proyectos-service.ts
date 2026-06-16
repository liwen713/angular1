import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Projects {

  private urlApi:string = "http://localhost:3000/projects";

  constructor(private http:HttpClient) {}

  getProjects(): Observable<any> 
  {
    return this.http.get(this.urlApi);
  }
}
