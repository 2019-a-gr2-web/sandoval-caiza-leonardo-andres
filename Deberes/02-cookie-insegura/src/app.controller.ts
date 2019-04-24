import {Controller, Get, HttpCode, Headers, Response, Request, Query} from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';


@Controller('/cookieInsegura')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/nombreUsuario')
  @HttpCode(200)

  nombreUsuario(@Request() request, @Response() response) {
    const cookies = request.cookies;
    const esquemaValidacionNombre = Joi
        .object()
        .keys({
        nombre: Joi.string().alphanum().min(5).required()
    });

    const objetoValidacion = Joi.validate({
    }, esquemaValidacionNombre);

    if (objetoValidacion.error) {
      response.status(400).send({error: 'El nombre de usuario debe ser alfanumerico, minimo 5 caracteres'});
    } else {
      const usuario = 'leonardo';

      if (!cookies[usuario]) {
        response.cookie(usuario, 5);
        response.send({nombreUsuario: usuario, resultado: 5});
      } else {
        return response.send({mensaje: 'Cookie creada :)'});
      }
    }
  }
}
