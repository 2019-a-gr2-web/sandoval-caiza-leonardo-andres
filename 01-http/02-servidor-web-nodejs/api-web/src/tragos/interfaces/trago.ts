export interface Trago {
    id:number;
    nombre:string;
    tipo:'Ron'|'Vodka'|'Whiskey'|'Teqila'|'Puntas';
    gradosAlcohol: number;
    fechaCaducidad: Date;
    precio: number;
}