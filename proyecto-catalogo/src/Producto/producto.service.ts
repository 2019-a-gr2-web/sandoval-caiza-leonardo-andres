import {Injectable} from "@nestjs/common";

import {ProductoEntity} from "./producto.entity";
import {DeleteResult, Repository} from "typeorm";

import {InjectRepository} from '@nestjs/typeorm';


@Injectable()
export class ProductoService{
    //bddPeliculas: Pelicula[] = [];
    recnum = 1;

    constructor(@InjectRepository(ProductoEntity)
                private readonly _productoRepository: Repository<ProductoEntity>,){

    }

    listarProductos(id):Promise<ProductoEntity[]>{
        return this._productoRepository.find({
            where:{tiendaId:id}
        });
    }

    crear(nuevoProducto: ProductoEntity):Promise<ProductoEntity> {

        const objetoEntidad = this._productoRepository
            .create(nuevoProducto);

        return this._productoRepository.save(objetoEntidad);
    }

    eliminarPorId(id?:number):Promise<object>{

    /*const peliculaEliminar:ProductoEntity= this._productoRepository.findOne({
            productoId:id
        });*/
    return this._productoRepository.delete({
        productoId:id
    });

    }

    buscar(parametrosBusqueda?,fechaBusqueda?):Promise<ProductoEntity[]>{

        if(parametrosBusqueda!="" && fechaBusqueda!=""){
            return this._productoRepository.find({
                nombre:parametrosBusqueda,
                anioLanzamiento:fechaBusqueda}
            );
        }else{
            if(parametrosBusqueda=="" && fechaBusqueda!=""){
                return this._productoRepository.find({
                    nombre:parametrosBusqueda}
                );
            }else if(parametrosBusqueda!="" && fechaBusqueda==""){
                return this._productoRepository.find({
                    nombre:parametrosBusqueda}
                );
            }else{
                return this._productoRepository.find();
            }
        }

    }

    listarTodo():Promise<ProductoEntity[]>{
        return this._productoRepository.find();
    }

}
