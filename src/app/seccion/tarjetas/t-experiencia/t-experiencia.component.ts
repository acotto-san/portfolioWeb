import { Component, Input, OnInit } from '@angular/core';
import { IExperienciaLaboral } from 'src/app/interfaces/experienciaLaboral';
import { PersonaService } from '../../../servicios/persona.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TExperienciaModalFormComponent} from './t-experiencia-modal-form/t-experiencia-modal-form.component';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { Observable, observable, Observer } from 'rxjs';
import { CurriculumService } from 'src/app/servicios/curriculum.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { IconResolver } from '@angular/material/icon';

@Component({
  selector: 'app-t-experiencia',
  templateUrl: './t-experiencia.component.html',
  styleUrls: ['./t-experiencia.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TExperienciaComponent implements OnInit { 
  @Input() curriculum?: ICurriculum;
  cv: any;

  fotoThumbnail:string = 'https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg'
  constructor(private experienciaServ:ExperienciaService, 
    private dialog:MatDialog, 
    private cvServ:CurriculumService,
    private route:ActivatedRoute) { 

  }

  ngOnInit(): void {
   }

  openEditDialog(expLaboral:IExperienciaLaboral){
      const dialogRef = this.dialog.open(EditDialogComponent,{
        width:"35%",
        data: expLaboral
      });
      dialogRef.afterClosed().subscribe(result =>{
          if(result.action=="deleted"){
            console.log(this.curriculum)
            let newCv = this.curriculum
            newCv!.experiencias.splice(this.curriculum!.experiencias.indexOf(result.payload,1))
            console.log(newCv)
            this.curriculum= newCv

          }
      }

      )
  }

  openCreateDialog(curriculum:ICurriculum){
    const dialogRef = this.dialog.open(CreateDialogComponent,{
      width:"35%",
      data: curriculum
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.curriculum=result;
    }

    )
}



   crearExperienciaLaboral(){

    this.dialog.open(TExperienciaModalFormComponent,{
      width:'50%',
      data:this.curriculum
    }).afterClosed().subscribe(val=>{

    })
    
  }

  editarExperienciaLaboral(experiencia:IExperienciaLaboral){
    this.dialog.open(TExperienciaModalFormComponent,{
      width:'50%',
      data:experiencia
    });
  }

  getExperiencia(id:number){
    this.experienciaServ.getExperienciaById(id)
      .subscribe({
        next:(response)=>{
                  },
        error:()=>{
          alert("Error al intentar editar exp laboral")
        }
      })
  }

  getCurriculumById(id:any):any{
    this.cvServ.getCurriculumById(id)
      .subscribe({
        next:(response)=>{
          this.cv = response;
                  },
        error:()=>{
          alert("Error al intentar editar exp laboral")
        }
      })
  }

}
