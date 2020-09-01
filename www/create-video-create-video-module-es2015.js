(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-video-create-video-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-video/create-video.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-video/create-video.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Crear edición vídeo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newedition\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" [value]=\"newedition.Year\" formControlName=\"Year\" \n        type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">EAN13</ion-label>\n        <ion-input placeholder=\"Ejemplo: 8491234567890\" formControlName=\"EAN13\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Formato de vídeo</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"FormatoVideo\" type=\"text\" value=\"{{newedition.FormatoVideo}}\" (ionChange)=\"getRegions()\">\n          <ion-select-option *ngFor=\"let f of FormatoLista\" [value]=\"f\">{{f}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Tipo de vídeo</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"TipoVideo\" type=\"text\" value=\"{{newedition.TipoVideo}}\">\n          <ion-select-option *ngFor=\"let t of TipoLista\" [value]=\"t\">{{t}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Sistema de codificación</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Sistema\" type=\"text\" value=\"{{newedition.Sistema}}\">\n          <ion-select-option *ngFor=\"let s of SistemaLista\" [value]=\"s\">{{s}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de discos</ion-label>\n        <ion-input placeholder=\"Ejemplo: 1\" [value]=\"newedition.NroDiscosVideo\" formControlName=\"NroDiscosVideo\" \n        type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Región (si aplica)</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"RegionVideo\" type=\"text\" value=\"{{newedition.RegionVideo}}\">\n          <ion-select-option value=\"null\">Ninguno</ion-select-option>\n          <ion-select-option *ngFor=\"let r of RegionLista\" \n          [value]=\"r\">{{r}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\" *ngIf=\"newedition.value['TipoVideo']==='Serie'\">\n        <ion-label position=\"stacked\">Temporada (si aplica)</ion-label>\n        <ion-input placeholder=\"Ejemplo: 1\" [value]=\"newedition.Temporada\" formControlName=\"Temporada\" \n        type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\" *ngIf=\"newedition.value['TipoVideo']!=='Película'\">\n        <ion-label position=\"stacked\">Volumen (si aplica)</ion-label>\n        <ion-input placeholder=\"Ejemplo: 1\" [value]=\"newedition.VolumenVideo\" formControlName=\"VolumenVideo\" \n        type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\" *ngIf=\"newedition.value['TipoVideo']==='Serie'\">\n        <ion-label position=\"stacked\">Número de episodios (si aplica)</ion-label>\n        <ion-input placeholder=\"Ejemplo: 10\" [value]=\"newedition.NroEpisodios\" formControlName=\"NroEpisodios\" \n        type=\"number\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/create-video/create-video-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/create-video/create-video-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateVideoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVideoPageRoutingModule", function() { return CreateVideoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-video.page */ "./src/app/create-video/create-video.page.ts");




const routes = [
    {
        path: '',
        component: _create_video_page__WEBPACK_IMPORTED_MODULE_3__["CreateVideoPage"]
    }
];
let CreateVideoPageRoutingModule = class CreateVideoPageRoutingModule {
};
CreateVideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreateVideoPageRoutingModule);



/***/ }),

/***/ "./src/app/create-video/create-video.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/create-video/create-video.module.ts ***!
  \*****************************************************/
/*! exports provided: CreateVideoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVideoPageModule", function() { return CreateVideoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-video-routing.module */ "./src/app/create-video/create-video-routing.module.ts");
/* harmony import */ var _create_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-video.page */ "./src/app/create-video/create-video.page.ts");







let CreateVideoPageModule = class CreateVideoPageModule {
};
CreateVideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateVideoPageRoutingModule"]
        ],
        declarations: [_create_video_page__WEBPACK_IMPORTED_MODULE_6__["CreateVideoPage"]]
    })
], CreateVideoPageModule);



/***/ }),

/***/ "./src/app/create-video/create-video.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/create-video/create-video.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS12aWRlby9jcmVhdGUtdmlkZW8ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/create-video/create-video.page.ts":
/*!***************************************************!*\
  !*** ./src/app/create-video/create-video.page.ts ***!
  \***************************************************/
/*! exports provided: CreateVideoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVideoPage", function() { return CreateVideoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let CreateVideoPage = class CreateVideoPage {
    constructor(http, navCtrl, modalController, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.FormatoLista = ['VHS', 'DVD', 'Blu-ray', 'Blu-ray 3D', 'Digital'];
        this.TipoLista = ['Película', 'Serie', 'Cortometraje', 'Documental', 'Concierto', 'Teatro',
            'Otra Actuación', 'Curso'];
        this.SistemaLista = ['PAL', 'NTSC', 'SECAM', 'N/A'];
        this.RegionLista = [];
        this.newedition = null;
        this.isSubmitted = false;
        this.item = this.route.snapshot.params.item;
        this.newedition = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            FormatoVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            TipoVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Sistema: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroDiscosVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            RegionVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Temporada: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            VolumenVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroEpisodios: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        console.log(this.item);
    }
    ngOnInit() {
        this.newedition = this.formBuilder.group({
            'Year': [null],
            'EAN13': [null],
            'FormatoVideo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'TipoVideo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'Sistema': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'NroDiscosVideo': [null],
            'RegionVideo': [null],
            'Temporada': [null],
            'VolumenVideo': [null],
            'NroEpisodios': [null]
        });
    }
    getRegions() {
        this.RegionLista = [];
        if (this.newedition.value['FormatoVideo'] === "DVD") {
            this.RegionLista = ['DVD-0', 'DVD-1', 'DVD-2', 'DVD-3', 'DVD-4', 'DVD-5', 'DVD-6'];
        }
        else if (this.newedition.value['FormatoVideo'] === 'Blu-ray' ||
            this.newedition.value['FormatoVideo'] === 'Blu-ray 3D') {
            this.RegionLista = ['A/1', 'B/2', 'C/3', 'ABC'];
        }
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.newedition.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.newedition.value);
            this.http.createEdition(3, this.item, this.newedition.value).subscribe(data => {
                console.log("data body: ", data['body']['EditionID']);
                this.editionID = data['body']['EditionID'];
                console.log("Edición ID:", this.editionID);
                this.navCtrl.navigateForward("/edition/video/" + this.editionID);
            }, error => {
                console.log(error);
            });
        }
    }
    get errorControl() {
        return this.newedition.controls;
    }
    compareFn(e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    }
};
CreateVideoPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
CreateVideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-video.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-video/create-video.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-video.page.scss */ "./src/app/create-video/create-video.page.scss")).default]
    })
], CreateVideoPage);



/***/ })

}]);
//# sourceMappingURL=create-video-create-video-module-es2015.js.map