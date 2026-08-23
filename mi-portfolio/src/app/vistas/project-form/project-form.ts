import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Projects } from '../../services/proyectos-service';
import { Project } from '../projects/projects';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './project-form.html',
  styleUrl: './project-form.css',
})
export class ProjectForm {

    projectForm;

  constructor(
    private fb: FormBuilder,
    private projectService: Projects,
    private router: Router
  ) {
    this.projectForm = this.fb.nonNullable.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ]
      ],

      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(500)
        ]
      ],

      technologies: [
        '',
        [
          Validators.required,
          Validators.minLength(2)
        ]
      ],

      github: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^https?:\/\/.+/
          )
        ]
      ]
    });
  }

  get name() {
    return this.projectForm.controls.name;
  }

  get description() {
    return this.projectForm.controls.description;
  }

  get technologies() {
    return this.projectForm.controls.technologies;
  }

  get github() {
    return this.projectForm.controls.github;
  }

  onSubmit(): void {

    if (this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    const formValue = this.projectForm.getRawValue();

    const project: Project = {
      name: formValue.name,
      description: formValue.description,

      technologies: formValue.technologies
        .split(',')
        .map((technology, index) => ({
          id: String(index + 1),
          name: technology.trim()
        })),

      github: formValue.github
    };

    this.projectService.createProject(project)
      .subscribe({
        next: () => {

          this.projectForm.reset();

          this.router.navigate(['/projects']);
        },

        error: (error) => {
          console.error('Error al crear el proyecto', error);
        }
      });
  }
}

