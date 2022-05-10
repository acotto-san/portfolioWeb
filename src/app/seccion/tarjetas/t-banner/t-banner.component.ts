import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-t-banner',
  templateUrl: './t-banner.component.html',
  styleUrls: ['./t-banner.component.css']
})
export class TBannerComponent implements OnInit {
@Input() banner?:Banner;
sobreMiHeader? : string ;
parrafoSobreMiDisplayStatus? : string;
sobreMiTextAreaDisplayStatus?:string;
sobreMiTextAreaContenido?:string;
  constructor() { }
  
  ngOnInit(): void {
    this.sobreMiHeader = 'Sobre Mi';
    this.parrafoSobreMiDisplayStatus= 'initial';
    this.sobreMiTextAreaDisplayStatus = 'none';
    this.sobreMiTextAreaContenido = this.banner?.descripcionPersonal;
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
