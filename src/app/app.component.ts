import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';  // Optional if you need buttons
import { MenubarModule } from 'primeng/menubar'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,

    SidebarModule,
    ButtonModule,
    MenubarModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  
  isHovered = false;
  isExpanded = false;
  isVisible = true;  // To keep the sidebar visible by default

  onMouseEnter() {
    this.isHovered = true;
    this.isExpanded = true;
  }

  onMouseLeave() {
    this.isHovered = false;
    this.isExpanded = false;
  }
}
