import {Controller, Get, Req, Res} from "@nestjs/common";
import {TiendaService} from "./tienda.service";
import {LoginService} from "../Login/login.service";

@Controller('api/padre')

export class TiendaController {
    constructor(private readonly _actorServices:TiendaService, private readonly _loginService:LoginService){

    }



}
