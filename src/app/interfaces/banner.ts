import { Imagen } from "./imagen";

export interface Banner{
    id: number;
    nombrePersona:string;
    puestoActual:string;
    descripcionPersonal:string;
    avatarImg:Imagen;
    bannerImg:Imagen;
}