import { PokemonService } from "./pokemon.service";
import { LoginService } from "../Login/login.service";
import { Pokemon } from "../interfaces/pokemon";
export declare class PokemonController {
    private readonly _pokemonService;
    private readonly _loginService;
    constructor(_pokemonService: PokemonService, _loginService: LoginService);
    gestionar(res: any, req: any): void;
    eliminar(res: any, req: any, idPokemon: number): void;
    crear(res: any, req: any): void;
    crearPost(res: any, pokemon: Pokemon, req: any): void;
    buscar(res: any, req: any, busqueda: string): void;
}
