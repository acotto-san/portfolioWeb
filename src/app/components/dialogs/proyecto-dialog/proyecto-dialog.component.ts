// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

// @Component({
//   selector: 'app-proyecto-dialog',
//   templateUrl: './proyecto-dialog.component.html',
//   styleUrls: ['./proyecto-dialog.component.css']
// })
// export class ProyectoDialogComponent implements OnInit {

//   constructor(
//       public dialogRef: MatDialogRef<ProyectoDialogComponent>,
//       private formBuilder:FormBuilder,
//       @Inject(MAT_DIALOG_DATA) public data: any
//   ) { }

//   ngOnInit(): void {
//   }

// }
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IODataDialog } from 'src/app/intefaces/iodata-dialog';
import { Skill } from 'src/app/models/skill';
import { Curriculum } from 'src/app/models/curriculum';
import { Proyecto } from 'src/app/models/proyecto';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-proyecto-dialog',
  templateUrl: './proyecto-dialog.component.html',
  styleUrls: ['./proyecto-dialog.component.css']
})
export class ProyectoDialogComponent implements OnInit {
  tempProyecto:Proyecto = new Proyecto({})
  actionBtn:string = "blank";
  titleDialog:string = "blank";
  dialogForm!:FormGroup;
  constructor(
      public dialogRef: MatDialogRef<ProyectoDialogComponent>,
      private formBuilder:FormBuilder,
      @Inject(MAT_DIALOG_DATA) public inputDataDialog: IODataDialog
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      nombre : ['',Validators.required],
      descripcion : ['',Validators.required],
      previewImgFuente : ['',Validators.required],
      link : ['',Validators.required]
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
    this.tempProyecto = new Proyecto(this.inputDataDialog.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Editar proyecto";
    this.cargarFormParaEditar();
  }
  cargarFormParaEditar(){
    this.dialogForm.controls["nombre"].setValue(this.tempProyecto.nombre)
    this.dialogForm.controls["descripcion"].setValue(this.tempProyecto.descripcion)
    this.dialogForm.controls["previewImgFuente"].setValue(this.tempProyecto.previewImg.fuente)
    this.dialogForm.controls["link"].setValue(this.tempProyecto.link)
    }

  setearParaCrear(){
    this.actionBtn="Crear";
    this.titleDialog = "Agregar nuevo proyecto"
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
    this.dialogRef.close({intencion:"editar",payload:this.tempProyecto})
  }

  outputDataParaCrear(){
    let tempCurriculum = new Curriculum(this.inputDataDialog.payload);
    this.tempProyecto.previewImg = new Imagen({})
    this.volcarDataDelForm();

    tempCurriculum.proyectos.push(this.tempProyecto)
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"crear",payload:tempCurriculum})
  }

  outputDataParaEliminar(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"eliminar",payload:this.inputDataDialog.payload.id})
  }

  volcarDataDelForm(){
    this.tempProyecto.nombre = this.dialogForm.value.nombre
    this.tempProyecto.descripcion = this.dialogForm.value.descripcion
    this.tempProyecto.previewImg.fuente = this.dialogForm.value.previewImgFuente
    this.tempProyecto.link = this.dialogForm.value.link
  }
}
