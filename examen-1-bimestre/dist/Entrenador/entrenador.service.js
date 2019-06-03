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
let EntrenadorService = class EntrenadorService {
    constructor() {
        this.bddEntrenador = [];
        this.numEntrenador = 1;
        const miEntrenador = {
            nombres: 'Leonardo A',
            apellidos: 'Sandoval C',
            fechaNacimiento: new Date(2019, 8, 23),
            numeroMedalla: 1712138393,
            campeonActual: true
        };
        this.crear(miEntrenador);
    }
    crear(nuevoEntrenador) {
        nuevoEntrenador.entrenadorId = this.numEntrenador;
        this.numEntrenador++;
        this.bddEntrenador.push(nuevoEntrenador);
        return nuevoEntrenador;
    }
    eliminar(id) {
        const indice = this.bddEntrenador.findIndex((entrenador) => {
            return entrenador.entrenadorId === id;
        });
        this.bddEntrenador.splice(indice, 1);
        return this.bddEntrenador;
    }
    buscarPorNombre(nombre) {
        if (nombre !== '' && nombre !== null) {
            return this.bddEntrenador.filter((entrenador) => {
                return entrenador.nombres.toUpperCase().includes(nombre.toUpperCase());
            });
        }
        else {
            return this.bddEntrenador;
        }
    }
};
EntrenadorService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], EntrenadorService);
exports.EntrenadorService = EntrenadorService;
//# sourceMappingURL=entrenador.service.js.map