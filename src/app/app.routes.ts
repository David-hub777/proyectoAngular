import { Routes } from '@angular/router';
import { AlumnoListaComponent } from './Alumno/AlumnoLista.component';
import { ProfesorComponent } from './Profesores/Profesor.component';
import { PaginaNoEncontrada } from './Otros/PaginaNoEncontrada';
import { AppComponent } from './app.component'; 

export const routes: Routes = [
    { path: 'Alumnos', component: AlumnoListaComponent},
    { path: 'Profesores', component: ProfesorComponent },
    { path: 'error', component: PaginaNoEncontrada },
    { path: 'App', component: AppComponent },
    { path: '', redirectTo: '/App', pathMatch: 'full' },
    { path: '**', component: PaginaNoEncontrada  }
];
