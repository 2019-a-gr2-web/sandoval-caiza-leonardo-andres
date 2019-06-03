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
const login_service_1 = require("./Login/login.service");
const entrenador_service_1 = require("./Entrenador/entrenador.service");
let AppController = class AppController {
    constructor(_loginService, _entrenadorServices) {
        this._loginService = _loginService;
        this._entrenadorServices = _entrenadorServices;
    }
    menu(res, req) {
        if (this._loginService.validarCookies(req, res)) {
            res.render('inicio.ejs', {
                usuario: req.signedCookies.usuario
            });
        }
    }
    login(res, req) {
        if (req.usuario) {
            req.usuario('usuario', null);
        }
        res.render('Login/login.ejs');
    }
    ingresar(usuario, res) {
        res.cookie('usuario', usuario, {
            signed: true
        }).redirect('/examen/inicio');
    }
    gestion(res, req) {
        const listaEntrenador = this._entrenadorServices.bddEntrenador;
        if (this._loginService.validarCookies(req, res)) {
            res.render('Entrenador/inicio.ejs', {
                usuario: req.signedCookies.usuario,
                listaEntrenador: listaEntrenador
            });
        }
    }
};
__decorate([
    common_1.Get('inicio'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "menu", null);
__decorate([
    common_1.Get('login'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "login", null);
__decorate([
    common_1.Post('ingresar'),
    __param(0, common_1.Body('usuario')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "ingresar", null);
__decorate([
    common_1.Get('lista'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "gestion", null);
AppController = __decorate([
    common_1.Controller('/examen'),
    __metadata("design:paramtypes", [login_service_1.LoginService,
        entrenador_service_1.EntrenadorService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map