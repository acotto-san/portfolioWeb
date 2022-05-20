import { Banner } from "./banner";
import { ExperienciaEducativa } from "./experiencia-educativa";
import { ExperienciaLaboral } from "./experiencia-laboral";
import { Proyecto } from "./proyecto";
import { RedSocial } from "./red-social";
import { Skill } from "./skill";

export class Curriculum {
    id!:number;
    firstInit!:boolean;
    banner!:Banner;
    experiencias!:ExperienciaLaboral[];
    estudios!:ExperienciaEducativa[];
    skills!:Skill[];
    proyectos!:Proyecto[];
    redes!:RedSocial[];

    constructor(obj:Partial<Curriculum>){
        Object.assign(this,obj)
    }

}
