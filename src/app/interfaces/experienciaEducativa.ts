import { IImagen } from "./imagen";

export interface IExperienciaEducativa{
    id: number;
    institucion: string;
    titulo: string;
    fechaInicio: string;
    fechaFin: string;
    credencial: string;
    linkValidacion: string;
    credencialImg: IImagen;
}