import { Component } from '@angular/core';

@Component({
    selector: 'el-alumno',
    standalone: true,
    // imports: [CommonModule, RouterOutlet],
    templateUrl: './Alumno.component.html',
    styleUrls: ['./Alumno.component.css']
    // styleUrl: './app.component.css'
})
export class AlumnoComponent {
    columnas: number = 2;
    nombre: string = 'Perico';
    apellidos: string = 'Delgado';
    direccion: string = 'Segovia City';
    edad: number = 55;
    visibles: boolean = true;


    alternarVisibles():void {
        this.visibles = !this.visibles;
    }



}
