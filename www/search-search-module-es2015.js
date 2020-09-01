(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Búsqueda avanzada</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"formcriteria\" (ngSubmit)=\"addCriteria()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Selecciona tipo de ítem</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"tipo\" type=\"text\" (ionChange)=\"changeType()\">\n          <ion-select-option value=\"all\">Todos</ion-select-option>\n          <ion-select-option value=\"book\">Libro</ion-select-option>\n          <ion-select-option value=\"music\">Música</ion-select-option>\n          <ion-select-option value=\"video\">Vídeo</ion-select-option>\n          <ion-select-option value=\"game\">Videojuego</ion-select-option>\n          <ion-select-option value=\"comic\">Comic</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <small>Asigna al menos un criterio de búsqueda:</small>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Campo\" \n        formControlName=\"campo\" type=\"text\">\n          <ion-select-option value=\"ItemName\">Título</ion-select-option>\n          <ion-select-option value=\"Year\">Año de edición</ion-select-option>\n          <ion-select-option value=\"EAN13\">EAN13</ion-select-option>\n          <ion-select-option *ngFor=\"let d of campos2\" [value]=\"d.campo\">{{d.nombre}}</ion-select-option>\n          <div *ngIf=\"formcriteria.value['tipo']=='book'\">\n            <ion-select-option value=\"ISBN\">ISBN</ion-select-option>\n            <ion-select-option value=\"Editorial\">Editorial</ion-select-option>\n            <ion-select-option value=\"Idioma\">Idioma</ion-select-option>\n            <ion-select-option value=\"Tipo\">Tipo (bolsillo, tapa dura, ebook...)</ion-select-option>\n          </div>\n          <div *ngIf=\"formcriteria.value['tipo']=='music'\">\n            <ion-select-option value=\"Formato\">Formato (CD, vinilo, digital...)</ion-select-option>\n            <ion-select-option value=\"Sello\">Sello</ion-select-option>\n          </div>\n          <div *ngIf=\"formcriteria.value['tipo']=='video'\">\n            <ion-select-option value=\"FormatoVideo\">Formato (DVD, Bluray...)</ion-select-option>\n            <ion-select-option value=\"TipoVideo\">Tipo (Película, serie...)</ion-select-option>\n            <ion-select-option value=\"Sistema\">Sistema (PAL, NTSC...)</ion-select-option>\n            <ion-select-option value=\"RegionVideo\">Región</ion-select-option>\n            <ion-select-option value=\"Temporada\">Temporada</ion-select-option>\n          </div>\n          <div *ngIf=\"formcriteria.value['tipo']=='game'\">\n            <ion-select-option value=\"Plataforma\">Plataforma/consola</ion-select-option>\n            <ion-select-option value=\"FormatoJuego\">Formato (físico/digital...)</ion-select-option>\n            <ion-select-option value=\"RegionJuego\">Región</ion-select-option>\n            <ion-select-option value=\"Distribuidora\">Distribuidora</ion-select-option>\n            <ion-select-option value=\"Estudio\">Estudio</ion-select-option>\n          </div>\n          <div *ngIf=\"formcriteria.value['tipo']=='comic'\">\n            <ion-select-option value=\"TipoComic\">Tipo (grapas, tomo, omnibus)</ion-select-option>\n            <ion-select-option value=\"Origen\">Origen (norteamericano, manga, europeo...</ion-select-option>\n            <ion-select-option value=\"ISBNComic\">ISBN</ion-select-option>\n            <ion-select-option value=\"EditorialComic\">Editorial</ion-select-option>\n            <ion-select-option value=\"IdiomaComic\">Idioma</ion-select-option>\n            <ion-select-option value=\"FormatoComic\">Formato (físico/digital)</ion-select-option>\n            <ion-select-option value=\"NroComic\">Número</ion-select-option>\n          </div>\n        </ion-select>\n        <ion-input placeholder=\"Valor\" formControlName=\"valor\" type=\"text\"></ion-input>\n        <ion-button shape=\"round\" color=\"primary\" type=\"submit\">Añadir</ion-button>\n      </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"criteria.length<1\">No hay criterios de búsqueda.</ion-item>\n    <ion-item lines=\"full\" *ngIf=\"criteria.length>=1\">\n      <ion-chip *ngFor=\"let a of criteria\">{{a.campo}} = {{a.valor}}<button ion-button (click)=\"removeCriteria(a)\">x</button></ion-chip>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"process()\">Aceptar</ion-button>\n  <ion-list *ngIf=\"numres!==null\">\n    <ion-item lines=\"full\"><small>Mostrando {{numres}} resultados.</small></ion-item>\n    <ion-item-sliding *ngFor=\"let ed of items\">\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n</form>\n</ion-content>");

/***/ }),

/***/ "./src/app/search/search-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/search/search-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SearchPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function() { return SearchPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");




const routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
    }
];
let SearchPageRoutingModule = class SearchPageRoutingModule {
};
SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchPageRoutingModule);



/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/search/search-routing.module.ts");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let SearchPageModule = class SearchPageModule {
};
SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]
        ],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
    })
], SearchPageModule);



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let SearchPage = class SearchPage {
    constructor(http, navCtrl, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.criteria = [];
        this.numres = null;
        this.isSubmitted = false;
        this.formcriteria = null;
        this.formcriteria = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"],
            campo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
    }
    ngOnInit() {
        this.formcriteria = this.formBuilder.group({
            'tipo': [null],
            'campo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'valor': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    addCriteria() {
        this.isSubmitted = true;
        if (!this.formcriteria.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else if (this.formcriteria.value['valor']) {
            var i = this.criteria.find(e => e['campo'] === this.formcriteria.value['campo']);
            if (!i) {
                var p = {
                    "campo": this.formcriteria.value['campo'],
                    "valor": this.formcriteria.value['valor']
                };
                this.criteria.push(p);
            }
            else {
                i['valor'] = this.formcriteria.value['valor'];
            }
            console.log("criteria:" + this.criteria);
        }
    }
    removeCriteria(a) {
        this.criteria.splice(this.criteria.findIndex(e => e === a), 1);
        console.log("people:" + this.criteria);
    }
    changeType() {
        if (this.criteria.find(o => o['campo'] === "ItemType")) {
            this.criteria.splice(this.criteria.findIndex(o => o['campo'] === "ItemType"), 1);
        }
        if (this.formcriteria.value['tipo'] !== "all") {
            var p = {
                "campo": "ItemType",
                "valor": this.http.getItemType(this.formcriteria.value['tipo'])
            };
            this.criteria.push(p);
        }
    }
    get errorControl() {
        return this.formcriteria.controls;
    }
    compareFn(e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    }
    process() {
        var c = { "body": this.criteria };
        console.log("c ", c);
        this.http.searchEditions(c).subscribe((res) => {
            this.items = res['body']['body'];
            this.numres = res['itemCount'] || res['body']['itemCount'];
            console.log(this.numres);
        }, (error) => {
            console.error(error);
            this.numres = 0;
        });
    }
};
SearchPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")).default]
    })
], SearchPage);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2015.js.map