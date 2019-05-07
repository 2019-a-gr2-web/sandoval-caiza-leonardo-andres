import {Controller, Get, HttpCode, Headers, Body, Post, Put, Delete, Query, Response, Request} from '@nestjs/common';
import { AppService } from './app.service';
import * as Joi from '@hapi/joi';

@Controller('/calculadora')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello-world')// METODO HTTP
  getHello(): string {
    return 'Hello World';
  }

  @Get('/suma2')
  @HttpCode(200)
  suma(@Headers() headers,  @Request() req, @Response() res){
    const cookies=req.cookies;
    const cookiesSeg2=req.signedCookies;
    if(!cookiesSeg2.puntos){
      res.cookie('puntos', '100',{signed:true});
    }

      const numero1=Number(headers.numero1);
      const numero2=Number(headers.numero2);

     if(!cookies.usuario)
      res.cookie("usuario","Leonardo");

      const esquemaValidacionNumero = Joi
          .object()
          .keys({
            nombre:Joi.string().required(),
            numero1:Joi.number().integer().required(),
            numero2:Joi.number().integer().required()
      });

      const objetoValidacion={
        nombre:cookies.usuario,
        numero1:numero1,
        numero2:numero2
      };

      const resultado=Joi.validate(objetoValidacion,esquemaValidacionNumero);

      if(resultado.error){
        return res.send(`Resultado: ${resultado.error}`);
      }else{
        const totalSuma=numero1+numero2;
        const puntosRes=cookiesSeg2.puntos-totalSuma;
      //  cookiesSeg.puntos=puntosRes;

        if(cookiesSeg2.puntos) {
          res.cookie('puntos', puntosRes, {signed: true});
        }

        if (cookiesSeg2.puntos <=0) {
          return res.status(201).send({
            'usuario: ': `${cookies.usuario}`,
            'resultado: ': `${totalSuma}`,
            'mensaje: ': 'Se le terminaron sus puntos'
          });
        } else {
          return res.status(200).send({
            'usuario: ': `${cookies.usuario}`,
            'resultado: ': `${totalSuma}`,
            'intentos restantes: ': `Puntos restantes: ${cookiesSeg2.puntos}`
          });
        }
      }

  }

  @Post('/resta2')
  @HttpCode(201)
  resta(@Body() body,@Request() req, @Response() res){

    const cookies=req.cookies;
    const cookiesSeg=req.signedCookies;
    if(!cookiesSeg.puntos){
      res.cookie('puntos', '100',{signed:true});
    }

    const numero1=Number(body.numero1);
    const numero2=Number(body.numero2);

    if(!cookies.usuario)
      res.cookie("usuario","Leonardo");

    const esquemaValidacionNumero = Joi
        .object()
        .keys({
          nombre:Joi.string().required(),
          numero1:Joi.number().integer().required(),
          numero2:Joi.number().integer().required()
        });

    const objetoValidacion={
      nombre:cookies.usuario,
      numero1:numero1,
      numero2:numero2
    };

    const resultado=Joi.validate(objetoValidacion,esquemaValidacionNumero);

    if(resultado.error){
      return res.send(`Resultado: ${resultado.error}`);
    }else{
      const totalResta=numero1-numero2;
      const puntosRes=cookiesSeg.puntos-totalResta;
      cookiesSeg.puntos=puntosRes;

      if(cookiesSeg.puntos) {
        res.cookie('puntos', puntosRes, {signed: true});
      }

      if (cookiesSeg.puntos <=0) {
        return res.status(201).send({
          'usuario: ': `${cookies.usuario}`,
          'resultado: ': `${totalResta}`,
          'mensaje: ': 'Se le terminaron sus puntos'
        });
      } else {
        return res.status(201).send({
          'usuario: ': `${cookies.usuario}`,
          'resultado: ': `${totalResta}`,
          'intentos restantes: ': `Puntos restantes: ${cookiesSeg.puntos}`
        });
      }
    }
  }

  @Put('/multiplicacion2')
  @HttpCode(202)
  multiplicacion(@Query() query, @Request() req, @Response() res){

    const cookies=req.cookies;
    const cookiesSeg=req.signedCookies;
    if(!cookiesSeg.puntos){
      res.cookie('puntos', '100',{signed:true});
    }

    const numero1=Number(query.numero1);
    const numero2=Number(query.numero2);

    if(!cookies.usuario)
      res.cookie("usuario","Leonardo");

    const esquemaValidacionNumero = Joi
        .object()
        .keys({
          nombre:Joi.string().required(),
          numero1:Joi.number().integer().required(),
          numero2:Joi.number().integer().required()
        });

    const objetoValidacion={
      nombre:cookies.usuario,
      numero1:numero1,
      numero2:numero2
    };

    const resultado=Joi.validate(objetoValidacion,esquemaValidacionNumero);

    if(resultado.error){
      return res.send(`Resultado: ${resultado.error}`);
    }else{
      const totalMultiplicacion=numero1*numero2;
      const puntosRes=cookiesSeg.puntos-totalMultiplicacion;
      cookiesSeg.puntos=puntosRes;

      if(cookiesSeg.puntos) {
        res.cookie('puntos', puntosRes, {signed: true});
      }

      if (cookiesSeg.puntos <=0) {
        return res.status(201).send({
          'usuario: ': `${cookies.usuario}`,
          'resultado: ': `${totalMultiplicacion}`,
          'mensaje: ': 'Se le terminaron sus puntos'
        });
      } else {
        return res.status(202).send({
          'usuario: ': `${cookies.usuario}`,
          'resultado: ': `${totalMultiplicacion}`,
          'intentos restantes: ': `Puntos restantes: ${cookiesSeg.puntos}`
        });
      }
    }
  }

  @Delete('/divisionQ2')
  @HttpCode(203)
  division(@Query() query, @Request() req, @Response() res) {

    const cookies = req.cookies;
    const cookiesSeg = req.signedCookies;
    if (!cookiesSeg.puntos) {
      res.cookie('puntos', '100', {signed: true});
    }

    const numero1 = Number(query.numero1);
    const numero2 = Number(query.numero2);

    if (!cookies.usuario)
      res.cookie("usuario", "Leonardo");

    const esquemaValidacionNumero = Joi
        .object()
        .keys({
          nombre: Joi.string().required(),
          numero1: Joi.number().integer().required(),
          numero2: Joi.number().integer().min(1).required()
        });

    const objetoValidacion = {
      nombre: cookies.usuario,
      numero1: numero1,
      numero2: numero2
    };

    const resultado = Joi.validate(objetoValidacion, esquemaValidacionNumero);

    if (resultado.error) {
      return res.send(`Resultado: Ingrese solo numeros y el denominador mayor que 0`);
    } else {
      const totalDivision = numero1 / numero2;
      const puntosRes = cookiesSeg.puntos - totalDivision;
      cookiesSeg.puntos = puntosRes;

      if (cookiesSeg.puntos) {
        res.cookie('puntos', puntosRes, {signed: true});
      }

      if (cookiesSeg.puntos <= 0) {
        return res.status(203).send({
          'usuario: ': `${cookies.usuario}`,
          'resultado: ': `${totalDivision}`,
          'mensaje: ': 'Se le terminaron sus puntos'
        });
      } else {
        return res.status(203).send({
          'usuario: ': `${cookies.usuario}`,
          'resultado: ': `${totalDivision}`,
          'intentos restantes: ': `Puntos restantes: ${cookiesSeg.puntos}`
        });
      }
    }
  }

}

