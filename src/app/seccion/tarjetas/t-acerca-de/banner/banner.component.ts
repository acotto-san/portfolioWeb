import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/interfaces/imagen';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
@Input() bannerImg?:Imagen;

  constructor() { }

  ngOnInit(): void {
  }

}
