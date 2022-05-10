import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/interfaces/experienciaLaboral';
import { DataserviceService } from '../../../persona.service';

@Component({
  selector: 'app-t-experiencia',
  templateUrl: './t-experiencia.component.html',
  styleUrls: ['./t-experiencia.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TExperienciaComponent implements OnInit { 
  @Input() experiencias?:ExperienciaLaboral[];

  constructor(private datos:DataserviceService) { }

  ngOnInit(): void {
    
  }
  
}
