import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {TiendaEntity} from '../Tienda/tienda.entity';
import {DetalleEntity} from '../Detalle/detalle.entity';

@Entity('pelicula')
export class ProductoEntity {
    @PrimaryGeneratedColumn()
    productoId: number;

    @Column({
        length: 100,
    })
    nombre: string;

    @Column({
        default: '2019-06-19',
    })
    anioLanzamiento: Date;

    @Column({
        type: 'int',
    })
    precio: number;

    @Column({
        length: '100',
    })
    descripcion: string;

    @ManyToOne(type => TiendaEntity,
            tienda => tienda.productos)
    tiendaId: TiendaEntity;

    @OneToMany(type => DetalleEntity,
        detalle => detalle.productoId)
        detalles: DetalleEntity[];
}
