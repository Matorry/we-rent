import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './contact.form.component.html',
  styleUrl: './contact.form.component.scss',
})
export class ContactFormComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  comments = new FormControl('');
  isOkTerms = new FormControl(false, [Validators.requiredTrue]);
  contactForm = this.fb.group({
    name: this.name,
    email: this.email,
    phone: this.phone,
    comments: this.comments,
    isOkTerms: this.isOkTerms,
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm); //Logica del Nodemailer

    this.router.navigate(['']); //  modal(feedback usuario)
  }

  formStructure = {
    name: {
      type: 'text',
      errors: {
        required: 'El nombre del usuario es obligatorio',
      },
    },
    phone: {
      type: 'text',
      errors: {
        required: 'El telefono del usuario es obligatorio',
      },
    },
    email: {
      type: 'email',
      errors: {
        required: 'El email es obligatorio',
        email: 'El email no es válido',
      },
    },
    comments: {
      type: 'textarea',
    },
    isOkTerms: {
      type: 'checkbox',
      errors: {
        required: 'Debe aceptar los términos y condiciones',
      },
    },
  };
}
