(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-music-edit-music-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-music/edit-music.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-music/edit-music.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/edition/music/{{id}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar edición álbum</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"music\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" [value]=\"music.Year\" formControlName=\"Year\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">EAN13</ion-label>\n        <ion-input placeholder=\"Ejemplo: 8491234567890\" [value]=\"music.EAN13\" formControlName=\"EAN13\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Formato</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Formato\" type=\"text\" value=\"{{music.Formato}}\">\n          <ion-select-option *ngFor=\"let t of TipoLista\" [value]=\"t\">{{t}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de pistas</ion-label>\n        <ion-input placeholder=\"Ejemplo: 10\" [value]=\"music.NroPistas\" formControlName=\"NroPistas\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de discos</ion-label>\n        <ion-input placeholder=\"Ejemplo: 1\" [value]=\"music.NroDiscos\" formControlName=\"NroDiscos\" type=\"number\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Sello discográfico</ion-label>\n        <ion-input placeholder=\"Ejemplo: Sony Music\" [value]=\"music.Sello\" formControlName=\"Sello\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">la versión (remasterizado, ed. especial, etc.)</ion-label>\n        <ion-input placeholder=\"Ejemplo: Versión europea remasterizada\" [value]=\"music.NotasVersion\" \n        formControlName=\"NotasVersion\" type=\"text\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/edit-music/edit-music-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/edit-music/edit-music-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: EditMusicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMusicPageRoutingModule", function() { return EditMusicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_music_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-music.page */ "./src/app/edit-music/edit-music.page.ts");




const routes = [
    {
        path: '',
        component: _edit_music_page__WEBPACK_IMPORTED_MODULE_3__["EditMusicPage"]
    }
];
let EditMusicPageRoutingModule = class EditMusicPageRoutingModule {
};
EditMusicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditMusicPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-music/edit-music.module.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-music/edit-music.module.ts ***!
  \*************************************************/
/*! exports provided: EditMusicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMusicPageModule", function() { return EditMusicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_music_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-music-routing.module */ "./src/app/edit-music/edit-music-routing.module.ts");
/* harmony import */ var _edit_music_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-music.page */ "./src/app/edit-music/edit-music.page.ts");







let EditMusicPageModule = class EditMusicPageModule {
};
EditMusicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_music_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditMusicPageRoutingModule"]
        ],
        declarations: [_edit_music_page__WEBPACK_IMPORTED_MODULE_6__["EditMusicPage"]]
    })
], EditMusicPageModule);



/***/ }),

/***/ "./src/app/edit-music/edit-music.page.scss":
/*!*************************************************!*\
  !*** ./src/app/edit-music/edit-music.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbXVzaWMvZWRpdC1tdXNpYy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/edit-music/edit-music.page.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-music/edit-music.page.ts ***!
  \***********************************************/
/*! exports provided: EditMusicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMusicPage", function() { return EditMusicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let EditMusicPage = class EditMusicPage {
    constructor(http, navCtrl, modalController, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.TipoLista = ['Vinilo', 'Cassette', 'CD', 'Digital'];
        this.music = null;
        this.isSubmitted = false;
        this.id = this.route.snapshot.params.id;
        this.music = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Formato: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroPistas: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroDiscos: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Sello: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NotasVersion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.getMusic();
        console.log("music", this.music);
    }
    ngOnInit() { }
    getMusic() {
        this.http.getEdition(this.id, "music").subscribe((res) => {
            this.item = res['ItemID'];
            this.music = this.formBuilder.group({
                'Year': [res['Year']],
                'EAN13': [res['EAN13']],
                'EditionID': [res['EditionID']],
                'Formato': [res['Formato']],
                'NroPistas': [res['NroPistas']],
                'NroDiscos': [res['NroDiscos']],
                'Sello': [res['Sello']],
                'NotasVersion': [res['NotasVersion']]
            });
            console.log("res: ", res);
            console.log("music: ", this.music);
        }, (error) => {
            console.error(error);
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.music.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.music.value);
            var res = this.http.updateEdition(this.music.value, this.id, "music");
            console.log("Resultado: ", res);
            this.navCtrl.navigateForward("/item/music/" + this.item);
        }
    }
    get errorControl() {
        return this.music.controls;
    }
};
EditMusicPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditMusicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-music',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-music.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-music/edit-music.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-music.page.scss */ "./src/app/edit-music/edit-music.page.scss")).default]
    })
], EditMusicPage);



/***/ })

}]);
//# sourceMappingURL=edit-music-edit-music-module-es2015.js.map