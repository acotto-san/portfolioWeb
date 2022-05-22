import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { IODataDialog } from 'src/app/intefaces/iodata-dialog';
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
      @Inject(MAT_DIALOG_DATA) public inputDataDialog: IODataDialog,
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      nombreEmpresa : ['',Validators.required],
      tipoJornada : ['',Validators.required],
      ubicacion : ['',Validators.required],
      logoImgFuente : ['',Validators.required]

    });
    this.evaluarAccion()
  }

  evaluarAccion(){
    if(this.inputDataDialog.intencion=="editar"){
      this.setearParaEditar()
    }else if(this.inputDataDialog.intencion=="crear"){
      this.setearParaCrear()
    }
  }
  setearParaEditar(){
    this.tempExp = new ExperienciaLaboral(this.inputDataDialog.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Editar datos de la empresa"
    this.cargarFormParaEditar();
  }
  cargarFormParaEditar(){
    this.dialogForm.controls["nombreEmpresa"].setValue(this.tempExp.nombreEmpresa);
    this.dialogForm.controls["tipoJornada"].setValue(this.tempExp.tipoJornada);
    this.dialogForm.controls["ubicacion"].setValue(this.tempExp.ubicacion);
    this.dialogForm.controls["logoImgFuente"].setValue(this.tempExp.logoImg.fuente);

  }
  setearParaCrear(){
    this.actionBtn="Crear";
    this.titleDialog = "Agregar nueva empresa"
  }
  cerrarDialog(intencionDeCierre:'cancelar'|'eliminar'|'confirmar'){
    
    if(this.dialogForm.valid){
      switch(intencionDeCierre){
        case 'confirmar':
          
          switch(this.inputDataDialog.intencion){
            case 'editar':
              this.outputDataParaEditar();
              break;
            case 'crear':
              this.outputDataParaCrear(); 
              break;
            }
          break;
        
        case 'eliminar':
          this.outputDataParaEliminar();
          break;
        
        case 'cancelar':
          this.dialogForm.reset();
          this.dialogRef.close({intencion:'cancelar',payload:null})
          break;
      }
    }
  }
  outputDataParaCrear(){
    let tempCV:Curriculum = new Curriculum(this.inputDataDialog.payload)
    this.tempExp.logoImg = new Imagen({})
    this.volcarDataDelForm();
    tempCV.experiencias.push(this.tempExp)
    this.dialogForm.reset();
    this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:tempCV})
  }
  
  outputDataParaEditar(){
    this.volcarDataDelForm()
    this.dialogForm.reset();
    this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:this.tempExp})
  }

  outputDataParaEliminar(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"eliminar",payload:this.inputDataDialog.payload.id})
  }
  volcarDataDelForm(){
    this.tempExp.nombreEmpresa = this.dialogForm.value.nombreEmpresa
    this.tempExp.tipoJornada = this.dialogForm.value.tipoJornada
    this.tempExp.ubicacion = this.dialogForm.value.ubicacion
    this.tempExp.logoImg.fuente = this.dialogForm.value.logoImgFuente
  }
}
