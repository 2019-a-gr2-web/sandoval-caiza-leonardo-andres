import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import {TragosModule} from "./tragos/tragos.module";
import {DistribuidorModule} from "./distribuidor/distribuidor.module";
import {TragosEntity} from "./tragos/tragos.entity";
import {DistribuidorEntity} from "./distribuidor/distribuidor.entity";
import {FiestaEntity} from "./fiesta/fiesta.entity";
import { ProductoEntity } from './Producto/producto.entity';
import { TiendaEntity } from './Tienda/tienda.entity';
import { DetalleEntity } from './Detalle/detalle.entity';
import { PedidoEntity } from './Pedido/pedido.entity';
import { UsuarioEntity } from './Usuario/usuario.entity';
import {TiendaModule} from "./Tienda/tienda.module";
import { PedidoModule } from './Pedido/pedido.module';
import { UsuarioModule } from './Usuario/usuario.module';
import { ProductoModule } from './Producto/producto.module';
import { LoginModule } from './Login/login.module';
import {DespachoModule} from "./Despacho/despacho.module";


@Module({
  imports: [TiendaModule,LoginModule,ProductoModule,UsuarioModule,PedidoModule,DespachoModule,
    TypeOrmModule.forRoot({
        name: 'default', //nombre de la cadena de conexion por defecto de TYPEORM
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'catalogotest',
        entities: [
          ProductoEntity,
          TiendaEntity,
          DetalleEntity,
          PedidoEntity,
          UsuarioEntity
        ],
          synchronize: true,
          insecureAuth: true,
          dropSchema: false
      }),

],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
