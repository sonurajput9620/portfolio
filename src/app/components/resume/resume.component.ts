import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ProjectsComponent, ScrollTopModule, CommonModule, ButtonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1zqQNjulx3dh3y0TUbdbe04rYvcAnXOWR'; // Direct download link to your resume PDF file
    link.download = 'resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
