import { Imagen } from "./imagen";

export interface ExperienciaEducativa{
    id: number;
    institucion: string;
    titulo: string;
    mesComienzo: number;
    anioComienzo: number;
    mesFin: number;
    anioFin: number;
    credencial: string;
    linkValidacion: string;
    credencialImg: Imagen;
}