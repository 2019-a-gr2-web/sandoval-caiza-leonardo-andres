import {Controller, Get, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/proyecto')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/inicio')
  helloHello(): string {
    return 'Hola mundo';
  }

  @Get('/login')
  login(
      @Res() res,
      @Req() req){
    if(req.usuario){
      req.usuario(
          'usuario',
          null
      )
    }
    res.render('Login/login.ejs');
  }

}
