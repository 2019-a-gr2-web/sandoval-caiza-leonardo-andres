import {Module} from "@nestjs/common";
import {ProductoEntity} from "./producto.entity";
import {ProductoService} from "./producto.service";
import {ProductoController} from "./producto.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {LoginModule} from "../Login/login.module";

@Module({
    imports:[LoginModule,
        TypeOrmModule.forFeature(
            [
                ProductoEntity
            ],
            'default'
        ),
    ],
    controllers:[
        ProductoController
    ],
    providers:[
        ProductoService
    ],
    exports:[
        ProductoService
    ]
})
 export  class ProductoModule {

}
