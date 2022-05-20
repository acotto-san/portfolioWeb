import { Imagen } from "./imagen";

export class Banner {
    id!: number;
    nombrePersona!:string;
    puestoActual!:string;
    descripcionPersonal!:string;
    avatarImg!:Imagen;
    bannerImg!:Imagen;

    constructor(obj:Partial<Banner>){
        Object.assign(this,obj)
    }
    // constructor(obj:any){
    //     this.id = obj.id;
    //     this.nombrePersona = obj.nombrePersona;
    //     this.puestoActual = obj.puestoActual;
    //     this.descripcionPersonal = obj.descripcionPersonal;
    //     this.avatarImg = new Imagen(obj.avatarImg);
    //     this.bannerImg = new Imagen(obj.bannerImg);  
    // }
}
