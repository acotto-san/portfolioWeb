import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IODataDialog } from 'src/app/intefaces/iodata-dialog';
import { Curriculum } from 'src/app/models/curriculum';
import { ExperienciaEducativa } from 'src/app/models/experiencia-educativa';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-estudio-dialog',
  templateUrl: './estudio-dialog.component.html',
  styleUrls: ['./estudio-dialog.component.css']
})
export class EstudioDialogComponent implements OnInit {
  actionBtn:string = "blank";
  titleDialog:string = "blank";
  dialogForm!:FormGroup;
  tempEdu:ExperienciaEducativa = new ExperienciaEducativa({})
  tempCurriculum:Curriculum = new Curriculum({});

  constructor(
      public dialogRef: MatDialogRef<EstudioDialogComponent>,
      private formBuilder:FormBuilder,
      @Inject(MAT_DIALOG_DATA) public inputDataDialog: IODataDialog
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      institucion : ['',Validators.required],
      titulo : ['',Validators.required],
      fechaInicio : ['',Validators.required],
      fechaFin : ['',Validators.required],
      credencial: ['',Validators.required],
      linkValidacion: ['',Validators.required],
      credencialImgFuente: ['',Validators.required],

    });
    this.evaluarAccion()
  }


  evaluarAccion(){
    if(this.inputDataDialog.intencion=="editar"){
      this.setearParaEditar();
    }else if(this.inputDataDialog.intencion=="crear"){
      this.setearParaCrear();
    }
  }

  setearParaEditar(){
    this.tempEdu = new ExperienciaEducativa(this.inputDataDialog.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Editar datos de la experiencia educativa";
    this.cargarFormParaEditar();
  }

  setearParaCrear(){
    this.tempEdu.credencialImg = new Imagen({});
    this.tempCurriculum = new Curriculum(this.inputDataDialog.payload);
    this.actionBtn="Crear";
    this.titleDialog = "Agregar nueva experiencia educativa";
  }

  cargarFormParaEditar(){
    this.dialogForm.controls["institucion"].setValue(this.tempEdu.institucion);
    this.dialogForm.controls["titulo"].setValue(this.tempEdu.titulo);
    this.dialogForm.controls["fechaInicio"].setValue(this.tempEdu.fechaInicio);
    this.dialogForm.controls["fechaFin"].setValue(this.tempEdu.fechaFin);
    this.dialogForm.controls["credencial"].setValue(this.tempEdu.credencial);
    this.dialogForm.controls["linkValidacion"].setValue(this.tempEdu.linkValidacion);
    this.dialogForm.controls["credencialImgFuente"].setValue(this.tempEdu.credencialImg.fuente);
  }
  cerrarDialog(intencionDeCierre:'cancelar'|'eliminar'|'confirmar'){
    
    switch(intencionDeCierre){
      case 'confirmar':
        
        switch(this.inputDataDialog.intencion){
          case 'crear':
            this.volcarDataDelForm();
            this.tempCurriculum.estudios.push(this.tempEdu)
            this.dialogForm.reset();
            this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:this.tempCurriculum})        
            break;

          case 'editar':
            this.volcarDataDelForm()
            this.dialogForm.reset();
            this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:this.tempEdu})
            break;
          }
        break;
      
      case 'eliminar':
        this.dialogForm.reset();
        this.dialogRef.close({intencion:"eliminar",payload:this.inputDataDialog.payload.id})
        break;
      
      case 'cancelar':
        this.dialogForm.reset();
        this.dialogRef.close({intencion:'cancelar',payload:null})
        break;
    }
  }
  // outputDataParaCrear(){
  //   this.volcarDataDelForm();
  //   this.tempCurriculum.estudios.push(this.tempEdu)
  //   this.dialogForm.reset();
  //   this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:this.tempCurriculum})
  // }

  // outputDataParaEditar(){
  //   this.volcarDataDelForm()
  //   this.dialogForm.reset();
  //   this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:this.tempEdu})
  // }

  // outputDataParaEliminar(){
  //   this.dialogForm.reset();
  //   this.dialogRef.close({intencion:"eliminar",payload:this.inputDataDialog.payload.id})
  // }

  volcarDataDelForm(){
    this.tempEdu.institucion = this.dialogForm.value.institucion
    this.tempEdu.titulo = this.dialogForm.value.titulo
    this.tempEdu.fechaInicio = this.dialogForm.value.fechaInicio
    this.tempEdu.fechaFin = this.dialogForm.value.fechaFin
    this.tempEdu.credencial = this.dialogForm.value.credencial
    this.tempEdu.linkValidacion = this.dialogForm.value.linkValidacion
    this.tempEdu.credencialImg.fuente = this.dialogForm.value.credencialImgFuente

  }

}
