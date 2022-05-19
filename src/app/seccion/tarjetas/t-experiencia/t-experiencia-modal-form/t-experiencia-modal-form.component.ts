import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICurriculum } from 'src/app/interfaces/curriculum';
import { CurriculumService } from 'src/app/servicios/curriculum.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IExperienciaLaboral } from 'src/app/interfaces/experienciaLaboral';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-t-experiencia-modal-form',
  templateUrl: './t-experiencia-modal-form.component.html',
  styleUrls: ['./t-experiencia-modal-form.component.css']
})
export class TExperienciaModalFormComponent implements OnInit {
  experienciaForm !: FormGroup;
  botonDeAccion:string = "Crear";

  constructor(private formBuilder:FormBuilder, 
    private cvService : CurriculumService,  //el service para pegarle al restController desde este componente
    private expService : ExperienciaService,
    @Inject(MAT_DIALOG_DATA) public data:any, //para que venga data desde  el componente que llama este
    private dialogRef: MatDialogRef<TExperienciaModalFormComponent>,
    ) { }

  ngOnInit(): void { 
    this.experienciaForm = this.formBuilder.group({ //establezco el form de este componente
      nombreEmpresa : ['',Validators.required],
      ubicacion: ['',Validators.required]
    });
    if(this.esExperiencia(this.data)){
      this.experienciaForm.controls['nombreEmpresa'].setValue(this.data.nombreEmpresa);
      this.experienciaForm.controls['ubicacion'].setValue(this.data.ubicacion);
      this.botonDeAccion = "Editar";
    }
  }

  esCurriculum(obj:any): obj is ICurriculum{
    return 'id' in obj && 'experiencias' in obj;
  }

  esExperiencia(obj:any): obj is IExperienciaLaboral{
    return 'id' in obj && 'nombreEmpresa' in obj;
  }
  crearOEditar(){ //se ejecuta al aceptar el modal

    if(this.esExperiencia(this.data)){
      this.actualizarExperienciaLaboral();
    }else if(this.esCurriculum(this.data)){
      this.crearExperienciaLaboral();
    }


  }

  actualizarExperienciaLaboral(){
    if(this.experienciaForm.valid){
      let expLaboralActualizada:IExperienciaLaboral = this.data;
      expLaboralActualizada.nombreEmpresa = this.experienciaForm.value.nombreEmpresa
      expLaboralActualizada.ubicacion = this.experienciaForm.value.ubicacion
      

      this.expService.updateExperiencia(expLaboralActualizada)
      .subscribe({
        next:(response)=>{
          this.data =expLaboralActualizada;
          this.experienciaForm.reset();
          this.dialogRef.close('updated');
        },
        error:()=>{
          alert("Error al intentar editar exp laboral")
        }
      })
    }

  }
  crearExperienciaLaboral(){
    if(this.experienciaForm.valid){ //si el form es valido
      let cvActualizado:ICurriculum= this.data; //copiar el objeto contenedor
      cvActualizado.experiencias.push(this.experienciaForm.value) //agregar el objeto nuevo
      this.cvService.updateCurriculum(cvActualizado)//intentar actualizar 
      .subscribe({
        next:(response)=>{
          console.log(response);
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
