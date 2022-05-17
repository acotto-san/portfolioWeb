import { Component, Input, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/interfaces/experienciaLaboral';
import { PersonaService } from '../../../servicios/persona.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TExperienciaModalFormComponent} from './t-experiencia-modal-form/t-experiencia-modal-form.component';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Curriculum } from 'src/app/interfaces/curriculum';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-t-experiencia',
  templateUrl: './t-experiencia.component.html',
  styleUrls: ['./t-experiencia.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TExperienciaComponent implements OnInit { 
  @Input() curriculum?: Curriculum;
  @Input() experiencias?:ExperienciaLaboral[];
  fotoThumbnail:string = 'https://ejemplocodigo.com/wp-content/themes/qaengine/img/default-thumbnail.jpg'
  constructor(private experienciaServ:ExperienciaService, private modal:MatDialog) { 
    this.experiencias = this.curriculum?.experiencias;
  }

  ngOnInit(): void {
   }



   crearExperienciaLaboral(){
    this.modal.open(TExperienciaModalFormComponent,{
      width:'50%',
      data:this.curriculum
    });
  }
  
  editarExperienciaLaboral(experiencia:ExperienciaLaboral){
    console.log(experiencia)
    this.modal.open(TExperienciaModalFormComponent,{
      width:'50%',
      data:experiencia
    });
  }




  // public crearExperienciaLaboral(): void{
  //   this.experienciaServ.getExperiencias().subscribe(
  //     (response:ExperienciaLaboral[]) =>{
  //       this.experiencias = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);}
  //   )
  // }
}
