import {Injectable, Module} from "@nestjs/common";
import {Trago} from "./interfaces/trago";

@Injectable()
export class TragosService{

    bddTragos:Trago[] = [];
    recnum=1;

    crear(nuevoTrago: Trago){
        nuevoTrago.id=this.recnum;
        this.recnum++;
        this.bddTragos.push(nuevoTrago);
        return nuevoTrago;
    }

    buscarPorID(id:number) {
        this.bddTragos.find(
            (trago) => {
                return trago.id === id;
            }
        );
    }

    eliminarPorId(nuevoTrago: Trago){
        const indice = this.bddTragos.findIndex(
            (trago)=>{
                return trago.id === id;
            }
        );
        this.bddTragos.splice(indice,1);
        return this.bddTragos;
    }

    actualizar(tragoActualizado: Trago, id:number){

        const indice = this.bddTragos.findIndex(
            (trago) => {
                return trago.id === id;
            }
        );
        tragoActualizado.id= this.bddTragos[indice].id;
        //this.bddTragos[indice]=tragoActualizado;
    }

}