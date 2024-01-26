import { CommonModule } from '@angular/common';
import { Component, Input , Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlumnoListaComponent as AlumnoListaComponent } from './AlumnoLista.component';
import { FormsModule } from '@angular/forms'; 


@Component({
    selector: 'cuantos-alumnos',
    standalone: true,
    imports: [CommonModule, RouterOutlet , AlumnoListaComponent , FormsModule],
    templateUrl: 'AlumnosCount.component.html',
    styleUrls: ['./AlumnoCount.component.css']
})

export class AlumnosCountComponent {
    ngOnInit() {
        this.cuandoCambiemos();
    }

    @Input()
    todos:number = 0;

    @Input()
    hombres:number = 0;

    @Input()
    mujeres:number = 0;

    
    opcionElegida: string = "Femenino";

    @Output()
    GlobalopcionElegida: EventEmitter<string> = new EventEmitter<string>();

    cuandoCambiemos(): void {
        this.GlobalopcionElegida.emit(this.opcionElegida);
    }




    visibles = true;
    alternarVisibles():void {
        this.visibles = !this.visibles;
    }
}

