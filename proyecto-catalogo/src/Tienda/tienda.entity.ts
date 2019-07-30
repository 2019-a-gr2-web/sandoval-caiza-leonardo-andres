import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ProductoEntity} from "../Producto/producto.entity";
import {type} from "os";

@Entity('actor')
export  class TiendaEntity {
    @PrimaryGeneratedColumn()
    tiendaId:number;

    @Column({
        length:70
    })
    nombres:string;

    @Column({
        length:70
    })
    apellidos:string;

    @Column({
        default:'2019-06-06'
    })
    fechaApertura:Date;

    @Column({
        type:'boolean',
        nullable:false
    })
    matriz:boolean;

    @OneToMany(type => ProductoEntity,
        producto=> producto.tiendaId)
    productos:ProductoEntity[];
}
