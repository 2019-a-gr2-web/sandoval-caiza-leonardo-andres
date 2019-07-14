
import {DistribuidorEntity} from "../../distribuidor/distribuidor.entity";

export class TragosUpdateDtoDto{

    id:number;

    nombre: string;

    gradosAlcohol: number;

    fechaCaducidad: Date;

    precio: number;

    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';

    distribuidorId: DistribuidorEntity;

}
