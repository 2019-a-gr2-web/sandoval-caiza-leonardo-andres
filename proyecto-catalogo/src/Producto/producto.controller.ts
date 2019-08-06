import {Body, Controller, Get, Post, Render, Req, Res, Session} from '@nestjs/common';
import {ProductoService} from './producto.service';
import {LoginService} from '../Login/login.service';
import {ProductoEntity} from './producto.entity';
import {ProductoCreateDto} from './dto/producto.create.dto';
import {validate, ValidationError} from 'class-validator';
import {error} from 'util';
import {Query} from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('api/actor/gestion')
export class ProductoController {
    constructor(private readonly _productosService: ProductoService, private  readonly _loginService: LoginService) {

    }
    @Get(':idPadre')
    async gestionar(
        @Res() res,
        @Req() req,
        @Session() session,
    ) {
        console.log(Number(req.params.idPadre));

        try {

            const listaProductos = await this._productosService.listarProductos(Number(req.params.idPadre));
            console.log(listaProductos);
            // if(this._loginService.validarCookies(req,res)){
            res.render('Administrador/gestionPeliculas.ejs', {
                    // usuario:req.signedCookies.usuario,
                    usuario: session.username,
                    listaProductos: listaProductos,
                    idPadre: Number(req.params.idPadre),
                });
            // }
        } catch (e) {
            console.error(e);
        }
    }

    @Get('crear/:idPadre')
    crear(
        @Res() res,
        @Req() req,
        @Query() query,
        @Session() session,

    ) {
        const hoy = new Date();

        let fecha;
        // console.log(query.anioLanzamiento)
        if (query.anioLanzamiento == null) {
            fecha = hoy;
        } else {
            fecha = new Date(query.anioLanzamiento);
        }

        let mes = fecha.getMonth() + 1;
        let dia = fecha.getDate();
        if (mes < 10) {
            mes = '0' + mes;
        }
        if (dia < 10) {
            dia = '0' + dia;
        }
        const anioLanzamiento = fecha.getFullYear() + '-' + mes + '-' + dia;

        // console.log(fecha);
        // if(this._loginService.validarCookies(req,res)){
        res.render('Administrador/crear-editar.ejs', {
                // usuario:req.signedCookies.usuario,
                usuario: session.username,
                idPadre: req.params.idPadre,
                mensaje: query.mensaje,
                campos: query.campos,
                nombre: query.nombre,
                anioLanzamiento,
                precio: query.precio,
                descripcion: query.descripcion,
            });
        // }
    }

    @Post('crear/:idPadre')
    async crearPost(
        @Res() res,
        @Body() producto: ProductoEntity,
        @Req() req,
    ) {
        producto.anioLanzamiento = producto.anioLanzamiento ? new Date(producto.anioLanzamiento) : undefined;
        producto.tiendaId = req.params.idPadre;
        producto.precio = Number(producto.precio);
        // console.log(producto);
        const productoValidar = new ProductoCreateDto();

        productoValidar.nombre = producto.nombre;
        productoValidar.anioLanzamiento = producto.anioLanzamiento;
        productoValidar.precio = producto.precio;
        productoValidar.descripcion = producto.descripcion;
        productoValidar.tiendaId = producto.tiendaId;
        try {
            const errores = await validate(productoValidar);
            if (errores.length > 0) {
                const valores = (errores[0].target as ProductoCreateDto);

                const campos = [];
                errores.forEach(value => {
                    console.log(value.property);
                    campos.push(value.property);
                });
                const inputs = '&nombre=' + valores.nombre + '&anioLanzamiento=' + valores.anioLanzamiento + '&precio=' + valores.precio +  '&descripcion=' + valores.descripcion;
                res.redirect('/api/actor/gestion/crear/' + Number(req.params.idPadre) + '?mensaje=Complete los campos obligatorios ' + inputs);
            } else {
                const  respuestaCrear = await this._productosService.crear(producto);
                res.redirect('/api/actor/gestion/' + Number(req.params.idPadre));
            }

        } catch (e) {
            // console.error(e);
            res.status(500);
            res.send({mensaje: 'Error', codigo: 500});
        }
    }

    @Post('eliminar/:idPadre')
    async eliminar(
        @Res () res,
        @Req () req,
        @Body('productoId') productoId: number,
    ) {
        // console.log(productoId)

        try {
            const respuestaEliminar = await this._productosService.eliminarPorId(productoId);
            // console.log(respuestaEliminar);
            res.redirect('/api/actor/gestion/' + Number(req.params.idPadre));
        } catch (e) {
            console.error(e);
        }

    }

    @Post('editar/:idPadre')
    async editar(
        @Res () res,
        @Req () req,
        @Body('productoId') productoId: number,
        @Session() session,
    ) {
        // console.log(productoId)

        try {
            // const respuestaEditar=await this._productosService.eliminarPorId(productoId);

            res.render('Administrador/crear-editar.ejs', {
                // usuario:req.signedCookies.usuario,
                usuario: session.username,
                idPadre: req.params.idPadre,

            });
        } catch (e) {
            console.error(e);
        }

    }

    @Post('buscar/:idPadre')
    async buscar(
        @Res() res,
        @Req() req,
        @Body() body,
        @Session() session,
    ) {

        console.log(body);

        // if(this._loginService.validarCookies(req,res)){

        try {
                const listaProductos = await this._productosService.buscar(body.nombreBusqueda, body.fechaBusqueda);
                res.render('Administrador/gestionPeliculas.ejs', {
                    // usuario:req.signedCookies.usuario,
                    usuario: session.username,
                    listaProductos: listaProductos,
                    idPadre: req.params.idPadre,
                });
            } catch (e) {
                console.log(e);
            }
        // }
    }

    @Get('consultaPeliculas')
    async peliculas(@Res() res,
                    @Req() req,
    ) {
        console.log(Number(req.params.idPadre));

        try {

            const listaProductos = await this._productosService.listarTodo();

            console.log(listaProductos);
            res.render({
                listaProductos: listaProductos,
            });

        } catch (e) {
            console.error(e);
        }
    }

    @Post('consultar-por-id/:pedido')
    // @Render ('api/menu')
    async consultar(
        @Req() req,
        @Body() body,
        @Session() session,
        @Res() res,
    ) {
        try {

            const listaProductos = await this._productosService.listarProductos(Number(body.tiendaId));
            console.log(listaProductos);
            res.redirect('/api/menu?pedido=' + req.params.pedido + '&actor=' + body.tiendaId);
        } catch (e) {
            console.error(e);
        }
    }

}
