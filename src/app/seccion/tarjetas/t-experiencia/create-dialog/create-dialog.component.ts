import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { IExperienciaLaboral } from 'src/app/interfaces/experienciaLaboral';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { CurriculumService } from 'src/app/servicios/curriculum.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
  experienciaForm!:FormGroup;
  temporaryCurriculum!:ICurriculum;

  constructor(
    private dialogRef:MatDialogRef<CreateDialogComponent>,
    private formBuilder:FormBuilder, 
    @Inject(MAT_DIALOG_DATA) public data:ICurriculum,
    private cvServ:CurriculumService
    ) {

   }

  ngOnInit(): void {
    this.experienciaForm = this.formBuilder.group({ //establezco el form de este componente
      nombreEmpresa : ['',Validators.required],
      ubicacion: ['',Validators.required]
    });

    this.temporaryCurriculum = this.data;
    

  }

  finalizeCreation(){
    this.temporaryCurriculum.experiencias.push(this.experienciaForm.value)
    this.cvServ.updateCurriculum(this.temporaryCurriculum)
      .subscribe({
        next:(response)=>{
          console.log("data")
          console.log(this.data)
          console.log("tempCV")
          console.log(this.temporaryCurriculum)
          console.log("response")
          console.log(response)
          this.experienciaForm.reset();
          this.dialogRef.close(response);
        },
        error:()=>{
          alert("Error al intentar editar exp laboral")
        }
      })
  }


}
