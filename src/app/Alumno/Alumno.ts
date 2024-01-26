export interface IAlumno{
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
}


export class Alumno implements IAlumno{
    // nombre: string ;
    // apellidos: string ;
    // direccion: string ;
    // fnac: string ;
    // sexo: string ;
    constructor(public nombre: string, public apellidos: string, public direccion: string, public fnac: string, public sexo: string){
        // this.nombre = nombre;
        // this.apellidos = apellidos;
        // this.direccion = direccion;
        // this.fnac = fnac;
        // this.sexo = sexo;
    }

}