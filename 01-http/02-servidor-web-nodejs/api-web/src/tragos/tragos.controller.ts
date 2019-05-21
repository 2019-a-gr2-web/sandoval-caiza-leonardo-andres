import {Controller, Get, Res} from "@nestjs/common";
import {TragosService} from "./tragos.service";
import {Trago} from "./interfaces/trago";

@Controller('/api/traguito')
export class TragosController {

    constructor(private readonly _tragosService: TragosService) {

    }


    @Get('listar')
    listarTRagos(
        @Res() res
    ){
        const arregloTragos= this._tragosService.bddTragos;
        res.render('tragos/lista-tragos',{
            arregloTragos:arregloTragos
        })
    }
}

