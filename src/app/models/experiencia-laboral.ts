import { ExperienciaPuesto } from "./experiencia-puesto";
import { Imagen } from "./imagen";

export class ExperienciaLaboral {
    id!: number;
    nombreEmpresa!: string;
    ubicacion!: string;
    tipoJornada!: string;
    logoImg!: Imagen;
    puestos!: ExperienciaPuesto[]

    constructor(obj:Partial<ExperienciaLaboral>){
        Object.assign(this,obj)
    }

    // constructor(obj: { id: number; nombreEmpresa: string; ubicacion: string; logoImg: Imagen; puestos: ExperienciaPuesto[]; }){
    //     this.id = obj.id;
    //     this.nombreEmpresa = obj.nombreEmpresa;
    //     this.ubicacion = obj.ubicacion;
    //     this.logoImg = obj.logoImg;
    //     this.puestos = [];
    //     obj.puestos.forEach((element: any) => {
    //         this.puestos.push(new ExperienciaPuesto(element))
    //     });
    // }
}
