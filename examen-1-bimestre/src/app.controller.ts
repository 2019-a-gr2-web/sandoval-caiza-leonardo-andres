import {Controller, Get, Res, Req, Post, Body} from '@nestjs/common';
import {LoginService} from "./Login/login.service";
import {EntrenadorService} from "./Entrenador/entrenador.service";

@Controller('/examen')
export class AppController {
  constructor(private readonly _loginService:LoginService,
              private readonly _entrenadorServices:EntrenadorService){}


  @Get('inicio')
  menu(@Res() res,
       @Req() req){
    if(this._loginService.validarCookies(req,res)){
      res.render('inicio.ejs',{
        usuario:req.signedCookies.usuario

      });
    }
  }

  @Get('login')
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

  @Post('ingresar')
  ingresar(
      @Body('usuario')usuario:string,
      @Res() res
  ){
    res.cookie(
        'usuario',
        usuario,
        {
          signed: true
        }
    ).redirect('/examen/inicio');
  }


  @Get('lista')
  gestion(
      @Res() res,
      @Req() req
  ){
    const listaEntrenador = this._entrenadorServices.bddEntrenador;
    if(this._loginService.validarCookies(req,res)){
      res.render('Entrenador/inicio.ejs',{
        usuario:req.signedCookies.usuario,
        listaEntrenador:listaEntrenador
      });
    }else{
      res.redirect('examen/login');
    }

  }

  @Get('eliminarCookie')
  eliminarCookie(
      @Res() res,
      @Req() req
  ){
    res.clearCookie('usuario');
    res.redirect('/examen/login');
  }


}
