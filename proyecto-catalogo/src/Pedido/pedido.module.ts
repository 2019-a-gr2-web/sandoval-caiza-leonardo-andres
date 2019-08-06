import {Module} from '@nestjs/common';
import {LoginModule} from '../Login/login.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PedidoEntity} from './pedido.entity';
import {PedidoController} from './pedido.controller';
import {PedidoService} from './pedido.service';
import {UsuarioModule} from '../Usuario/usuario.module';
import {DetalleModule} from '../Detalle/detalle.module';


@Module({
    imports: [LoginModule, UsuarioModule, DetalleModule,

        TypeOrmModule.forFeature(
            [
                PedidoEntity,
            ],
            'default',
        ),
    ],
    controllers: [
        PedidoController,
    ],
    providers: [
        PedidoService,
    ],
    exports: [
        PedidoService,
    ],
})

export class PedidoModule {

}
