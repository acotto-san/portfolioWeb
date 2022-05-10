import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/interfaces/banner';

@Component({
  selector: 'app-t-acerca-de',
  templateUrl: './t-acerca-de.component.html',
  styleUrls: ['./t-acerca-de.component.css']
})
export class TAcercaDeComponent implements OnInit {
  @Input() banner?:Banner;
  
  constructor() { }

  ngOnInit(): void {
  }

}
