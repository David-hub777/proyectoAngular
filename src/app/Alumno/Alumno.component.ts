import { Component } from '@angular/core';

@Component({
    selector: 'el-alumno',
    standalone: true,
    // imports: [CommonModule, RouterOutlet],
    // template: ,
    templateUrl: './Alumno.component.html',
    // styleUrls: ['./Alumno.component.css']
    // styleUrl: './app.component.css'
})
export class AlumnoComponent {
    nombre: string = 'Eibon';
    apellidos: string = 'Laita';
    direccion: string = 'Morths City';
    edad: number = 77;
}
