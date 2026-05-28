import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './vistas/home/home';
import { About } from './vistas/about/about';
import { ProjectsComponent } from './vistas/projects/projects';
import { Contact } from './vistas/contact/contact';
import { NavComponent } from './shared/nav/nav';
import { FooterComponent } from './shared/footer/footer';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: Contact },
  { path: 'nav', component: NavComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }