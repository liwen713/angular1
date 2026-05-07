import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ProjectsComponent } from './projects/projects';
import { Contact } from './contact/contact';
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