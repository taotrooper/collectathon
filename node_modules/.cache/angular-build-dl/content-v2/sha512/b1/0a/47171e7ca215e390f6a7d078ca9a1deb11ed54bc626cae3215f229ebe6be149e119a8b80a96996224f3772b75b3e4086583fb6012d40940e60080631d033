(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-game-edit-game-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-game/edit-game.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-game/edit-game.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar edición juego</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"game\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" [value]=\"game.Year\" formControlName=\"Year\" \n        type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">EAN13</ion-label>\n        <ion-input placeholder=\"Ejemplo: 8491234567890\" [value]=\"game.EAN13\" formControlName=\"EAN13\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Plataforma o consola</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Plataforma\" type=\"text\" value=\"{{game.Plataforma}}\">\n          <ion-select-option *ngFor=\"let t of PlataformaLista\" [value]=\"t\">{{t}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Formato de juego</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"FormatoJuego\" type=\"text\" value=\"{{game.FormatoJuego}}\">\n          <ion-select-option *ngFor=\"let f of FormatoLista\" [value]=\"f\">{{f}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Región</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"RegionJuego\" type=\"text\" value=\"{{game.RegionJuego}}\">\n          <ion-select-option *ngFor=\"let r of RegionLista\" [value]=\"r\">{{r}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Distribuidora</ion-label>\n        <ion-input placeholder=\"Ejemplo: CAPCOM\" [value]=\"game.Distribuidora\" formControlName=\"Distribuidora\" \n        type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Estudio</ion-label>\n        <ion-input placeholder=\"Ejemplo: Santa Monica Studio\" [value]=\"game.Estudio\" formControlName=\"Estudio\" \n        type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Notas de la edición (remasterizado, ed. especial, etc.)</ion-label>\n        <ion-input placeholder=\"Ejemplo: Edición coleccionista\" [value]=\"game.NotasEdJuego\" \n        formControlName=\"NotasEdJuego\" \n        type=\"text\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/edit-game/edit-game-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/edit-game/edit-game-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditGamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGamePageRoutingModule", function() { return EditGamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-game.page */ "./src/app/edit-game/edit-game.page.ts");




const routes = [
    {
        path: '',
        component: _edit_game_page__WEBPACK_IMPORTED_MODULE_3__["EditGamePage"]
    }
];
let EditGamePageRoutingModule = class EditGamePageRoutingModule {
};
EditGamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditGamePageRoutingModule);



/***/ }),

/***/ "./src/app/edit-game/edit-game.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-game/edit-game.module.ts ***!
  \***********************************************/
/*! exports provided: EditGamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGamePageModule", function() { return EditGamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-game-routing.module */ "./src/app/edit-game/edit-game-routing.module.ts");
/* harmony import */ var _edit_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-game.page */ "./src/app/edit-game/edit-game.page.ts");







let EditGamePageModule = class EditGamePageModule {
};
EditGamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_game_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditGamePageRoutingModule"]
        ],
        declarations: [_edit_game_page__WEBPACK_IMPORTED_MODULE_6__["EditGamePage"]]
    })
], EditGamePageModule);



/***/ }),

/***/ "./src/app/edit-game/edit-game.page.scss":
/*!***********************************************!*\
  !*** ./src/app/edit-game/edit-game.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZ2FtZS9lZGl0LWdhbWUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit-game/edit-game.page.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-game/edit-game.page.ts ***!
  \*********************************************/
/*! exports provided: EditGamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditGamePage", function() { return EditGamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let EditGamePage = class EditGamePage {
    constructor(http, navCtrl, modalController, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.FormatoLista = ['Físico', 'Digital'];
        this.PlataformaLista = ['Android', 'Arcade', 'Atari', 'Game & Watch', 'Game Boy (GB)', 'Game Boy Advance (GBA)',
            'Game Boy Color (GBC)', 'Game Gear', 'Google Stadia', 'iOS', 'Nintendo 3DS', 'Nintendo 64 (N64)',
            'Nintendo DS (NDS)', 'Nintendo Entertainment System (NES)', 'Nintendo GameCube (NGC)', 'Nintendo Switch', 'PC',
            'PlayStation (PSX)', 'PlayStation 2 (PS2)', 'PlayStation 3 (PS3)', 'PlayStation 4 (PS4)', 'PlayStation 5 (PS5)',
            'PlayStation Portable (PSP)', 'PlayStation Vita', 'Sega Dreamcast', 'Sega Genesis', 'Sega Mega Drive',
            'Sega Saturn', 'Super Nintendo Entertainment System (SNES)', 'Wii', 'Wii U', 'Xbox', 'Xbox 360', 'Xbox One',
            'Xbox Series X'];
        this.RegionLista = ['Sin región', 'NTSC-U/C', 'PAL', 'NTSC-J', 'Otra'];
        this.game = null;
        this.isSubmitted = false;
        this.id = this.route.snapshot.params.id;
        this.game = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Plataforma: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            FormatoJuego: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            RegionJuego: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Distribuidora: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Estudio: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NotasEdJuego: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.getGame();
        console.log("game", this.game);
    }
    ngOnInit() { }
    getGame() {
        this.http.getEdition(this.id, "game").subscribe((res) => {
            this.item = res['ItemID'];
            this.game = this.formBuilder.group({
                'Year': [res['Year']],
                'EAN13': [res['EAN13']],
                'EditionID': [res['EditionID']],
                'Plataforma': [res['Plataforma']],
                'FormatoJuego': [res['FormatoJuego']],
                'RegionJuego': [res['RegionJuego']],
                'Distribuidora': [res['Distribuidora']],
                'Estudio': [res['Estudio']],
                'NotasEdJuego': [res['NotasEdJuego']]
            });
            console.log("res: ", res);
            console.log("game: ", this.game);
        }, (error) => {
            console.error(error);
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.game.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.game.value);
            var res = this.http.updateEdition(this.game.value, this.id, "game");
            console.log("Resultado: ", res);
            this.navCtrl.navigateForward("/item/game/" + this.item);
        }
    }
    get errorControl() {
        return this.game.controls;
    }
};
EditGamePage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditGamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-game.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-game/edit-game.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-game.page.scss */ "./src/app/edit-game/edit-game.page.scss")).default]
    })
], EditGamePage);



/***/ })

}]);
//# sourceMappingURL=edit-game-edit-game-module-es2015.js.map