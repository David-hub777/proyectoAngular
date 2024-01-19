import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'AlumnoTitleReference',
    standalone: true
})
export class AlumnoTitleReferencePipe implements PipeTransform {
    transform(value: any, sexo: string ): string {
        if (sexo == 'Masculino' || sexo == 'Hombre') {
            return 'Sr. ' + value.toString();
        }
        else
            return 'Sra. ' + value.toString();
    }
}
// Path: src/app/Alumno/AlumnoTitleReference.pipe.ts