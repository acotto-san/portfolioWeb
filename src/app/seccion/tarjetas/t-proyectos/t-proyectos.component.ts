import { Component, Input, OnInit } from '@angular/core';
import { IProyecto } from 'src/app/interfaces/proyecto';

@Component({
  selector: 'app-t-proyectos',
  templateUrl: './t-proyectos.component.html',
  styleUrls: ['./t-proyectos.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TProyectosComponent implements OnInit {
@Input() proyectos?:IProyecto[];

  constructor() { }

  ngOnInit(): void {
  }

}
