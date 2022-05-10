import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Persona } from './interfaces/persona';
import { DataserviceService } from './persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolioWeb';

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
