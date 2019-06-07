"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const entrenador_service_1 = require("./entrenador.service");
const login_module_1 = require("../Login/login.module");
const login_service_1 = require("../Login/login.service");
const pokemon_service_1 = require("../Pokemon/pokemon.service");
const entrenador_controller_1 = require("./entrenador.controller");
let EntrenadorModule = class EntrenadorModule {
};
EntrenadorModule = __decorate([
    common_1.Module({
        imports: [login_module_1.LoginModule],
        controllers: [
            entrenador_controller_1.EntrenadorController
        ],
        providers: [
            entrenador_service_1.EntrenadorService,
            login_service_1.LoginService,
            pokemon_service_1.PokemonService
        ],
        exports: [
            entrenador_service_1.EntrenadorService,
            login_service_1.LoginService,
            pokemon_service_1.PokemonService
        ]
    })
], EntrenadorModule);
exports.EntrenadorModule = EntrenadorModule;
//# sourceMappingURL=entrenador.module.js.map