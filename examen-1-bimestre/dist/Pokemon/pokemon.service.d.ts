import { Pokemon } from "../interfaces/pokemon";
export declare class PokemonService {
    bddPokemon: Pokemon[];
    bddTemp: Pokemon[];
    numPokemon: number;
    crear(nuevoPokemon: Pokemon): Pokemon;
    ingresarTemo(listaBusqueda: any): void;
    filtrar(id: number): Pokemon[];
    eliminar(id: number, idPadre: number): Pokemon[];
    buscarPorNombre(id: number, nombre: string): Pokemon[];
    constructor();
}
