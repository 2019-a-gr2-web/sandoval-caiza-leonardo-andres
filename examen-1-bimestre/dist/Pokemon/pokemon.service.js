"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let PokemonService = class PokemonService {
    constructor() {
        this.bddPokemon = [];
        this.bddTemp = [];
        this.numPokemon = 1;
    }
    crear(nuevoPokemon) {
        nuevoPokemon.idPokemon = this.numPokemon;
        this.numPokemon++;
        this.bddPokemon.push(nuevoPokemon);
        return nuevoPokemon;
    }
    ingresarTemo(listaBusqueda) {
    }
    filtrar(id) {
        this.bddTemp = this.bddPokemon.filter((pokemon) => {
            return pokemon.idPadre === id;
        });
        return this.bddTemp;
    }
    eliminar(id, idPadre) {
        const indice = this.bddPokemon.findIndex((pokemon) => {
            return (pokemon.idPokemon === id && pokemon.idPadre == idPadre);
        });
        this.bddPokemon.splice(indice, 1);
        return this.bddPokemon;
    }
    buscarPorNombre(id, nombre) {
        if (nombre !== '' && nombre !== null) {
            this.bddTemp = this.bddPokemon.filter((pokemon) => {
                return (pokemon.idPadre === id && pokemon.nombrePokemon.toUpperCase().includes(nombre.toUpperCase()));
            });
        }
        else {
            this.bddTemp = this.bddPokemon.filter((pokemon) => {
                return pokemon.idPadre === id;
            });
        }
        return this.bddTemp;
    }
};
PokemonService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map