import { Banner } from "./banner";
import { ExperienciaEducativa } from "./experiencia-educativa";
import { ExperienciaLaboral } from "./experiencia-laboral";
import { Proyecto } from "./proyecto";
import { RedSocial } from "./red-social";
import { Skill } from "./skill";

export class Curriculum {
    id:number;
    firstInit:boolean;
    banner:Banner;
    experiencias:ExperienciaLaboral[];
    estudios:ExperienciaEducativa[];
    skills:Skill[];
    proyectos:Proyecto[];
    redes:RedSocial[];

    constructor(obj:any){
        this.id = obj.id;
        this.firstInit = obj.firstInit;
        this.banner = new Banner(obj.banner);

        this.experiencias = [];
        obj.experiencias.forEach((element:ExperienciaLaboral) => {
            this.experiencias.push(new ExperienciaLaboral(element))
        });

        this.estudios = [];
        obj.estudios.forEach((element:ExperienciaEducativa) => {
            this.estudios.push(new ExperienciaEducativa(element))
        });

        this.skills = [];
        obj.skills.forEach((element:Skill) => {
            this.skills.push(new Skill(element))
        });

        this.proyectos = [];
        obj.proyectos.forEach((element:Proyecto) => {
            this.proyectos.push(new Proyecto(element))
        });

        this.redes = [];
        obj.redes.forEach((element:RedSocial) => {
            this.redes.push(new RedSocial(element))
        });
    }
}
