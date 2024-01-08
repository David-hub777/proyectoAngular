import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AlumnoComponent } from "./Alumno/Alumno.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, AlumnoComponent],
    template: `
              <div class="container">
                <h1>{{encabezado}}</h1>
                <el-alumno></el-alumno>
              </div>
`,
    //templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})

export class AppComponent {
  encabezado: string = 'Datos del Alumno: ';
}
