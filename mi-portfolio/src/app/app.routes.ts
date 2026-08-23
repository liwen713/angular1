import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './vistas/home/home';
import { About } from './vistas/about/about';
import { ProjectsComponent } from './vistas/projects/projects';
import { Contact } from './vistas/contact/contact';
import { Registro } from './vistas/registro/registro';
import { ProjectForm } from './vistas/project-form/project-form';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project-form', component: ProjectForm },
  { path: 'contact', component: Contact },
  { path: 'registro', component: Registro },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }