import { IImagen } from "./imagen";

export interface IBanner{
    id: number;
    nombrePersona:string;
    puestoActual:string;
    descripcionPersonal:string;
    avatarImg:IImagen;
    bannerImg:IImagen;
}