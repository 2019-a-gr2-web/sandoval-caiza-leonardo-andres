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
const entrenador_service_1 = require("./entrenador.service");
const login_service_1 = require("../Login/login.service");
const pokemon_service_1 = require("../Pokemon/pokemon.service");
let EntrenadorController = class EntrenadorController {
    constructor(_loginService, _entrenadorService, _productoServices) {
        this._loginService = _loginService;
        this._entrenadorService = _entrenadorService;
        this._productoServices = _productoServices;
    }
    eliminar(res, entrenadorId) {
        this._entrenadorService.eliminar(Number(entrenadorId));
        res.redirect('/examen/lista');
    }
    crear(res, req) {
        if (this._loginService.validarCookies(req, res)) {
            res.render('Entrenador/crear.ejs', {
                usuario: req.signedCookies.usuario
            });
        }
    }
    crearPost(res, entrenador, req) {
        entrenador.nombres = entrenador.nombres;
        entrenador.apellidos = entrenador.apellidos;
        entrenador.fechaNacimiento = new Date(entrenador.fechaNacimiento);
        entrenador.numeroMedalla = Number(entrenador.numeroMedalla);
        entrenador.campeonActual = entrenador.campeonActual;
        this._entrenadorService.crear(entrenador);
        res.redirect('/examen/lista');
    }
    buscar(res, req, busqueda) {
        const listaEntrenador = this._entrenadorService.buscarPorNombre(busqueda);
        if (this._loginService.validarCookies(req, res)) {
            res.render('Entrenador/inicio.ejs', {
                usuario: req.signedCookies.usuario,
                listaEntrenador: listaEntrenador
            });
        }
        else {
            res.redirect('examen/login');
        }
    }
};
__decorate([
    common_1.Post('eliminar'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body('entrenadorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EntrenadorController.prototype, "eliminar", null);
__decorate([
    common_1.Get('crear'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EntrenadorController.prototype, "crear", null);
__decorate([
    common_1.Post('crear'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], EntrenadorController.prototype, "crearPost", null);
__decorate([
    common_1.Post('buscar'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __param(2, common_1.Body('busqueda')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], EntrenadorController.prototype, "buscar", null);
EntrenadorController = __decorate([
    common_1.Controller('/examen/entrenador'),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        entrenador_service_1.EntrenadorService,
        pokemon_service_1.PokemonService])
], EntrenadorController);
exports.EntrenadorController = EntrenadorController;
//# sourceMappingURL=entrenador.controller.js.map