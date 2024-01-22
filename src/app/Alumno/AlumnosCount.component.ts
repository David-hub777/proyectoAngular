import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnoListaComponent as AlumnoListaComponent } from './AlumnoLista.component';


@Component({
    selector: 'cuantos-alumnos',
    standalone: true,
    imports: [CommonModule, RouterOutlet , AlumnoListaComponent],
    templateUrl: 'AlumnosCount.component.html',
    styleUrls: ['./AlumnoCount.component.css']
})

export class AlumnosCountComponent {
    //Constructor ChatGPT
    constructor(private alumnoListaComponent: AlumnoListaComponent) {
        // this.alumnoListaComponent.getTodos();
    }


    @Input()
    todos:number = 0;

    @Input()
    hombres:number = 0;

    @Input()
    mujeres:number = 0;
    





    visibles = true;
    alternarVisibles():void {
        this.visibles = !this.visibles;
    }
}
