export class Skill {
    id: number;
    porcentaje: number;
    tecnologia: string;

    constructor(obj:any){
        this.id = obj.id;
        this.porcentaje = obj.porcentaje;
        this.tecnologia = obj.tecnologia;
    }
}
