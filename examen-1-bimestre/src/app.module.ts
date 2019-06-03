import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {PokemonModule} from "./Pokemon/pokemon.module";
import {LoginModule} from "./Login/login.module";
import {EntrenadorModule} from "./Entrenador/entrenador.module";


@Module({
  imports: [PokemonModule, LoginModule, EntrenadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
