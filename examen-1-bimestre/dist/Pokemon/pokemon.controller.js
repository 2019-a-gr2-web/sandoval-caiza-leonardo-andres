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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const pokemon_service_1 = require("./pokemon.service");
const login_service_1 = require("../Login/login.service");
let PokemonController = class PokemonController {
    constructor(_pokemonService, _loginService) {
        this._pokemonService = _pokemonService;
        this._loginService = _loginService;
    }
    gestionar(res, req) {
        let listaPokemon = this._pokemonService.filtrar(Number(req.params.idPadre));
        console.log(listaPokemon);
        if (this._loginService.validarCookies(req, res)) {
            res.render('Pokemon/inicio.ejs', {
                usuario: req.signedCookies.usuario,
                listaPokemon: listaPokemon,
                idPadre: Number(req.params.idPadre)
            });
        }
    }
    eliminar(res, req, idPokemon) {
        this._pokemonService.eliminar(idPokemon, Number(req.params.idPadre));
        res.redirect('/examen/entrenador/gestion/' + Number(req.params.idPadre));
    }
    crear(res, req) {
        if (this._loginService.validarCookies(req, res)) {
            res.render('Pokemon/crear.ejs', {
                usuario: req.signedCookies.usuario,
                idPadre: req.params.idPadre
            });
        }
        else {
            res.redirect('examen/login');
        }
    }
    crearPost(res, pokemon, req) {
        pokemon.idPadre = Number(req.params.idPadre);
        pokemon.nombrePokemon = pokemon.nombrePokemon;
        pokemon.poderEspecialUno = pokemon.poderEspecialUno;
        pokemon.poderEspecialDos = pokemon.poderEspecialDos;
        pokemon.fechaCaptura = new Date(pokemon.fechaCaptura);
        pokemon.nivel = Number(pokemon.nivel);
        this._pokemonService.crear(pokemon);
        res.redirect('/examen/entrenador/gestion/' + Number(pokemon.idPadre));
    }
    buscar(res, req, busqueda) {
        const listaPokemon = this._pokemonService.buscarPorNombre(Number(req.params.idPadre), busqueda);
        if (this._loginService.validarCookies(req, res)) {
            res.render('Pokemon/inicio.ejs', {
                usuario: req.signedCookies.usuario,
                listaPokemon: listaPokemon,
                idPadre: req.params.idPadre
            });
        }
        else {
            res.redirect('examen/login');
        }
    }
};
__decorate([
    common_1.Get(':idPadre'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "gestionar", null);
__decorate([
    common_1.Post('eliminar/:idPadre'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __param(2, common_1.Body('idPokemon')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Number]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "eliminar", null);
__decorate([
    common_1.Get('crear/:idPadre'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "crear", null);
__decorate([
    common_1.Post('crear/:idPadre'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "crearPost", null);
__decorate([
    common_1.Post('buscar/:idPadre'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __param(2, common_1.Body('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", void 0)
], PokemonController.prototype, "buscar", null);
PokemonController = __decorate([
    common_1.Controller('examen/entrenador/gestion'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService, login_service_1.LoginService])
], PokemonController);
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map