(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-book-edit-book-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-book/edit-book.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-book/edit-book.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/edition/book/{{id}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar edición libro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"book\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" [value]=\"book.Year\" formControlName=\"Year\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">EAN13</ion-label>\n        <ion-input placeholder=\"Ejemplo: 8491234567890\" [value]=\"book.EAN13\" formControlName=\"EAN13\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">ISBN</ion-label>\n        <ion-input placeholder=\"Ejemplo: 9781234567890\" [value]=\"book.ISBN\" formControlName=\"ISBN\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de páginas</ion-label>\n        <ion-input placeholder=\"Ejemplo: 200\" [value]=\"book.NroPaginas\" formControlName=\"NroPaginas\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Editorial</ion-label>\n        <ion-input placeholder=\"Nombre editorial\" [value]=\"book.Editorial\" formControlName=\"Editorial\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de edición (sin ordinal)</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2\" [value]=\"book.Edicion\" formControlName=\"Edicion\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Idioma</ion-label>\n        <ion-input placeholder=\"Ejemplo: Español\" [value]=\"book.Idioma\" formControlName=\"Idioma\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Tipo de edición</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Tipo\" type=\"text\" value=\"{{book.Tipo}}\">\n          <ion-select-option *ngFor=\"let t of TipoLista\" [value]=\"t\">{{t}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/edit-book/edit-book-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/edit-book/edit-book-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditBookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookPageRoutingModule", function() { return EditBookPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-book.page */ "./src/app/edit-book/edit-book.page.ts");




const routes = [
    {
        path: '',
        component: _edit_book_page__WEBPACK_IMPORTED_MODULE_3__["EditBookPage"]
    }
];
let EditBookPageRoutingModule = class EditBookPageRoutingModule {
};
EditBookPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditBookPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-book/edit-book.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-book/edit-book.module.ts ***!
  \***********************************************/
/*! exports provided: EditBookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookPageModule", function() { return EditBookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-book-routing.module */ "./src/app/edit-book/edit-book-routing.module.ts");
/* harmony import */ var _edit_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-book.page */ "./src/app/edit-book/edit-book.page.ts");







let EditBookPageModule = class EditBookPageModule {
};
EditBookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _edit_book_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditBookPageRoutingModule"]
        ],
        declarations: [_edit_book_page__WEBPACK_IMPORTED_MODULE_6__["EditBookPage"]]
    })
], EditBookPageModule);



/***/ }),

/***/ "./src/app/edit-book/edit-book.page.scss":
/*!***********************************************!*\
  !*** ./src/app/edit-book/edit-book.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYm9vay9lZGl0LWJvb2sucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit-book/edit-book.page.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-book/edit-book.page.ts ***!
  \*********************************************/
/*! exports provided: EditBookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBookPage", function() { return EditBookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let EditBookPage = class EditBookPage {
    constructor(http, navCtrl, modalController, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.TipoLista = ['Bolsillo', 'Tapa dura', 'Ebook', 'Audiolibro'];
        this.book = null;
        this.isSubmitted = false;
        this.id = this.route.snapshot.params.id;
        this.book = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            ISBN: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroPaginas: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Editorial: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Edicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Idioma: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.getBook();
        console.log("book", this.book);
    }
    ngOnInit() { }
    getBook() {
        this.http.getEdition(this.id, "book").subscribe((res) => {
            this.item = res['ItemID'];
            this.book = this.formBuilder.group({
                Year: [res['Year']],
                EAN13: [res['EAN13']],
                EditionID: [res['EditionID']],
                ISBN: [res['ISBN']],
                NroPaginas: [res['NroPaginas']],
                Editorial: [res['Editorial']],
                Edicion: [res['Edicion']],
                Idioma: [res['Idioma']],
                Tipo: [res['Tipo']]
            });
            console.log("res: ", res);
            console.log("book: ", this.book);
        }, (error) => {
            console.error(error);
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.book.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.book.value);
            var res = this.http.updateEdition(this.book.value, this.id, "book");
            console.log("Resultado: ", res);
            this.navCtrl.navigateForward("/item/book/" + this.item);
        }
    }
    get errorControl() {
        return this.book.controls;
    }
};
EditBookPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditBookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-book',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-book.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-book/edit-book.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-book.page.scss */ "./src/app/edit-book/edit-book.page.scss")).default]
    })
], EditBookPage);



/***/ })

}]);
//# sourceMappingURL=edit-book-edit-book-module-es2015.js.map