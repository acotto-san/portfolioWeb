import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})


export class DatosPersonalesComponent implements OnInit {
  
  aboutMeParagraph? : string ;



  constructor() {
    
   }

  ngOnInit(): void {
    this.aboutMeParagraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi veritatis explicabo ut alias laboriosam dolores similique ex quam. Esse commodi error consequuntur enim assumenda architecto quidem rerum ipsa nemo quia unde natus ad nesciunt reprehenderit fugit, numquam, vitae itaque. Eligendi?"
  }
}
