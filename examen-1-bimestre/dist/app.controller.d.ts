import { LoginService } from "./Login/login.service";
import { EntrenadorService } from "./Entrenador/entrenador.service";
export declare class AppController {
    private readonly _loginService;
    private readonly _entrenadorServices;
    constructor(_loginService: LoginService, _entrenadorServices: EntrenadorService);
    menu(res: any, req: any): void;
    login(res: any, req: any): void;
    ingresar(usuario: string, res: any): void;
    gestion(res: any, req: any): void;
}
