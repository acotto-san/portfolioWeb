import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { IExperienciaLaboral } from 'src/app/interfaces/experienciaLaboral';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  experienciaForm!:FormGroup;


  constructor(
    private dialogRef:MatDialogRef<EditDialogComponent>,
    private formBuilder:FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data:IExperienciaLaboral,
    private expServ:ExperienciaService
    ) {

   }

  ngOnInit(): void {
    this.experienciaForm = this.formBuilder.group({ //establezco el form de este componente
      nombreEmpresa : ['',Validators.required],
      ubicacion: ['',Validators.required]
    });
    this.experienciaForm.controls['nombreEmpresa'].setValue(this.data.nombreEmpresa);
    this.experienciaForm.controls['ubicacion'].setValue(this.data.ubicacion);
  }

  onEdit(){
    let tempExperiencia:IExperienciaLaboral = this.data;
    tempExperiencia.nombreEmpresa = this.experienciaForm.value.nombreEmpresa;
    tempExperiencia.ubicacion = this.experienciaForm.value.ubicacion;

    if(tempExperiencia.puestos==null){
      tempExperiencia.puestos=[]
    }

    this.expServ.updateExperiencia(tempExperiencia)
      .subscribe({
        next:(response)=>{
          this.experienciaForm.reset();
          this.dialogRef.close(response);
        },
        error:()=>{
          alert("Error al intentar editar exp laboral")
        }
      })
  }

  onDelete(){
    this.expServ.deleteById(this.data.id)
      .subscribe({
        next:()=>{
          this.experienciaForm.reset();
          this.dialogRef.close(
            {action:"deleted",payload:this.data}
          );
        },
        error:()=>{
          alert("Error al intentar editar exp laboral")
        }
      })
  }

}
