import { Component, Input, OnInit } from '@angular/core';
import { IBanner } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-t-acerca-de',
  templateUrl: './t-acerca-de.component.html',
  styleUrls: ['./t-acerca-de.component.css']
})
export class TAcercaDeComponent implements OnInit {
  @Input() banner?:IBanner;
  
  constructor() { }

  ngOnInit(): void {
  }

}
