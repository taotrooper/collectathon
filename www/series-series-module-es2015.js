(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["series-series-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/series/series.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/series/series.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"allseries\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item-sliding>\n      <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n        <small>Esta serie está marcada como <span *ngIf=\"finished==0\">no</span> terminada.</small>\n      </ion-label>\n    </ion-item-sliding>\n    <ion-item-sliding *ngIf=\"itemCount <= 0\">\n      <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">No existen ediciones para esta serie.</ion-label>\n    </ion-item-sliding>\n    <ion-item-sliding *ngFor=\"let i of items\">\n      <ion-item detail (click)=\"goToItem(i.ItemID, i.ItemType)\">\n        <ion-icon top name={{http.getItemTypeIcon(i.ItemType)}}></ion-icon>\n        <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ i.ItemSummary }}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-button *ngIf=\"creatorUser==user\" (click)=\"goToEditSeries()\">Editar serie</ion-button>\n      <ion-button *ngIf=\"creatorUser==user && itemCount==0\" (click)=\"deleteSeries()\" color=\"danger\">Eliminar serie</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/series/series-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/series/series-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SeriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageRoutingModule", function() { return SeriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./series.page */ "./src/app/series/series.page.ts");




const routes = [
    {
        path: '',
        component: _series_page__WEBPACK_IMPORTED_MODULE_3__["SeriesPage"]
    }
];
let SeriesPageRoutingModule = class SeriesPageRoutingModule {
};
SeriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SeriesPageRoutingModule);



/***/ }),

/***/ "./src/app/series/series.module.ts":
/*!*****************************************!*\
  !*** ./src/app/series/series.module.ts ***!
  \*****************************************/
/*! exports provided: SeriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageModule", function() { return SeriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _series_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./series-routing.module */ "./src/app/series/series-routing.module.ts");
/* harmony import */ var _series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series.page */ "./src/app/series/series.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let SeriesPageModule = class SeriesPageModule {
};
SeriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _series_routing_module__WEBPACK_IMPORTED_MODULE_5__["SeriesPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_series_page__WEBPACK_IMPORTED_MODULE_6__["SeriesPage"]]
    })
], SeriesPageModule);



/***/ }),

/***/ "./src/app/series/series.page.scss":
/*!*****************************************!*\
  !*** ./src/app/series/series.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nlcmllcy9zZXJpZXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/series/series.page.ts":
/*!***************************************!*\
  !*** ./src/app/series/series.page.ts ***!
  \***************************************/
/*! exports provided: SeriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPage", function() { return SeriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");





let SeriesPage = class SeriesPage {
    constructor(http, navCtrl, route, router, alertCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.itemCount = 0;
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.getItemsInSeries();
        this.getSeries();
        this.user = this.http.getUserID();
        console.log(this.items);
    }
    ngOnInit() {
    }
    getItemsInSeries() {
        this.items = [];
        this.http.getItemsInSeries(this.id).subscribe((res) => {
            this.items = res['body'];
            if (this.items) {
                this.itemCount = this.items.length;
            }
            console.log("res: ", this.items);
        }, (error) => {
            console.error(error);
        });
    }
    getSeries() {
        this.http.getSeries(this.id).subscribe((res) => {
            this.name = res['SeriesName'];
            this.creatorUser = res['CreatorUserID'];
            this.finished = res['Finished'];
        }, (error) => {
            console.error(error);
        });
    }
    goToItem(id, type) {
        this.navCtrl.navigateForward("/item/" + this.http.getItemTypeURL(type) + "/" + id);
    }
    goToEditSeries() {
        this.navCtrl.navigateForward("/edit-series/" + this.id);
    }
    deleteSeries() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas eliminar la serie?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.http.deleteSeries(this.id);
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/allseries");
        });
    }
};
SeriesPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
SeriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./series.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/series/series.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./series.page.scss */ "./src/app/series/series.page.scss")).default]
    })
], SeriesPage);



/***/ })

}]);
//# sourceMappingURL=series-series-module-es2015.js.map