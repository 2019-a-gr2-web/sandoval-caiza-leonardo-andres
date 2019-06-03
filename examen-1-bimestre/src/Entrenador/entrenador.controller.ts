import {Controller, Get, Response, Body, Request, Post, Res, Req} from "@nestjs/common";
import {EntrenadorService} from "./entrenador.service";
import {LoginService} from "../Login/login.service";
import {Entrenador} from "../Interfaces/Entrenador";
import {PokemonService} from "../Pokemon/pokemon.service";


@Controller('/examen/entrenador')

export class EntrenadorController{
    constructor(private readonly  _loginService:LoginService,
                private readonly _entrenadorService:EntrenadorService,
                private readonly _productoServices:PokemonService){

    }

    @Post('eliminar')
    eliminar(
        @Res() res,
        @Body('entrenadorId') entrenadorId
    ){
        this._entrenadorService.eliminar(Number(entrenadorId));
        res.redirect('/examen/lista')
    }

    @Get('crear')
    crear(
        @Res() res,
        @Req() req
    ){
        if(this._loginService.validarCookies(req,res)){
            res.render('Entrenador/crear.ejs',{
                usuario:req.signedCookies.usuario
            });
        }
    }

    @Post('crear')
    crearPost(
        @Res() res,
        @Body() entrenador:Entrenador,
        @Req() req
    ){
        entrenador.nombres=entrenador.nombres;
        entrenador.apellidos=entrenador.apellidos;
        entrenador.fechaNacimiento=new Date(entrenador.fechaNacimiento);
        entrenador.numeroMedalla=Number(entrenador.numeroMedalla);
        entrenador.campeonActual=entrenador.campeonActual;
        this._entrenadorService.crear(entrenador);
        res.redirect('/examen/lista');
    }

    @Post('buscar')
    buscar(
        @Res() res,
        @Req() req,
        @Body('busqueda')busqueda
    ){
        const listaEntrenador:Entrenador[]=this._entrenadorService.buscarPorNombre(busqueda);
        if(this._loginService.validarCookies(req,res)){
            res.render('Entrenador/inicio.ejs',{
                usuario:req.signedCookies.usuario,
                listaEntrenador:listaEntrenador
            });
        }
    }



}