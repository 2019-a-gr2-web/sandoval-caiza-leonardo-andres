import {Controller} from "@nestjs/common";
import {LoginService} from "./login.service";

@Controller('examen/login')
export class LoginController {
    constructor(private readonly _LoginService:LoginService){

    }


}