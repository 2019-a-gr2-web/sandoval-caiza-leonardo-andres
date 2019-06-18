import {Entity} from "typeorm/decorator/entity/Entity";
import {Column} from "typeorm/decorator/columns/Column";
import {ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {DistribuidorEntity} from "../distribuidor/distribuidor.entity";
import {FiestaEntity} from "../fiesta/fiesta.entity";

@Entity('bd_trago')//nombre de la tabla
export class TragosEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 70,
        name: 'nombre_trago',
    })
    nombre: string;



    @Column({
        type: 'int',
        name: 'grados_alcohol',
    })
    gradosAlcohol: number;

    @Column({
        type: 'date',
        name: 'fecha_caducidad',
    })
    fechaCaducidad: Date;

    @Column({
        type: 'decimal',
        precision: 10,
        scale:2,
        name: 'precio',
    })
    precio: number;

    @Column({
        type: 'varchar',
        length: 10,
        name: 'tipo_trago',
    })
    tipo: 'Ron'|'Vodka'|'Whiskey'|'Tequila'|'Puntas'|'Cerveza';


    @ManyToOne(type => DistribuidorEntity,
        distribuidor => distribuidor.tragos)

    distribuidorId: DistribuidorEntity;

    @OneToMany(type => FiestaEntity, fiesta => fiesta)
    fiestas: FiestaEntity[]

}
