import { Injectable, NgModule } from '@angular/core';
import { Alumno } from './Alumno';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [HttpClientModule],
	providers: [HttpClient]
})

@Injectable({
	providedIn: 'root'
})
export class AlumnoService {
	private alumnos: Alumno[] = [];

	constructor(private http: HttpClient) { }
	private apiUrl = "https://localhost:44332/api/Alumno";

	// Método para obtener datos de la API
	getAlumnosFromAPI(): Observable<Alumno[]> {
		return this.http.get<Alumno[]>(this.apiUrl);
	}

	ngOnInit(): void {
		this.init();
	}

	init(): void {
		this.getAlumnosFromAPI().subscribe(
			data => {
				// Manejar los datos cuando estén disponibles
				this.alumnos = data;
			},
			error => {
				// Manejar errores si es necesario
				console.error('Error al obtener alumnos', error);
			}
		);
	}



	getAlumnos(): Alumno[] {
		return [
			{ nombre: 'Perico', apellidos: 'Delgado', direccion: 'Segovia_City', fnac: '2/28/1967', sexo: 'Masculino', nom_padre: 'Pepe' },
			{ nombre: 'Miguel', apellidos: 'Indurain', direccion: 'Pamplona_City', fnac: '7/16/1949', sexo: 'Masculino' },
			{ nombre: 'Jose María', apellidos: 'Jiménez', direccion: 'Cuenca_City', fnac: '5/5/1974', sexo: 'Masculino' },
			{ nombre: 'Alberto', apellidos: 'Contador', direccion: 'Albacete_City', fnac: '12/6/1951', sexo: 'Masculino' },
			{ nombre: 'Ainz', apellidos: 'Ooal Gown', direccion: 'Gran Tumba de Nazarick', fnac: '7/30/0020', sexo: 'Masculino' },
			{ nombre: 'Albedo', apellidos: 'White', direccion: 'Gran Tumba de Nazarick', fnac: '3/15/0500', sexo: 'Femenino' },
			{ nombre: 'Shalltear', apellidos: 'Bloodfallen', direccion: 'Gran Tumba de Nazarick', fnac: '12/24/1800', sexo: 'Femenino' },
			{ nombre: 'Demiurge', apellidos: 'Creations', direccion: 'Gran Tumba de Nazarick', fnac: '6/6/0500', sexo: 'Masculino' }
		];
	}

	agregarAlumno(alumno: Alumno): void {
		this.alumnos.push(alumno);
	}

	eliminarAlumno(alumno: Alumno): void {
		const index = this.alumnos.indexOf(alumno);
		if (index !== -1) {
			this.alumnos.splice(index, 1);
		}
	}
}