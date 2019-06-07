import { EntrenadorService } from "./entrenador.service";
import { LoginService } from "../Login/login.service";
import { Entrenador } from "../Interfaces/Entrenador";
import { PokemonService } from "../Pokemon/pokemon.service";
export declare class EntrenadorController {
    private readonly _loginService;
    private readonly _entrenadorService;
    private readonly _productoServices;
    constructor(_loginService: LoginService, _entrenadorService: EntrenadorService, _productoServices: PokemonService);
    eliminar(res: any, entrenadorId: any): void;
    crear(res: any, req: any): void;
    crearPost(res: any, entrenador: Entrenador, req: any): void;
    buscar(res: any, req: any, busqueda: any): void;
}
