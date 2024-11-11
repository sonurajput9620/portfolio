import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { Clipboard } from '@angular/cdk/clipboard';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DialogModule,
    ToastModule,
    RippleModule,
  ],
  providers: [MessageService],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  public visible = false;

  public form = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private messageService: MessageService,
    private clipboard: Clipboard
  ) {}

  get f() {
    return this.form.value;
  }

  private showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please fill all the fields.',
    });
  }

  public onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      this.showError();
      return;
    }
    this.visible = true;
  }

  public copyMsg() {
    const { name, subject, message } = this.f;

    this.clipboard.copy(`
        Subject: ${subject}

        Dear Sonu,

        ${message}

        Best regards,
        ${name}
      `);

      
        window.open('mailto:develop.sonu@gmail.com?subject=Your Subject&body=Your message here', '_blank');
    
      // window.location.href = '';
      this.visible = false;
  }
}
