import {Module} from "@nestjs/common";
import {PokemonController} from "./pokemon.controller";
import {PokemonService} from "./pokemon.service";
import {LoginModule} from "../Login/login.module";

@Module({
    imports:[LoginModule],
    controllers:[
        PokemonController
    ],
    providers:[
        PokemonService
    ],
    exports:[
        PokemonService
    ]
})

export class PokemonModule {

}
