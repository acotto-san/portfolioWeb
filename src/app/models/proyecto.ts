import { Imagen } from "./imagen";

export class Proyecto {
    id: number;
    nombre: number;
    link: string;
    descripcion: string;
    previewImg: Imagen;

    constructor(obj:any){
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.link = obj.link;
        this.descripcion = obj.descripcion;
        this.previewImg = new Imagen(obj.previewImg)
    }
}
