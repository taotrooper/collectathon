(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-item-edit-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-item/edit-item.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-item/edit-item.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/item/{{type}}/{{ItemID}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"item\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Nombre del item</ion-label>\n        <ion-input placeholder=\"Nombre\" [value]=\"item.ItemName\" formControlName=\"ItemName\" \n        type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.ItemName.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Serie</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"SeriesID\" type=\"text\" value=\"{{item.SeriesID}}\">\n          <ion-select-option [value]=null>Ninguna</ion-select-option>\n          <ion-select-option *ngFor=\"let s of series\" [value]=\"s.SeriesID\">\n            {{s.SeriesName}}\n          </ion-select-option>\n        </ion-select>\n        <ion-button (click)=\"goToNewSeries()\" small>Nueva serie...</ion-button>\n      </ion-item>\n      <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Géneros (elige hasta 3)</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"GenreID1\" type=\"text\" value=\"{{item.GenreID1}}\">\n          <ion-select-option [value]=null>Ninguno</ion-select-option>\n          <ion-select-option *ngFor=\"let g of genres\" [value]=\"g.GenreID\">\n            {{g.GenreName}}\n          </ion-select-option>\n        </ion-select>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"GenreID2\" type=\"text\" value=\"{{item.GenreID2}}\">\n          <ion-select-option [value]=null>Ninguno</ion-select-option>\n          <ion-select-option *ngFor=\"let g of genres\" [value]=\"g.GenreID\">\n            {{g.GenreName}}\n          </ion-select-option>\n        </ion-select>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"GenreID3\" type=\"text\" value=\"{{item.GenreID3}}\">\n          <ion-select-option [value]=null>Ninguno</ion-select-option>\n          <ion-select-option *ngFor=\"let g of genres\" [value]=\"g.GenreID\">\n            {{g.GenreName}}\n          </ion-select-option>\n        </ion-select>\n    </ion-item>\n  </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/edit-item/edit-item-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/edit-item/edit-item-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EditItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPageRoutingModule", function() { return EditItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-item.page */ "./src/app/edit-item/edit-item.page.ts");




const routes = [
    {
        path: '',
        component: _edit_item_page__WEBPACK_IMPORTED_MODULE_3__["EditItemPage"]
    }
];
let EditItemPageRoutingModule = class EditItemPageRoutingModule {
};
EditItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditItemPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-item/edit-item.module.ts":
/*!***********************************************!*\
  !*** ./src/app/edit-item/edit-item.module.ts ***!
  \***********************************************/
/*! exports provided: EditItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPageModule", function() { return EditItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-item-routing.module */ "./src/app/edit-item/edit-item-routing.module.ts");
/* harmony import */ var _edit_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-item.page */ "./src/app/edit-item/edit-item.page.ts");
/* harmony import */ var _create_series_create_series_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create-series/create-series.module */ "./src/app/create-series/create-series.module.ts");








let EditItemPageModule = class EditItemPageModule {
};
EditItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditItemPageRoutingModule"],
            _create_series_create_series_module__WEBPACK_IMPORTED_MODULE_7__["CreateSeriesPageModule"]
        ],
        declarations: [_edit_item_page__WEBPACK_IMPORTED_MODULE_6__["EditItemPage"]]
    })
], EditItemPageModule);



/***/ }),

/***/ "./src/app/edit-item/edit-item.page.scss":
/*!***********************************************!*\
  !*** ./src/app/edit-item/edit-item.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaXRlbS9lZGl0LWl0ZW0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit-item/edit-item.page.ts":
/*!*********************************************!*\
  !*** ./src/app/edit-item/edit-item.page.ts ***!
  \*********************************************/
/*! exports provided: EditItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemPage", function() { return EditItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _create_series_create_series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create-series/create-series.page */ "./src/app/create-series/create-series.page.ts");







let EditItemPage = class EditItemPage {
    constructor(http, navCtrl, modalController, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.item = null;
        this.NewSeries = null;
        this.isSubmitted = false;
        this.ItemID = this.route.snapshot.params.id;
        this.item = this.formBuilder.group({
            'ItemName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'SeriesID': [null],
            'SeriesName': [null],
            'GenreID1': [null],
            'GenreID2': [null],
            'GenreID3': [null]
        });
        this.getSeriesList();
        this.getItem();
        console.log("type y typename: ", this.type, " ", this.typeName);
    }
    getSeriesList() {
        this.http.getSeriesList().subscribe((res) => {
            this.series = res['body'];
            this.series = this.series.filter(o => o['CreatorUserID'] > 0);
            console.log("Series:", this.series);
        }, (error) => {
            console.error(error);
        });
    }
    getGenreList() {
        console.log("busco géneros de ", this.type);
        this.http.getGenreList(this.type).subscribe((res) => {
            this.genres = res['body'];
            console.log("Géneros ", this.genres);
        }, (error) => {
            console.error(error);
        });
    }
    getItem() {
        this.http.getItem(this.ItemID).subscribe((res) => {
            this.item = this.formBuilder.group({
                'ItemID': [res['ItemID']],
                'ItemName': [res['ItemName']],
                'SeriesID': [res['SeriesID']],
                'GenreID1': [res['GenreID1']],
                'GenreID2': [res['GenreID2']],
                'GenreID3': [res['GenreID3']]
            });
            this.ItemType = res['ItemType'];
            this.type = this.http.getItemTypeURL(this.ItemType);
            this.typeName = this.http.getItemTypeName(this.type);
            console.log("todo: ", this.item);
            console.log(this.type);
            this.getGenreList();
        }, (error) => {
            console.error(error);
        });
    }
    ngOnInit() {
    }
    goToNewSeries() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Página modal");
            const modal = yield this.modalController.create({
                component: _create_series_create_series_page__WEBPACK_IMPORTED_MODULE_6__["CreateSeriesPage"],
                componentProps: {
                    "paramID": 123
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned != null) {
                    this.series = [];
                    this.NewSeries = dataReturned;
                    console.log("New Series: ", this.NewSeries);
                    this.getSeriesList();
                }
            });
            return yield modal.present();
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.item.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.item.value);
            var res = this.http.updateItem(this.item.value, this.ItemID);
            console.log("Resultado: ", res);
            this.navCtrl.navigateForward("/item/" + this.type + "/" + this.ItemID);
        }
    }
    get errorControl() {
        return this.item.controls;
    }
};
EditItemPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-item/edit-item.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-item.page.scss */ "./src/app/edit-item/edit-item.page.scss")).default]
    })
], EditItemPage);



/***/ })

}]);
//# sourceMappingURL=edit-item-edit-item-module-es2015.js.map