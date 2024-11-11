import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollTopModule } from 'primeng/scrolltop';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ProjectsComponent, ScrollTopModule, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent {}
