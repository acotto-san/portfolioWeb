import { Curriculum } from "./curriculum";

export class Persona {
    id!: number;
    nombre!: string;
    apellido!: string;
    curriculum!: Curriculum 

    constructor(obj:Partial<Persona>){
        Object.assign(this,obj)
    }

    // constructor(obj:any|null){
    //     this.id = obj.id;
    //     this.nombre = obj.nombre;
    //     this.apellido = obj.apellido;
    //     this.curriculum = new Curriculum(obj.curriculum);
        
    // }
}
