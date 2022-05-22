import { Imagen } from "./imagen";

export class ExperienciaEducativa {
    id: number;
    institucion: string;
    titulo: string;
    fechaInicio: string;
    fechaFin: string;
    credencial: string;
    linkValidacion: string;
    credencialImg: Imagen;

    constructor(obj:any){
        this.id = obj.id;
        this.institucion = obj.institucion;
        this.titulo = obj.titulo;
        this.fechaInicio = obj.fechaInicio;
        this.fechaFin = obj.fechaFin;
        this.credencial = obj.credencial;
        this.linkValidacion = obj.linkValidacion;
        this.credencialImg = new Imagen(obj.credencialImg)
    }

    // constructor(obj:Partial<ExperienciaLaboral>){
    //     Object.assign(this,obj)
    // }
}
