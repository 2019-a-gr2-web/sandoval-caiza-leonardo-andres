import {Module} from "@nestjs/common";
import {EntrenadorService} from "./entrenador.service";
import {LoginModule} from "../Login/login.module";
import {LoginService} from "../Login/login.service";
import {PokemonService} from "../Pokemon/pokemon.service";
import {EntrenadorController} from "./entrenador.controller";

@Module({
    imports:[LoginModule],
    controllers:[
        EntrenadorController
    ],
    providers:[
        EntrenadorService,
        LoginService,
        PokemonService
    ],
    exports:[
        EntrenadorService,
        LoginService,
        PokemonService
    ]
})

export class EntrenadorModule {

}