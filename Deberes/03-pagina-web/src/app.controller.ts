import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/pagina')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('inicio')
    inicio(@Response() res){
      return res.render(
          'inicio');
  }
}
