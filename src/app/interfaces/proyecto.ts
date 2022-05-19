import { IImagen } from "./imagen";

export interface IProyecto{
    id: number;
    nombre: number;
    link: string;
    descripcion: string;
    previewImg: IImagen;
}