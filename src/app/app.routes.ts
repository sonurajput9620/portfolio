import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/landing/landing.component').then(m => m.LandingComponent)

    },
    {
        path: 'resume',
        loadComponent: () => import('./components/resume/resume.component').then(m => m.ResumeComponent)

    },
    {
        path: '**',
        loadComponent: () => import('./components/landing/landing.component').then(m => m.LandingComponent)
    }
];
