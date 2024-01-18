import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'lista-alumno',
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: 'AlumnoLista.component.html',
    styleUrls: ['./AlumnoLista.component.css']
})
export class AlumnoComponent {
    vector_any: any[] = [1,2,3,4,5,6,7,8,9,10];
    vector_string: string[] = ['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];
    vector_number: number[] = [1,2,3,4,5,6,7,8,9,10];
    alumnos: any[] = [
        { nombre: 'Perico', apellidos: 'Delgado', direccion: 'Segovia_City', fnac: '2/28/1967', sexo: 'Masculino' },
        { nombre: 'Miguel', apellidos: 'Indurain', direccion: 'Pamplona_City', fnac: '7/16/1949', sexo: 'Masculino' },
        { nombre: 'Jose María', apellidos: 'Jiménez', direccion: 'Cuenca_City', fnac: '5/5/1974', sexo: 'Masculino' },
        { nombre: 'Alberto', apellidos: 'Contador', direccion: 'Albacete_City', fnac: '12/6/1951', sexo: 'Masculino' },
        { nombre: 'Naruto', apellidos: 'Uzumaki', direccion: 'Konoha', fnac: '10/10/2003', sexo: 'Masculino' },
        { nombre: 'Goku', apellidos: 'Son', direccion: 'Capsule Corp City', fnac: '11/28/1981', sexo: 'Masculino' },
        { nombre: 'Sailor', apellidos: 'Moon', direccion: 'Tokyo', fnac: '6/30/2007', sexo: 'Femenino' },
        { nombre: 'Luffy', apellidos: 'Monkey D.', direccion: 'One Piece Island', fnac: '5/5/2002', sexo: 'Masculino' },
        { nombre: 'Ainz', apellidos: 'Ooal Gown', direccion: 'Gran Tumba de Nazarick', fnac: '7/30/0020', sexo: 'Masculino' },
        { nombre: 'Albedo', apellidos: 'White', direccion: 'Gran Tumba de Nazarick', fnac: '3/15/0500', sexo: 'Femenino' },
        { nombre: 'Shalltear', apellidos: 'Bloodfallen', direccion: 'Gran Tumba de Nazarick', fnac: '12/24/1800', sexo: 'Femenino' },
        { nombre: 'Demiurge', apellidos: 'Creations', direccion: 'Gran Tumba de Nazarick', fnac: '6/6/0500', sexo: 'Masculino' }
    ];
    visibles = true;
    alternarVisibles():void {
        this.visibles = !this.visibles;
    }





}
