import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Curriculum } from 'src/app/interfaces/curriculum';
import { Persona } from 'src/app/interfaces/persona';
import { PersonaService } from '../../servicios/persona.service';

@Component({
  selector: 'app-cv-seccion',
  templateUrl: './cv-seccion.component.html',
  styleUrls: ['./cv-seccion.component.css']
})
export class CvSeccionComponent implements OnInit {
  @Input() curriculum?:Curriculum;
  public asd:string = "aaa";

  constructor() { }

  ngOnInit(){

  }

}
