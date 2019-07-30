import {IsDate, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";
import {TiendaEntity} from "../../Tienda/tienda.entity";

export class ProductoUpdateDto{

    @IsEmpty()
    productoId?:number;
    // productoId?:number;

    @IsNotEmpty()
    @IsString()
    nombre:string;

    @IsString()
    @IsOptional()
      //sinops:string;
    descripcion:string;

    @IsNotEmpty()
    @IsDate()
    anioLanzamiento:Date;

    @IsNumber()
    @IsOptional()
      //ratin:number;
    precio:number;

    @IsNotEmpty()
      //actoId:TiendaEntity;
    tiendaId:TiendaEntity;

}
