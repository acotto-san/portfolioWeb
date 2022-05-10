import { Component, Input, OnInit } from '@angular/core';
import { DataserviceService } from '../../../persona.service';

@Component({
  selector: 'app-t-experiencia',
  templateUrl: './t-experiencia.component.html',
  styleUrls: ['./t-experiencia.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TExperienciaComponent implements OnInit { 
  experiencias?:any;
  @Input() curriculum?:any;

  constructor(private datos:DataserviceService) { }

  ngOnInit(): void {
    
  }
  
}
