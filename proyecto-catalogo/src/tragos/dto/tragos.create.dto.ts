
import {DistribuidorEntity} from "../../distribuidor/distribuidor.entity";
import {IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class TragosCreateDto{

    @IsEmpty()
    id:number;

    @IsNotEmpty()
    @IsString()
    nombre: string;


    @IsNotEmpty()
    @IsNumber()
    gradosAlcohol: number;

    @IsDate()
    @IsOptional()
    fechaCaducidad: Date;

    @IsNumber()
    @IsOptional()
    precio: number;

    @IsNotEmpty()
    @IsString()
    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';

    @IsNumber()
    distribuidorId: DistribuidorEntity;

}
