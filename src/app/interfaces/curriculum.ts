import { IBanner } from "./banner";
import { IExperienciaEducativa } from "./experienciaEducativa";
import { IExperienciaLaboral } from "./experienciaLaboral";
import { IProyecto } from "./proyecto";
import { IRedSocial } from "./redSocial";
import { ISkill } from "./skill";

export interface ICurriculum{
    id:number;
    firstInit:boolean;
    banner:IBanner;
    experiencias:IExperienciaLaboral[];
    estudios:IExperienciaEducativa[];
    skills:ISkill[];
    proyectos:IProyecto[];
    redes:IRedSocial[];

}

export function isCurriculum(object:unknown): object is ICurriculum{
    return Object.prototype.hasOwnProperty.call(object, "banner")
            && Object.prototype.hasOwnProperty.call(object, "experiencias")
}