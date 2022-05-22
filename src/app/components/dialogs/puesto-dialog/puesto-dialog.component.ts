import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { IODataDialog } from 'src/app/intefaces/iodata-dialog';
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
    @Inject(MAT_DIALOG_DATA) public inputDataDialog: IODataDialog,
  ) { }

  ngOnInit(): void {
    this.dialogForm = this.formBuilder.group({ //establezco el form de este componente
      nombre : ['',Validators.required],
      fechaInicio : ['',Validators.required],
      fechaFin : ['',Validators.required],
      descripcion : ['',Validators.required]
    });
    this.evaluarAccion();
    //chequeo si al dialog lo estan llamando desde un boton de edicion/creacion
  }

  evaluarAccion(){
    if(this.inputDataDialog.intencion=="editar"){
      this.setearParaEditar()
    }else if(this.inputDataDialog.intencion=="crear"){
      this.setearParaCrear()
    }
  }
  setearParaEditar(){
    this.tempPuesto = new ExperienciaPuesto(this.inputDataDialog.payload);
    this.actionBtn = "Editar";
    this.titleDialog= "Editar datos del puesto";
    this.cargarFormParaEditar();

  }
  cargarFormParaEditar(){
    this.dialogForm.controls["nombre"].setValue(this.tempPuesto.nombre);
    this.dialogForm.controls["fechaInicio"].setValue(this.tempPuesto.fechaInicio);
    this.dialogForm.controls["fechaFin"].setValue(this.tempPuesto.fechaFin);
    this.dialogForm.controls["descripcion"].setValue(this.tempPuesto.descripcion);

  }
  setearParaCrear(){
    this.tempExp = new ExperienciaLaboral(this.inputDataDialog.payload);
    this.actionBtn="Crear";
    this.titleDialog = "Agregar un nuevo puesto";
  }

  // ESTEcerrarDialog habría que formatearlo para que  quede como el de expDialog
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


    // switch(intencionDeCierre){
    //   case 'confirmar':
        
    //     if(this.inputDataDialog.intencion=="editar"){
    //       this.outputDataParaEditar();
    //     }else if(this.inputDataDialog.intencion=="crear"){
    //       this.outputDataParaCrear();   
    //     };
    //     break;
      
    //   case 'eliminar':
    //     this.outputDataParaEliminar();
    //     break;
      
    //   case 'cancelar':
    //     this.outputDataSinAccion();
    //     break;
    // }
  }
  outputDataParaCrear(){
    this.volcarDataDelForm();
    this.tempExp.puestos.push(this.tempPuesto);
    this.dialogForm.reset();
    this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:this.tempExp})
  }

  outputDataParaEditar(){
    this.volcarDataDelForm();
    this.dialogForm.reset();
    this.dialogRef.close({intencion:this.inputDataDialog.intencion,payload:this.tempPuesto})
  }
  
  outputDataSinAccion(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:'cerrar',payloaod:null});
  }

  outputDataParaEliminar(){
    this.dialogForm.reset();
    this.dialogRef.close({intencion:"eliminar",payload:this.inputDataDialog.payload.id})
  }

  volcarDataDelForm(){
    this.tempPuesto.nombre = this.dialogForm.value.nombre;
    this.tempPuesto.fechaInicio = this.dialogForm.value.fechaInicio;
    this.tempPuesto.fechaFin = this.dialogForm.value.fechaFin;
    this.tempPuesto.descripcion = this.dialogForm.value.descripcion;
  }
}
