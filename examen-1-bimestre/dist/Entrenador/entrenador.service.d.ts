import { Entrenador } from "../Interfaces/entrenador";
export declare class EntrenadorService {
    bddEntrenador: Entrenador[];
    numEntrenador: number;
    crear(nuevoEntrenador: Entrenador): Entrenador;
    eliminar(id: number): Entrenador[];
    buscarPorNombre(nombre: string): Entrenador[];
    constructor();
}
