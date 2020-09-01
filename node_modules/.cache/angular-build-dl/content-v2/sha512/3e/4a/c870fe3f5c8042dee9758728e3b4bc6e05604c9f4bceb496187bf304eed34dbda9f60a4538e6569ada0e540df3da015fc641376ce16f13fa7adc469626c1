(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-series-edit-series-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-series/edit-series.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-series/edit-series.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/series/{{SeriesID}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar serie</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"series\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Nombre de la serie</ion-label>\n        <ion-input placeholder=\"Nombre\" formControlName=\"SeriesName\" [value]=\"series.SeriesName\" \n        type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.SeriesName.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-checkbox formControlName=\"Finished\" [checked]=\"series.Finished\"></ion-checkbox>\n        <ion-label style=\"margin-left: 5px\">Terminada</ion-label>\n        <!--<ion-toggle [formControl]=\"series.controls['Finished']\" [checked]=\"series.finished===1\"></ion-toggle>-->\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/edit-series/edit-series-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/edit-series/edit-series-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditSeriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSeriesPageRoutingModule", function() { return EditSeriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_series_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-series.page */ "./src/app/edit-series/edit-series.page.ts");




const routes = [
    {
        path: '',
        component: _edit_series_page__WEBPACK_IMPORTED_MODULE_3__["EditSeriesPage"]
    }
];
let EditSeriesPageRoutingModule = class EditSeriesPageRoutingModule {
};
EditSeriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditSeriesPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-series/edit-series.module.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-series/edit-series.module.ts ***!
  \***************************************************/
/*! exports provided: EditSeriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSeriesPageModule", function() { return EditSeriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_series_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-series-routing.module */ "./src/app/edit-series/edit-series-routing.module.ts");
/* harmony import */ var _edit_series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-series.page */ "./src/app/edit-series/edit-series.page.ts");







let EditSeriesPageModule = class EditSeriesPageModule {
};
EditSeriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _edit_series_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditSeriesPageRoutingModule"]
        ],
        declarations: [_edit_series_page__WEBPACK_IMPORTED_MODULE_6__["EditSeriesPage"]]
    })
], EditSeriesPageModule);



/***/ }),

/***/ "./src/app/edit-series/edit-series.page.scss":
/*!***************************************************!*\
  !*** ./src/app/edit-series/edit-series.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtc2VyaWVzL2VkaXQtc2VyaWVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-series/edit-series.page.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-series/edit-series.page.ts ***!
  \*************************************************/
/*! exports provided: EditSeriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSeriesPage", function() { return EditSeriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let EditSeriesPage = class EditSeriesPage {
    constructor(http, navCtrl, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.series = null;
        this.isSubmitted = false;
        this.SeriesID = this.route.snapshot.params.id;
        this.series = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            SeriesID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            SeriesName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Finished: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.getSeries();
    }
    getSeries() {
        this.http.getSeries(this.SeriesID).subscribe((res) => {
            this.series = this.formBuilder.group({
                'SeriesID': [res['SeriesID']],
                'SeriesName': [res['SeriesName']],
                'Finished': [res['Finished'] == 1]
            });
            console.log("series: ", this.series);
        }, (error) => {
            console.error(error);
        });
    }
    ngOnInit() { }
    submitForm() {
        this.isSubmitted = true;
        if (!this.series.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.series.value);
            var res = this.http.updateSeries(this.series.value, this.SeriesID);
            console.log("Resultado: ", res);
            this.navCtrl.navigateForward("/series/" + this.SeriesID);
        }
    }
    get errorControl() {
        return this.series.controls;
    }
};
EditSeriesPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditSeriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-series',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-series.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-series/edit-series.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-series.page.scss */ "./src/app/edit-series/edit-series.page.scss")).default]
    })
], EditSeriesPage);



/***/ })

}]);
//# sourceMappingURL=edit-series-edit-series-module-es2015.js.map