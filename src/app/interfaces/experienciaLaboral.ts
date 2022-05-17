import { ExperienciaPuesto } from "./experienciaPuesto";
import { Imagen } from "./imagen";

export interface ExperienciaLaboral{
    id: number;
    nombreEmpresa: string;
    ubicacion: string;
    logoImg: Imagen;
    puestos: ExperienciaPuesto[]
}