import { Component, Input, OnInit } from '@angular/core';
import { IExperienciaEducativa } from 'src/app/interfaces/experienciaEducativa';

@Component({
  selector: 'app-t-educacion',
  templateUrl: './t-educacion.component.html',
  styleUrls: ['./t-educacion.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TEducacionComponent implements OnInit {
@Input() estudios?:IExperienciaEducativa[];
onEditEducacion?:IExperienciaEducativa;
onEditModal:boolean = false;

show:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  comenzarEdicionDeEducacion(educacion:IExperienciaEducativa) {
    this.onEditEducacion = educacion;
    this.onEditModal = !this.onEditModal;
    console.log(this.onEditEducacion);
  }


}
