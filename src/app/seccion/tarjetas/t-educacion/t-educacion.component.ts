import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaEducativa } from 'src/app/interfaces/experienciaEducativa';

@Component({
  selector: 'app-t-educacion',
  templateUrl: './t-educacion.component.html',
  styleUrls: ['./t-educacion.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TEducacionComponent implements OnInit {
@Input() estudios?:ExperienciaEducativa[];
show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
