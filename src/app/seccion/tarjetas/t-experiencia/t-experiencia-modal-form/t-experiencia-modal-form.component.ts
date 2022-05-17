import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Curriculum } from 'src/app/interfaces/curriculum';
import { CurriculumService } from 'src/app/servicios/curriculum.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TExperienciaComponent } from '../t-experiencia.component';
import { ExperienciaLaboral } from 'src/app/interfaces/experienciaLaboral';
import { Imagen } from 'src/app/interfaces/imagen';
import { Banner } from 'src/app/interfaces/banner';
import { ExperienciaEducativa } from 'src/app/interfaces/experienciaEducativa';
import { Proyecto } from 'src/app/interfaces/proyecto';
import { RedSocial } from 'src/app/interfaces/redSocial';
import { Skill } from 'src/app/interfaces/skill';

@Component({
  selector: 'app-t-experiencia-modal-form',
  templateUrl: './t-experiencia-modal-form.component.html',
  styleUrls: ['./t-experiencia-modal-form.component.css']
})
export class TExperienciaModalFormComponent implements OnInit {
  cvParaManipularEnModal?:Curriculum;
  experienciaParaManipularEnModal?:ExperienciaLaboral;
  experienciaForm !: FormGroup;
  constructor(private formBuilder:FormBuilder, 
    private cvService : CurriculumService,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<TExperienciaModalFormComponent>,
    ) { }

  ngOnInit(): void { //establezco el form de este componente
    this.experienciaForm = this.formBuilder.group({
      nombreEmpresa : ['',Validators.required],
      ubicacion: ['',Validators.required]
    });
  }


  crearExperienciaLaboral(){ //se ejecuta al aceptar el modal
    console.log(typeof this.data)
    if(this.experienciaForm.valid){ //si el form es valido
      let cvActualizado:any = this.data; //copiar el objeto contenedor
      cvActualizado.experiencias.push(this.experienciaForm.value) //agregar el objeto nuevo
      this.cvService.updateCurriculum(cvActualizado)//intentar actualizar 
      .subscribe({
        next:(response)=>{
          this.data =cvActualizado;
          this.experienciaForm.reset();
          this.dialogRef.close('created');
        },
        error:()=>{
          alert("Error al intentar crear exp laboral")
        }
      })
    
    }
  }

}
