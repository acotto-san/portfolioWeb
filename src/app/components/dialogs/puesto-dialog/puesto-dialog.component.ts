import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaPuesto } from 'src/app/models/experiencia-puesto';

@Component({
  selector: 'app-puesto-dialog',
  templateUrl: './puesto-dialog.component.html',
  styleUrls: ['./puesto-dialog.component.css']
})
export class PuestoDialogComponent implements OnInit {

  tempPuesto:ExperienciaPuesto = new ExperienciaPuesto({});
  tempExp:ExperienciaLaboral = new ExperienciaLaboral({});
  actionBtn:string = "blank";
  titleDialog:string = "blank";
  dialogForm!:FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PuestoDialogComponent>,
    private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      nombre : ['',Validators.required],
      fechaInicio : ['',Validators.required],
      fechaFin : ['',Validators.required],
      descripcion : ['',Validators.required]
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
    this.tempPuesto = new ExperienciaPuesto(this.data.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Edicion de puesto laboral"
    this.cargarFormConInjectData();

  }

  cargarFormConInjectData(){
    this.dialogForm.controls["nombre"].setValue(this.tempPuesto.nombre);
    this.dialogForm.controls["fechaInicio"].setValue(this.tempPuesto.fechaInicio);
    this.dialogForm.controls["fechaFin"].setValue(this.tempPuesto.fechaFin);
    this.dialogForm.controls["descripcion"].setValue(this.tempPuesto.descripcion);

  }
  setearParaCrear(){
    this.tempExp = new ExperienciaLaboral(this.data.payload);
    this.actionBtn="Crear";
    this.titleDialog = "Creacion de puesto laboral"
  }


  cerrarDialog(intencionDeCierre:string){
    
    switch(intencionDeCierre){
      case 'confirmar':
        
        if(this.data.intencion=="editar"){
          this.modalResponseEditarPuesto();
        }else if(this.data.intencion=="crear"){
          this.modalResponseCrearPuesto();   
        };
        break;
      
      case 'eliminar':
        this.modalResponseEliminarPuesto();
        break;
      
      case 'cerrar':
        this.modalResponceCerradoSinAccion();
        break;
    }
  }

  modalResponseCrearPuesto(){
    if(this.dialogForm.valid){
      this.volcarDataDelForm();
      this.tempExp.puestos.push(this.tempPuesto)
      this.dialogForm.reset();
      this.dialogRef.close({intencion:this.data.intencion,payload:this.tempExp})
    }
  }
  modalResponseEditarPuesto(){
    if(this.dialogForm.valid){
      this.volcarDataDelForm()
      this.dialogForm.reset();
      this.dialogRef.close({intencion:this.data.intencion,payload:this.tempPuesto})
    }
  }

  modalResponceCerradoSinAccion(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:'cerrar'})
  }
  modalResponseEliminarPuesto(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"eliminar",payload:this.data.payload.id})
  }

  volcarDataDelForm(){
    this.tempPuesto.nombre = this.dialogForm.value.nombre
    this.tempPuesto.fechaInicio = this.dialogForm.value.fechaInicio
    this.tempPuesto.fechaFin = this.dialogForm.value.fechaFin
    this.tempPuesto.descripcion = this.dialogForm.value.descripcion
  }
}
