import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IODataDialog } from 'src/app/intefaces/iodata-dialog';
import { Banner } from 'src/app/models/banner';
import { Curriculum } from 'src/app/models/curriculum';

@Component({
  selector: 'app-banner-dialog',
  templateUrl: './banner-dialog.component.html',
  styleUrls: ['./banner-dialog.component.css']
})
export class BannerDialogComponent implements OnInit {
  tempBanner:Banner = new Banner({})
  actionBtn:string = "blank";
  titleDialog:string = "blank";
  dialogForm!:FormGroup;

  constructor(
      public dialogRef: MatDialogRef<BannerDialogComponent>,
      private formBuilder:FormBuilder,
      @Inject(MAT_DIALOG_DATA) public inputDataDialog: IODataDialog
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      nombrePersona : ['',Validators.required],
      puestoActual : ['',Validators.required],
      descripcionPersonal : ['',Validators.required],
      avatarImgFuente : ['',Validators.required],
      bannerImgFuente : ['',Validators.required]
    });

    this.setearParaEditar(); 
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
    this.tempBanner = new Banner(this.inputDataDialog.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Editar mis datos";
    this.cargarFormParaEditar();
  }

  cargarFormParaEditar(){
    this.dialogForm.controls["nombrePersona"].setValue(this.tempBanner.nombrePersona)
    this.dialogForm.controls["puestoActual"].setValue(this.tempBanner.puestoActual)
    this.dialogForm.controls["descripcionPersonal"].setValue(this.tempBanner.descripcionPersonal)
    this.dialogForm.controls["avatarImgFuente"].setValue(this.tempBanner.avatarImg.fuente)
    this.dialogForm.controls["bannerImgFuente"].setValue(this.tempBanner.bannerImg.fuente)
  }

  setearParaCrear(){
  }//sin logica cargada

  cerrarDialog(intencionDeCierre:'cancelar'|'confirmar'){
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
    this.dialogRef.close({intencion:"editar",payload:this.tempBanner})
  }

  outputDataParaCrear(){
    let tempCurriculum = new Curriculum(this.inputDataDialog.payload);
    this.volcarDataDelForm();

    tempCurriculum.banner = this.tempBanner
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"editar",payload:tempCurriculum})
  }

  volcarDataDelForm(){
    this.tempBanner.nombrePersona = this.dialogForm.value.nombrePersona
    this.tempBanner.puestoActual = this.dialogForm.value.puestoActual
    this.tempBanner.descripcionPersonal = this.dialogForm.value.descripcionPersonal
    this.tempBanner.avatarImg.fuente = this.dialogForm.value.avatarImgFuente
    this.tempBanner.bannerImg.fuente = this.dialogForm.value.bannerImgFuente
  }
  
}
