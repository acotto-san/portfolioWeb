import { ICurriculum } from "./curriculum";

export interface Persona{
    id: number;
    nombre: string;
    apellido: string;
    curriculum: ICurriculum;
}