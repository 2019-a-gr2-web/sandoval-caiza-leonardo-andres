import { Body, Controller, Query, Get, Post, Req, Res, Session } from '@nestjs/common';
import { AppService } from './app.service';

import { ProductoService } from './Producto/producto.service';
import { TiendaService } from './Tienda/tienda.service';
import { LoginService } from './Login/login.service'
import {UsuarioService} from "./Usuario/usuario.service";
import {PedidoService} from "./Pedido/pedido.service";

@Controller('/proyecto')
export class AppController {
  constructor(private readonly appService: AppService, private readonly _tiendaService: TiendaService, private readonly _loginService:LoginService,
              private  readonly _productosService:ProductoService, private readonly _usuarioService: UsuarioService,
              private readonly _pedidoService:PedidoService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/inicio')
  helloHello(): string {
    return 'Hola mundo';
  }

  @Get('login')
  login(
    @Res() res,
    @Req() req,
    @Session() session
  ){
    if(session.usuario){
      session.usuario.destroy();
    }

    res.cookie(
      'tipoRol',0,{
        signed:true
      }).render('Login/login.ejs');
  }


  @Post('ingresar')
  ingresar(
    @Body() body,
    @Res() res
  ){
    console.log(body.tipoRol);
    res.cookie(
      'usuario',
      body.usuario,
      {
        signed:true
      }
    ).cookie(
      'tipoRol',
      body.tipoRol,{
        signed:true
      }
    ).redirect('/api/menu');

    /*switch (body.tipoRol) {
      case '1':{

      }
      case '2':{
        res.cookie(
            'usuario',
            body.usuario,
            {
              signed:true
            }
        ).cookie(
            'tipoRol',
            body.tipoRol,{
              signed:true
            }
        ).redirect('/api/menu')
        break;
      }
      case 3:{
        break;
      }
    }*/
  }

  @Get('menu')
  async menu(
    @Res() res,
    @Req() req,
    @Session() session,
    @Query() query
  ){
    //if(this._loginService.validarCookies(req,res)){
    const rol= Number(req.signedCookies.tipoRol);
    switch (rol) {
      case 1:{
        try{
          const listaProductos= await this._tiendaService.finAll();
          res.render('Administrador/menuAdministrador.ejs',{
            usuario:session.username,
            tipoRol:req.signedCookies.tipoRol,
            listaTiendas:listaProductos
          });
        }
        catch (e) {
          console.error(e)
        }
        break;
      }
      case 2:{
        try{
          const listaTiendas= await this._tiendaService.finAll();

          let listaProductos;
          if(req.query.actor){
            listaProductos=await this._productosService.listarProductos(req.query.tienda);
          }else {
            listaProductos=await this._productosService.listarTodo();
          }

          let pedido=0;
          if(req.query.pedido){
            pedido=req.query.pedido;
          }

          let tienda=0;
          if(req.query.tienda){
            tienda=req.query.tienda
          }
          res.render('Usuario/menu.ejs',{
            usuario:session.username,
            tipoRol:req.signedCookies.tipoRol,
            listaTiendas:listaTiendas,
            listaProductos:listaProductos,
            idPedido:pedido,
            idTienda:tienda
          });
        }
        catch (e) {
          console.error(e)
        }
        break;
      }
      case 3:{
        try{
          const listaPedidos= await this._pedidoService.listarPedidosDespacho();
          res.render('Despachador/menu.ejs',{
            usuario:session.username,
            tipoRol:req.signedCookies.tipoRol,
            listaPedidos:listaPedidos
          });
        }
        catch (e) {
          console.error(e)
        }
        break;
      }
      default :{
        res.redirect('/api/login');
      }
    }

    //}
  }

  @Get('gestionPeliculas')
  gestionPeliculas(
    @Res() res,
    @Session() session
  ){
    res.render('Administrador/gestionPeliculas.ejs')
  }

  @Post('autenticar')
  async postAutenticar(
    @Body() body,
    @Session() session,
    @Res() res,
  ){
    try {
      const respuestaUsuario = await this._usuarioService
        .buscarUsuario(body.usuario,body.password, body.tipoRol);
      console.log(respuestaUsuario);
      if(respuestaUsuario.length>0){
        session.username=body.usuario;
        res.cookie(
          'tipoRol',
          body.tipoRol,{
            signed:true
          }
        ).redirect('/api/menu')

      }else{
        console.log("datos incorrecto");
        res.redirect('/api/login');
      }
    }catch (e) {
      console.log(e)
    }

  }
}






