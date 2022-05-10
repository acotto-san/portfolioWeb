import { Imagen } from "./imagen";

export interface ExperienciaLaboral{
    id: number;
    nombreEmpresa: string;
    ubicacion: string;
    logoImg: Imagen;
    mesComienzo: number;
    anioComienzo: number;
    mesFin: number;
    anioFin: number;
    puestos: ExperienciaLaboral[]
}