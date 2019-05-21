export interface Trago {
    id?:number;
    nombre:string;
    tipo:'Ron'|'Vodka'|'Whiskey'|'Teqila'|'Puntas'|'Cerveza';
    gradosAlcohol: number;
    fechaCaducidad: Date;
    precio: number;
}
