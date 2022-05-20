export class Imagen {
    id!: number|null;
    fuente!: string|null;

    constructor(obj:Partial<Imagen>){
        Object.assign(this,obj)
    }
    // constructor(obj:any){
    //     this.id = obj.id;
    //     this.fuente = obj.fuente;
    // }
}
