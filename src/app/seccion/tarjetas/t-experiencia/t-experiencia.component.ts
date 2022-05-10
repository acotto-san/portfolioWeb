import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../../dataservice.service';

@Component({
  selector: 'app-t-experiencia',
  templateUrl: './t-experiencia.component.html',
  styleUrls: ['./t-experiencia.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TExperienciaComponent implements OnInit { 
  experienciasJson?:any;
  logoEmpresa?:string;

  constructor(private datos:DataserviceService) { }

  ngOnInit(): void {
    this.datos.getData('http://localhost:8080/persona/82').subscribe(data => {this.experienciasJson = data.curriculum.experiencias});
  }
  
}
