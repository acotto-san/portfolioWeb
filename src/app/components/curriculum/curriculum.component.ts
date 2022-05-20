import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curriculum } from 'src/app/models/curriculum';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaPuesto } from 'src/app/models/experiencia-puesto';
import { Persona } from 'src/app/models/persona';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import { PersonaService } from 'src/app/services/persona.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { ExperienciaDialogComponent } from '../dialogs/experiencia-dialog/experiencia-dialog.component';
import { PuestoDialogComponent } from '../dialogs/puesto-dialog/puesto-dialog.component';
import { Mock2Component } from '../mock2/mock2.component';

interface DataParaLlamarAlDialog{
  intencion:"crear"|"editar";
  payload:Curriculum|ExperienciaLaboral|ExperienciaPuesto;
}

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})


export class CurriculumComponent implements OnInit {
  persona:Persona = new Persona({});
  idPersona:number = 1;

  public content: any = {};
  public other_content: any = {};

  constructor(private personaServ:PersonaService, 
              private puestoServ:PuestoService,
              private curriculumServ:CurriculumService,
              private experienciaServ:ExperienciaLaboralService,
              private dialog:MatDialog
              ) { }

  ngOnInit(): void {
    this.traerPersona()
  }

  traerPersona(id:number=this.idPersona){
    this.personaServ.getPersona(id).subscribe({
      next:(response)=>{
        this.persona = new Persona(response)
        console.log("traigo persona")
      },
      error:()=>{
        alert("error al cargar persona")
      }
    });
  }


  openPuestoDialog(inputData:DataParaLlamarAlDialog): void {
    const dialogRef = this.dialog.open(PuestoDialogComponent, {
      width:'30rem',
      data: inputData
    });

    dialogRef.afterClosed().subscribe( result => {
      
      this.accionDespDelCierreDePuestoDialog(result);

    }); 
  }
  accionDespDelCierreDePuestoDialog(arg:any=null){
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
        console.log("Puesto updateado");
        this.traerPersona();
      },
      error:()=>{
        alert("Error al updatear puesto");
      }

    })
  }
  eliminarPuesto(id:number){
    this.puestoServ.removePuesto(id).subscribe({
      next:()=>{
        console.log("Puesto borrado")
        this.traerPersona();
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
        this.traerPersona();
      },
      error:()=>{
        alert("Error al crear puesto")
      }

    })
  }

  openExperienciaDialog(inputData:DataParaLlamarAlDialog
    ): void {
    const dialogRef = this.dialog.open(ExperienciaDialogComponent, {
    width:'30rem',
    data: inputData
    });

    dialogRef.afterClosed().subscribe( result => {

    this.accionDespDelCierreDeExperienciaDialog(result);

    }); 
  }
  accionDespDelCierreDeExperienciaDialog(arg:any=null){
    if(arg){

      switch(arg.intencion){
        
        case 'editar':
          this.editarExperiencia(arg.payload);
          break;
        
        case 'eliminar':
          this.eliminarExperiencia(arg.payload);
          break;

        case 'crear':
          this.editarCurriculumParaPushearExperiencia(arg.payload);
          break;

        case 'cerrar':
          //usuario cerro el modal desde el boton cerrar
          break;

      }

    }
  }
  editarExperiencia(experiencia:ExperienciaLaboral){
    this.experienciaServ.editExperiencia(experiencia).subscribe({
      next:(response)=>{
        console.log("Experiencia updateada");
        this.traerPersona();
      },
      error:()=>{
        alert("Error al updatear experiencia")
      }
    })
  }

  eliminarExperiencia(experiencia:ExperienciaLaboral){

  }

  editarCurriculumParaPushearExperiencia(curriculum:Curriculum){
    this.curriculumServ.editCurriculum(curriculum).subscribe({
      next:(response)=>{
        console.log("Experieencia creada")
        this.traerPersona();
      },
      error:()=>{
        alert("Error al crear experiencia")
      }

    })
  }


}