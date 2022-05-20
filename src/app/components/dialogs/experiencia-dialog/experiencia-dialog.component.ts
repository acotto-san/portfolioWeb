import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Curriculum } from 'src/app/models/curriculum';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaPuesto } from 'src/app/models/experiencia-puesto';
import { Imagen } from 'src/app/models/imagen';

interface Jornada{
  tipo:string;
}

@Component({
  selector: 'app-experiencia-dialog',
  templateUrl: './experiencia-dialog.component.html',
  styleUrls: ['./experiencia-dialog.component.css']
})
export class ExperienciaDialogComponent implements OnInit {

  
  tempExp:ExperienciaLaboral = new ExperienciaLaboral({});
  tempCurriculum:Curriculum = new Curriculum({});

  actionBtn:string = "blank";
  titleDialog:string = "blank";
  dialogForm!:FormGroup;
  jornadas: Jornada[] = [

    {tipo:"Full-time"},
    {tipo: "Part-time"},
    {tipo: "Freelance"}
  ]
  constructor(
      public dialogRef: MatDialogRef<ExperienciaDialogComponent>,
      private formBuilder:FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      nombreEmpresa : ['',Validators.required],
      tipoJornada : ['',Validators.required],
      ubicacion : ['',Validators.required],

    });
    this.evaluarAccion()
  }

  evaluarAccion(){
    if(this.data.intencion=="editar"){
      this.setearParaEditar()
    }else if(this.data.intencion=="crear"){
      this.setearParaCrear()
    }
  }
  setearParaEditar(){
    this.tempExp = new ExperienciaLaboral(this.data.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Editar datos de la empresa"
    this.cargarFormConInjectData();
  }
  cargarFormConInjectData(){
    this.dialogForm.controls["nombreEmpresa"].setValue(this.tempExp.nombreEmpresa);
    this.dialogForm.controls["tipoJornada"].setValue(this.tempExp.tipoJornada);
    this.dialogForm.controls["ubicacion"].setValue(this.tempExp.ubicacion);

  }
  setearParaCrear(){
    this.tempExp.logoImg = new Imagen({})
    this.tempCurriculum = new Curriculum(this.data.payload);
    this.actionBtn="Crear";
    this.titleDialog = "Agregar nueva empresa"
  }
  cerrarDialog(intencionDeCierre:'cerrar'|'eliminar'|'confirmar'){
    
    switch(intencionDeCierre){
      case 'confirmar':
        
        switch(this.data.intencion){
          case 'editar':
            this.modalResponseEditarExperiencia();
            break;
          case 'crear':
            console.log(this.tempExp)
            this.modalResponseCrearExperiencia(); 
            break;
        }
        
        // if(this.data.intencion=="editar"){
        //   this.modalResponseEditarExperiencia();
        // }else if(this.data.intencion=="crear"){
        //   this.modalResponseCrearExperiencia();   
        // }; BORRAR LUEGO SI LO DE ARRIBA SIRVIO

        break;
      
      case 'eliminar':
        this.modalResponseEliminarExperiencia();
        break;
      
      case 'cerrar':
        this.modalResponceCerradoSinAccion();
        break;
    }
  }
  modalResponseCrearExperiencia(){
    if(this.dialogForm.valid){
      this.volcarDataDelForm();
      this.tempCurriculum.experiencias.push(this.tempExp)
      this.dialogForm.reset();
      this.dialogRef.close({intencion:this.data.intencion,payload:this.tempCurriculum})
    }
  }
  modalResponseEditarExperiencia(){
    if(this.dialogForm.valid){
      this.volcarDataDelForm()
      this.dialogForm.reset();
      this.dialogRef.close({intencion:this.data.intencion,payload:this.tempExp})
    }
  }
  modalResponceCerradoSinAccion(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:'cerrar'})
  }
  modalResponseEliminarExperiencia(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"eliminar",payload:this.data.payload.id})
  }
  volcarDataDelForm(){
    this.tempExp.nombreEmpresa = this.dialogForm.value.nombreEmpresa
    this.tempExp.tipoJornada = this.dialogForm.value.tipoJornada
    this.tempExp.ubicacion = this.dialogForm.value.ubicacion
  }
}
