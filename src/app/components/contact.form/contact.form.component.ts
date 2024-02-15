import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './contact.form.component.html',
  styleUrl: './contact.form.component.scss',
})
export class ContactFormComponent {
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', Validators.required],
      nda: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contact: Contact = this.contactForm.value;
    }
  }
}
