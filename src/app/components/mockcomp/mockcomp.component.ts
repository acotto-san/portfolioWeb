import { Component, OnInit } from '@angular/core';
import { Curriculum } from 'src/app/models/curriculum';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Mock2Component } from '../mock2/mock2.component';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mockcomp',
  templateUrl: './mockcomp.component.html',
  styleUrls: ['./mockcomp.component.css']
})
export class MockcompComponent implements OnInit {

  persona!:Persona;
  constructor(private personaServ:PersonaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.cargaDePersona()
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(Mock2Component, {
      width: '250px',
      data: this.persona,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.persona.nombre = result;
      this.cargaDePersona();
    });
  }
  cargaDePersona(idPersona:number=1){
    this.personaServ.getPersona(idPersona).subscribe({
      next:(response)=>{
        this.persona = new Persona(response)
        console.log(JSON.stringify(response))
        console.log(response)
        console.log("persona get: success")
      },
      error:()=>{
        alert("error al cargar persona")
      }
    });
  }

  
}


