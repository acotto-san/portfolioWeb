export class ExperienciaPuesto {
    id: number;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;

    constructor(obj:any){
        this.id = obj.id;
        this.nombre = obj.nombre;
        this.descripcion = obj.descripcion;
        this.fechaInicio = obj.fechaInicio;
        this.fechaFin = obj.fechaFin;
    }
}
