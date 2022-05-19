import { IImagen } from "../interfaces/imagen";

export class Imagen implements IImagen {
    id: number;
    fuente: String;

    constructor(obj:IImagen){
       this.id = obj.id;
       this.fuente = obj.fuente;
    }


}
