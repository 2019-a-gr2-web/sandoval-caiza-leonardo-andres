import {Injectable} from "@nestjs/common";
import {Entrenador} from "../Interfaces/entrenador";

@Injectable()
export class EntrenadorService{
    bddEntrenador:Entrenador[]=[];

    numEntrenador=1;

    crear(nuevoEntrenador:Entrenador){
        nuevoEntrenador.entrenadorId=this.numEntrenador;
        this.numEntrenador++;
        this.bddEntrenador.push(nuevoEntrenador);
        return nuevoEntrenador;
    }

    eliminar(id:number){
        const indice=this.bddEntrenador.findIndex(
            (entrenador)=>{
                return entrenador.entrenadorId===id;
            }
        );
        this.bddEntrenador.splice(indice,1);
        return this.bddEntrenador
    }

    buscarPorNombre(nombre: string):Entrenador[] {
        if(nombre!=='' && nombre!==null){
            return this.bddEntrenador.filter(
                (entrenador) => {
                    return entrenador.nombres.toUpperCase().includes(nombre.toUpperCase());
                }
            );
        }else{
            return this.bddEntrenador
        }

    }

    constructor(){
        const miEntrenador:Entrenador = {
            nombres:'Leonardo A',
            apellidos:'Sandoval C',
            fechaNacimiento:new Date(2019,8, 23),
            numeroMedalla:1712138393,
            campeonActual:true

        };
        this.crear(miEntrenador);
    }
}