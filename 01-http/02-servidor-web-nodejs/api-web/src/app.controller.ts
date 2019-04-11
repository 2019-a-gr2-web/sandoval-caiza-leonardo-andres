import {Controller, Get, HttpCode, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()// METODO HTTP
  getHello(): string {
    return this.appService.getHello();
  }

  @Post() // METODO HTTP
  @HttpCode(200)
  postHello(){
    return 'Hola mundo en post';
  }
}

/*
@NombreDecoradorClase()
class usuario{
  @Atributo()
  atributoPublico; //public
  private atributoPrivado;
  protected atributoProtegido;
  constructor(@Parametro atributoPublico,
              @OtroParametro atributoPrivado,
              @OtrooParametro atributoProtegido){
    this.atributoPublico=atributoPublico;
    this.atributoPrivado=atributoPrivado;
    this.atributoProtegido=atributoProtegido;
  }

  @MetodoA()
  public metodoPublico(@ParametroA() a){}
  @MetodoB()
  private metodoPrivado(){}
  protected metodoProtegido(){}

}
*/