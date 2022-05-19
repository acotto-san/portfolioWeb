import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Persona } from 'src/app/models/persona';
import {NgForm} from '@angular/forms';
import { Imagen } from 'src/app/models/imagen';


@Component({
  selector: 'app-mock2',
  templateUrl: './mock2.component.html',
  styleUrls: ['./mock2.component.css']
})
export class Mock2Component implements OnInit {

  personaEnModa!:any;

  constructor(
    public dialogRef: MatDialogRef<Mock2Component>,
    @Inject(MAT_DIALOG_DATA) public data: Persona,
  ) { }

  ngOnInit(): void {
    this.copiarPersona()

  }

  copiarPersona(){
    this.personaEnModa = new Persona(this.data)
  }
  
  edit(){
    this.dialogRef.close(this.personaEnModa.nombre)
  }

  close(){
    this.dialogRef.close();
  }
}
