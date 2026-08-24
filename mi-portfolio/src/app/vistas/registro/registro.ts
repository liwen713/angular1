import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

private formBuilder = inject(FormBuilder);

registerForm= this.formBuilder.group({
  nombre:['', [Validators.required]], //uno por cada input
  email:['ejemplo@gmail.com', [Validators.required, Validators.email]],
  contrasenia1:['', [Validators.required, Validators.minLength(6)]],
  contrasenia2:['', [Validators.required, Validators.minLength(6)]]
})

get Nombre() {
  return this.registerForm.get('nombre')!;
}

get Email() {
  return this.registerForm.get('email')!;
}

get Contrasenia1() {
  return this.registerForm.get('contrasenia1')!;
}

get Contrasenia2() {
  return this.registerForm.get('contrasenia2')!;
}

registrarUsuario()
{
  if (this.registerForm.valid) {
    alert('Registro exitoso');
    console.log(this.registerForm.value)
  } else {
    alert('Por favor, complete todos los campos correctamente.');
  }
  }
}
