import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import {TragosModule} from "./tragos/tragos.module";
import {DistribuidorModule} from "./distribuidor/distribuidor.module";
import {TragosEntity} from "./tragos/tragos.entity";
import {DistribuidorEntity} from "./distribuidor/distribuidor.entity";
import {FiestaEntity} from "./fiesta/fiesta.entity";

@Module({
  imports: [

   TragosModule,
   DistribuidorModule,
   TragosModule,

      TypeOrmModule.forRoot({
        name: 'default', //nombre de la cadena de conexion por defecto de TYPEORM
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'catalogotest',
        entities: [
            TragosEntity,
            DistribuidorEntity,
            FiestaEntity
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
