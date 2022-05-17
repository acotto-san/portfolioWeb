import { Imagen } from "./imagen";

export interface ExperienciaEducativa{
    id: number;
    institucion: string;
    titulo: string;
    fechaInicio: string;
    fechaFin: string;
    credencial: string;
    linkValidacion: string;
    credencialImg: Imagen;
}