import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnoTitleReferencePipe } from './AlumnoTitelReference.pipe';
import { AlumnosCountComponent } from './AlumnosCount.component';
import { IAlumno , Alumno } from './Alumno';
import { AlumnoService } from './AlumnoService';
// import { getAlumnos } from './AlumnoService';





@Component({
    selector: 'lista-alumno',
    standalone: true,
    imports: [CommonModule, RouterOutlet  , AlumnoTitleReferencePipe , AlumnosCountComponent],
    providers: [AlumnoService],
    templateUrl: 'AlumnoLista.component.html',
    styleUrls: ['./AlumnoLista.component.css'],
})



export class AlumnoListaComponent implements OnInit {
    // VECTORES BY COPILOT
    vector_any: any[] = [1,2,3,4,5,6,7,8,9,10];
    vector_string: string[] = ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];
    vector_number: number[] = [1,2,3,4,5,6,7,8,9,10];
    // VECTOR DE AGUSTIN
    alumnos: Alumno[] = [];
    //CONSTRUCTOR - DE AGUSTIN
    constructor(public losAlumnos: AlumnoService){
        // this.alumnos = losAlumnos.getAlumnos(); // Se inician los atributos en el init  -> ngOnInit(): void {
    }

    ngOnInit(): void {
        const alumnoService = new AlumnoService(); // Copilot Methods
        this.alumnos = this.losAlumnos.getAlumnos(); // this obligatorios !!!!!!!!!!!!! (al menos este:"this.losAlumnos.getAlumnos")
    }

    //GGGGGGGGGGEEEEEEEEEEEEETTTTTTTTTTTTTTTTTTT
    //Los metodos getNum SON LOS DE AGUSTIN
    // @Input()
    getTodos(): number {
        return this.alumnos.length;
    }
    getNumTodos(): number {
        return this.alumnos.length;
    }
    getHombres(): number {
        let count = 0;
        for (const alumno of this.alumnos) {
            if (alumno.sexo === 'Masculino') {
                count++;
            }
        }
        return count;
    }
    getNumHombres(): number {
        return this.alumnos.filter(alumno => alumno.sexo === 'Masculino').length;
    }
    getMujeres(): number {
        let count = 0;
        for (const alumno of this.alumnos) {
            if (alumno.sexo === 'Femenino') {
                count++;
            }
        }
        return count;
    }
    getNumMujeres(): number {
        return this.alumnos.filter(alumno => alumno.sexo === 'Femenino').length;
    }
    //GGGGGGGGGGEEEEEEEEEEEEETTTTTTTTTTTTTTTTTTT



    seleccion: string = "Todos";// Tiene que ser igual a lo que hay en opcionElegida
    // @Output()
    actualizarSeleccion(nuevoValor: string): void {
        this.seleccion = nuevoValor;
    }
    //Metodo de Agustin
    alCambiar(nuevoValor: string): void {
        this.seleccion = nuevoValor;
    }


    visibles = true;
    alternarVisibles():void {
        this.visibles = !this.visibles;
    }
}
