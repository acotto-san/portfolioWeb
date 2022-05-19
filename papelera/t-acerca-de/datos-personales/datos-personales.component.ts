import { Component, Input, OnInit } from '@angular/core';
import { IBanner } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})


export class DatosPersonalesComponent implements OnInit {
  @Input() banner?:IBanner;

  sobreMiHeader? : string ;
  parrafoSobreMiDisplayStatus? : string ;
  sobreMiTextAreaDisplayStatus? : string;
  aboutMeHeader? : string ;
  profileName? : string ;
  profileJob? : string ;



  constructor() {
    
   }

  ngOnInit(): void {
    this.parrafoSobreMiDisplayStatus = 'initial'
    this.sobreMiTextAreaDisplayStatus = 'none';
 

  }


  editAboutMeParagraph(){

    if (this.sobreMiTextAreaDisplayStatus == 'block'){
      this.cerrarTextArea();
    } else if (this.sobreMiTextAreaDisplayStatus == 'none'){
      this.mostratTextArea();

    }
  }

  cerrarTextArea(){
    this.sobreMiTextAreaDisplayStatus = 'none'
    this.parrafoSobreMiDisplayStatus = 'initial';
  }
  mostratTextArea(){
    this.sobreMiTextAreaDisplayStatus = 'block';
    this.parrafoSobreMiDisplayStatus = "none";
  }

}
