import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from './Alumno/Alumno.component';
import { AlumnoListaComponent as AlumnoListaComponent } from './Alumno/AlumnoLista.component';
import { AlumnosCountComponent as a } from './Alumno/AlumnosCount.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, AlumnoComponent, AlumnoListaComponent , a, HttpClientModule],
    template: `
        <div class="container">
            <h1 style="margin-left: 10px;">
                {{ encabezado }}{{ getNombreCompleto() }}
            </h1>
            <h2 style="margin-left: 10px;">
                Nota máxima:
                {{ encabezado == '' ? getNombreCompleto() : 5 + 5 }}
            </h2>
            <img
                src="{{ imagen }}"
                alt="Avatar"
                width="50"
                height="50"
                style="margin-left: 20px;margin-bottom: 20px;"
            />
            <img
                [src]="imagen"
                alt="Avatar"
                width="50"
                height="50"
                style="margin-left: 20px;margin-bottom: 20px;"
            />
            <img
                src="https://www.salesianos.edu/{{ imagen2 }}"
                alt="Avatar"
                width="80"
                height="50"
                style="margin-left: 20px;margin-bottom: 20px;"
            />

            <!-- <cuantos-alumnos></cuantos-alumnos> -->

            <lista-alumno></lista-alumno>
            
            <el-alumno></el-alumno>
			<button [disabled]="desactivado" style="margin-left: 90px;">Botón</button>
			<!-- NO RECONOCE LOS BOOLEANOS ENTRE LLAVES -->
			<button disabled="{{desactivado}}" style="margin-left: 90px;">Pulsa Aqui</button>
            <br/><br/>
            <button  style="margin-left: 90px;" class="color">Boton1</button>
            <button  style="margin-left: 90px;" [class]="aplicarClases">Boton1</button>
            <button  style="margin-left: 90px;" class="color {{aplicarClases}}">Boton2</button>
            <button  style="margin-left: 90px;" [class.color]="true">Boton3</button>
            <button  style="margin-left: 90px;" class="color negrita italica" [class.negrita]='aplicarNegrita'>Boton4</button>
            
            <button  style="margin-left: 90px;" [ngClass]="addClasses()" >Boton5</button>
            <br/>
            <div style="min-height: 115px;">
                <img src="./assets/banderaMexico.png" style="margin-left: 147px;" width="200" height="111" *ngIf='visible'>
            </div>
            <br/><button style="margin-left:212px;padding: 10px; border-radius: 25px;" class="color negrita italica" (click)="onClick()">Boton7</button>
            <br/><br/><br/><br/>
        </div>
    `,
    //templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    visible: boolean = false;
    onClick() {
        this.visible = !this.visible;
    }





    // segundo grupo de clases de Agustin
    aplicarClases: string = "italica negrita"
    aplicarNegrita: boolean = true;

    aplicaColor: boolean = true;
    addClasses() {
        let classes = {
            negrita: this.aplicarNegrita,
            color: this.aplicaColor
        };
        return classes;
    }











    // primer grupo de clases de Agustin
    encabezado: string = 'Datos del Alumno: ';
    imagen: string =
        'data:image/png;base64,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';
    imagen2: string = 'wp-content/uploads/2020/03/Logo-Salesianos_vertical.png';

	desactivado: boolean = false;

    nombre: string = 'Perico';
    apellidos: string = 'Delgado';

    getNombreCompleto(): string {
        return this.nombre + ' ' + this.apellidos;
    }
}
