import {Module} from "@nestjs/common";
import {TragosController} from "./tragos.controller";
import {TragosService} from "./tragos.service";
@Module({
    imports:[], //Modulos
    controllers:[
        TragosController
    ], //Controladores
    providers:[
        TragosService
    ], //servicios
    exports:[
        TragosService
    ] //exportar servicios
})

export class TragosModule{


}