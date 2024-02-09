import { Component } from "@angular/core";

@Component({
    selector: 'profesor',
    standalone: true,
    templateUrl: './Profesor.component.html',
    styleUrls: ['Profesor.component.css']
})
export class ProfesorComponent {
    profesores: any[] = [
        { nombre: 'Perico', apellidos: 'Delgado', direccion: 'Segovia_City', fnac: '2/28/1967', sexo: 'Masculino', nom_padre: 'Pepe' },
        { nombre: 'Miguel', apellidos: 'Indurain', direccion: 'Pamplona_City', fnac: '7/16/1949', sexo: 'Masculino' },
        { nombre: 'Jose María', apellidos: 'Jiménez', direccion: 'Cuenca_City', fnac: '5/5/1974', sexo: 'Masculino' },
        { nombre: 'Alberto', apellidos: 'Contador', direccion: 'Albacete_City', fnac: '12/6/1951', sexo: 'Masculino' }
    ];
}
