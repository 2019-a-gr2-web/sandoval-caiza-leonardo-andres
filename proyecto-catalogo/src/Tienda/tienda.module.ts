import {Module} from "@nestjs/common";
import {TiendaController} from "./tienda.controller";
import {TiendaService} from "./tienda.service";
import {TiendaEntity} from "./tienda.entity";
import {LoginModule} from "../Login/login.module";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports:[LoginModule,

        TypeOrmModule.forFeature(
            [
                TiendaEntity
            ],
            'default'
        ),
    ],
    controllers:[
        TiendaController
    ],
    providers:[
        TiendaService,
    ],
    exports:[
        TiendaService,
    ]
})

export class TiendaModule {

}
