import {Injectable} from "@nestjs/common";
import {Pokemon} from "../interfaces/pokemon";


@Injectable()
export class PokemonService {
    bddPokemon:Pokemon[]=[];
    bddTemp:Pokemon[]=[];
    numPokemon=1;

    crear(nuevoPokemon:Pokemon){
        nuevoPokemon.idPokemon=this.numPokemon;
        this.numPokemon++;
        this.bddPokemon.push(nuevoPokemon);
        return nuevoPokemon;
    }
    ingresarTemo(listaBusqueda){

    }

    filtrar(id:number):Pokemon[]{
        this.bddTemp= this.bddPokemon.filter(
            (pokemon)=>{
                return pokemon.idPadre===id;
            }
        );
        return this.bddTemp;
    }

    eliminar(id:number,idPadre:number){
        const indice=this.bddPokemon.findIndex(
            (pokemon)=>{
                return (pokemon.idPokemon===id && pokemon.idPadre==idPadre);
            }
        );
        this.bddPokemon.splice(indice,1);
        return this.bddPokemon
    }

    buscarPorNombre(id:number,nombre: string):Pokemon[] {
        if(nombre!=='' && nombre!==null){
            this.bddTemp= this.bddPokemon.filter(
                (pokemon)=>{
                    return (pokemon.idPadre===id && pokemon.nombrePokemon .toUpperCase().includes(nombre.toUpperCase()));
                }
            );
        }else{
            this.bddTemp= this.bddPokemon.filter(
                (pokemon)=>{
                    return pokemon.idPadre===id;
                }
            )
        }
        return  this.bddTemp
    }

    constructor(){
        const miPokemon:Pokemon = {
            idPadre:1,
            nombrePokemon:'Bulbasaur',
            poderEspecialUno:'Gallet',
            poderEspecialDos:'Pequeña',
            fechaCaptura:new Date(2019,6,5),
            nivel:1
        };
        this.crear(miPokemon);
    }
}