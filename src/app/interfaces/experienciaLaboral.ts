import { IExperienciaPuesto } from "./experienciaPuesto";
import { IImagen } from "./imagen";

export interface IExperienciaLaboral{
    id: number;
    nombreEmpresa: string;
    ubicacion: string;
    logoImg: IImagen;
    puestos: IExperienciaPuesto[]
}