import {Body, Controller, Get, Param, Post, Req, Res} from "@nestjs/common";
import {PokemonService} from "./pokemon.service";
import {LoginService} from "../Login/login.service";
import {Pokemon} from "../interfaces/pokemon";


@Controller('examen/entrenador/gestion')
export  class PokemonController {
    constructor(private readonly _pokemonService:PokemonService, private readonly _loginService:LoginService){

    }

    @Get(':idPadre')
    gestionar(
        @Res() res,
        @Req() req
    ){
        let listaPokemon:Pokemon []= this._pokemonService.filtrar(Number(req.params.idPadre));
        console.log(listaPokemon);
        if(this._loginService.validarCookies(req,res)){
            res.render('Pokemon/inicio.ejs',{
                usuario:req.signedCookies.usuario,
                listaPokemon:listaPokemon,
                idPadre:Number(req.params.idPadre)
            });
        }
    }

    @Post('eliminar/:idPadre')
    eliminar(
        @Res() res,
        @Req() req,
        @Body('idPokemon')idPokemon:number ){
        this._pokemonService.eliminar(idPokemon,Number(req.params.idPadre));
        res.redirect('/examen/entrenador/gestion/'+Number(req.params.idPadre));
    }

    @Get('crear/:idPadre')
    crear(
        @Res() res,
        @Req() req
    ){
        if(this._loginService.validarCookies(req,res)){
            res.render('Pokemon/crear.ejs',{
                usuario:req.signedCookies.usuario,
                idPadre:req.params.idPadre
            });
        }else{
            res.redirect('examen/login');
        }
    }

    @Post('crear/:idPadre')
    crearPost(
        @Res() res,
        @Body() pokemon:Pokemon,
        @Req() req
    ){
        pokemon.idPadre=Number(req.params.idPadre);
        pokemon.nombrePokemon=pokemon.nombrePokemon;
        pokemon.poderEspecialUno=pokemon.poderEspecialUno;
        pokemon.poderEspecialDos=pokemon.poderEspecialDos;
        pokemon.fechaCaptura=new Date(pokemon.fechaCaptura);
        pokemon.nivel=Number(pokemon.nivel);
        this._pokemonService.crear(pokemon);
        res.redirect('/examen/entrenador/gestion/'+Number(pokemon.idPadre))
    }

    @Post('buscar/:idPadre')
    buscar(
        @Res() res,
        @Req() req,
        @Body('busqueda') busqueda:string
    ){
        const listaPokemon:Pokemon[]=this._pokemonService.buscarPorNombre(Number(req.params.idPadre),busqueda);
        if(this._loginService.validarCookies(req,res)){
            res.render('Pokemon/inicio.ejs',{
                usuario:req.signedCookies.usuario,
                listaPokemon:listaPokemon,
                idPadre:req.params.idPadre
            });
        }else{
            res.redirect('examen/login');
        }
    }
}
