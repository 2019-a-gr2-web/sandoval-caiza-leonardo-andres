import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductoEntity} from "../Producto/producto.entity";
import {TiendaEntity} from "../Tienda/tienda.entity";
import {PedidoEntity} from "../Pedido/pedido.entity";

@Entity('detalle')
export  class DetalleEntity {

    @PrimaryGeneratedColumn()
    detalleId:number;

    @ManyToOne(type => ProductoEntity,
        producto=> producto.detalles)
    productoId:ProductoEntity;

    @ManyToOne(type => PedidoEntity,
        pedido=> pedido.detalles)
    pedidoId:PedidoEntity;

}
