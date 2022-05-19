import { Component, Input, OnInit } from '@angular/core';
import { IImagen } from 'src/app/interfaces/imagen';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
@Input() bannerImg?:IImagen;

  constructor() { }

  ngOnInit(): void {
  }

}
