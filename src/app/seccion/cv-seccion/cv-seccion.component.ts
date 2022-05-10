import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/persona';
import { DataserviceService } from '../../persona.service';

@Component({
  selector: 'app-cv-seccion',
  templateUrl: './cv-seccion.component.html',
  styleUrls: ['./cv-seccion.component.css']
})
export class CvSeccionComponent implements OnInit {
  public persona?: Persona;

  constructor(private personaService:DataserviceService) { }

  ngOnInit(){
    this.getPersona();
  }

  public getPersona(): void{
    this.personaService.getPersona().subscribe(
      (response: Persona) => {
        this.persona = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
