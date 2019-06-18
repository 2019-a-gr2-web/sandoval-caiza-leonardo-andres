import {Module} from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm'
import {FiestaEntity} from "./fiesta.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature(
            [
                FiestaEntity

            ],
            'default'
        ),
    ], //Modulos
    controllers:[

    ], //Controladores
    providers:[

    ], //servicios
    exports:[

    ] //exportar servicios
})

export class FiestaModule{


}
