import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})


export class DatosPersonalesComponent implements OnInit {
  
  aboutMeParagraph? : string ;
  aboutMeParagraphDisplay? : string ;
  aboutMeTextAreaDisplayStatus? : string;
  aboutMeHeader? : string ;
  profileName? : string ;
  profileJob? : string ;



  constructor() {
    
   }

  ngOnInit(): void {
    this.profileName = "Hermenejildo Morales de las Rosas Campos";
    this.profileJob = "Ultra novedosa e interesante profesion" ;
    this.aboutMeParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis explicabo ut alias laboriosam dolores similique ex quam. Esse commodi error consequuntur enim assumenda architecto quidem rerum ipsa nemo quia unde natus ad nesciunt reprehenderit fugit, numquam, vitae itaque. Eligendi?"
    this.aboutMeParagraphDisplay = 'initial'
    this.aboutMeTextAreaDisplayStatus = 'none';
    this.aboutMeHeader = "Sobre Mi"

  }


  editAboutMeParagraph(){

    if (this.aboutMeTextAreaDisplayStatus == 'block'){
      this.aboutMeTextAreaDisplayStatus = 'none';
    } else if (this.aboutMeTextAreaDisplayStatus == 'none'){
      this.aboutMeTextAreaDisplayStatus = 'block';
    }
  
  }
}
