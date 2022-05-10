import { Banner } from "./banner";
import { ExperienciaEducativa } from "./experienciaEducativa";
import { ExperienciaLaboral } from "./experienciaLaboral";
import { Proyecto } from "./proyecto";
import { RedSocial } from "./redSocial";
import { Skill } from "./skill";

export interface Curriculum{
    id:number;
    firstInit:boolean;
    banner:Banner;
    experiencias:ExperienciaLaboral[];
    estudios:ExperienciaEducativa[];
    skills:Skill[];
    proyectos:Proyecto[];
    redes:RedSocial[];

}