export interface IAlumno{
    nombre: string;
    apellidos: string;
    direccion: string;
    fnac: string;
    sexo: string;
    nom_padre?: string;
    // edad(): number;
}


export class Alumno implements IAlumno{
    // nombre: string ;
    // apellidos: string ;
    // direccion: string ;
    // fnac: string ;
    // sexo: string ;
    constructor(public nombre: string, public apellidos: string, public direccion: string, public fnac: string, public sexo: string, public nom_padre?: string){
        // this.nombre = nombre;
        // this.apellidos = apellidos;
        // this.direccion = direccion;
        // this.fnac = fnac;
        // this.sexo = sexo;
    }

    // edad(): number {
    //     const hoy = new Date();
    //     const nac = new Date(this.fnac);
    //     return hoy.getFullYear() - nac.getFullYear();
    // }
}