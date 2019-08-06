import {Injectable} from "@nestjs/common";

import {TiendaEntity} from "./tienda.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";


@Injectable()
export class TiendaService {

    constructor(@InjectRepository(TiendaEntity)
                private readonly _tiendaRepository:Repository<TiendaEntity>){


    }

    finAll():Promise<TiendaEntity[]>{
        return this._tiendaRepository.find();

    }

}
