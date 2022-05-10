import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill';

@Component({
  selector: 'app-t-skills',
  templateUrl: './t-skills.component.html',
  styleUrls: ['./t-skills.component.css','../../cv-seccion/cv-seccion.component.css']
})
export class TSkillsComponent implements OnInit {
@Input() skills?:Skill[];
  constructor() { }

  ngOnInit(): void {
  }

}
