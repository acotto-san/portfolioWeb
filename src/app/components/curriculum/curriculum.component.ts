import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaPuesto } from 'src/app/models/experiencia-puesto';
import { Persona } from 'src/app/models/persona';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import { PersonaService } from 'src/app/services/persona.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { PuestoDialogComponent } from '../dialogs/puesto-dialog/puesto-dialog.component';
import { Mock2Component } from '../mock2/mock2.component';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  persona:Persona = new Persona({});
  
  constructor(private personaServ:PersonaService, 
              private puestoServ:PuestoService,
              private experienciaServ:ExperienciaLaboralService,
              private dialog:MatDialog
              ) { }

  ngOnInit(): void {
    this.traerPersona()
  }

  openPuestoDialog(event:string,
                   argPayload:ExperienciaLaboral|ExperienciaPuesto
                   ): void {
    const dialogRef = this.dialog.open(PuestoDialogComponent, {
      width:'30rem',
      data: {intencion:event,payload:argPayload}
    });

    dialogRef.afterClosed().subscribe( result => {
      
      this.accionarSegunCierreDeDialog(result);
      this.traerPersona();

    }); 
  }
 
  accionarSegunCierreDeDialog(arg:any=null){
    if(arg){

      switch(arg.intencion){
        
        case 'editar':
          this.editPuesto(arg.payload);
          break;
        
        case 'eliminar':
          this.eliminarPuesto(arg.payload);
          break;

        case 'crear':
          this.editExperienciaParaAgregarPuesto(arg.payload);
          break;

        case 'cerrar':
          //usuario cerro el modal desde el boton cerrar
          break;

      }

    }
  }

  editPuesto(puesto:ExperienciaPuesto){
    this.puestoServ.editPuesto(puesto).subscribe({
      next:(response)=>{
        console.log("Puesto updateado")
      },
      error:()=>{
        alert("Error al updatear puesto")
      }

    })
  }

  eliminarPuesto(id:number){
    this.puestoServ.removePuesto(id).subscribe({
      next:()=>{
        console.log("Puesto borrado")
      },
      error:()=>{
        alert("Error al borrar puesto")
      }

    })
  }
  editExperienciaParaAgregarPuesto(experiencia:ExperienciaLaboral){
    this.experienciaServ.editExperiencia(experiencia).subscribe({
      next:(response)=>{
        console.log("Puesto creado")
        console.log(response)
        console.log(this.persona)
      },
      error:()=>{
        alert("Error al crear puesto")
      }

    })
  }
  traerPersona(){
    this.personaServ.getPersona().subscribe({
      next:(response)=>{
        this.persona = new Persona(response)
        console.log(response)
      },
      error:()=>{
        alert("error al cargar persona")
      }
    });
  }
}