import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IODataDialog } from 'src/app/intefaces/iodata-dialog';
import { Skill } from 'src/app/models/skill';
import { Curriculum } from 'src/app/models/curriculum';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.css']
})
export class SkillDialogComponent implements OnInit {
  tempSkill:Skill = new Skill({})
  actionBtn:string = "blank";
  titleDialog:string = "blank";
  dialogForm!:FormGroup;
  constructor(
      public dialogRef: MatDialogRef<SkillDialogComponent>,
      private formBuilder:FormBuilder,
      @Inject(MAT_DIALOG_DATA) public inputDataDialog: IODataDialog
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      tecnologia : ['',Validators.required],
      porcentaje : ['',Validators.required]
    });

    this.evaluarAccion(); 
    //chequeo si al dialog lo estan llamando desde un boton de edicion/creacion
  }

  evaluarAccion(){
    if(this.inputDataDialog.intencion=="editar"){
      this.setearParaEditar();
    }else if(this.inputDataDialog.intencion=="crear"){
      this.setearParaCrear();
    };
  }

  setearParaEditar(){
    this.tempSkill = new Skill(this.inputDataDialog.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Editar skill";
    this.cargarFormParaEditar();
  }
  cargarFormParaEditar(){
    this.dialogForm.controls["tecnologia"].setValue(this.tempSkill.tecnologia)
    this.dialogForm.controls["porcentaje"].setValue(this.tempSkill.porcentaje)
    }

  setearParaCrear(){
    this.actionBtn="Crear";
    this.titleDialog = "Agregar nuevo skill"
  }

  cerrarDialog(intencionDeCierre:'cancelar'|'confirmar'|'eliminar'){
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

  outputDataParaEditar(){
    this.volcarDataDelForm();
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"editar",payload:this.tempSkill})
  }

  outputDataParaCrear(){
    let tempCurriculum = new Curriculum(this.inputDataDialog.payload);
    this.volcarDataDelForm();

    tempCurriculum.skills.push(this.tempSkill)
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"crear",payload:tempCurriculum})
  }
  
  outputDataParaEliminar(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"eliminar",payload:this.inputDataDialog.payload.id})
  }

  volcarDataDelForm(){
    this.tempSkill.tecnologia = this.dialogForm.value.tecnologia
    this.tempSkill.porcentaje = this.dialogForm.value.porcentaje
  }
}
