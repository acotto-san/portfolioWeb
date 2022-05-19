export class RedSocial {
    id: number;
    nombreRRSS: string;
    enlace: string;

    constructor(obj:any){
        this.id = obj.id;
        this.nombreRRSS = obj.nombreRRSS;
        this.enlace = obj.enlace;
    }
}
