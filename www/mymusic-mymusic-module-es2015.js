(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mymusic-mymusic-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mymusic/mymusic.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mymusic/mymusic.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mi música\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-searchbar placeholder=\"Buscar...\" [formControl]=\"searchControl\"></ion-searchbar>\n  <ion-item><small>Arrastrar a la derecha para ver opciones.</small></ion-item>\n  <ion-list *ngIf=\"!items\">\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"removeEditionFromUser(ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf=\"items\">\n    <ion-item-sliding *ngFor=\"let ed of items\">\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToAddMusic()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/mymusic/mymusic-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/mymusic/mymusic-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MymusicPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymusicPageRoutingModule", function() { return MymusicPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mymusic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mymusic.page */ "./src/app/mymusic/mymusic.page.ts");




const routes = [
    {
        path: '',
        component: _mymusic_page__WEBPACK_IMPORTED_MODULE_3__["MymusicPage"]
    }
];
let MymusicPageRoutingModule = class MymusicPageRoutingModule {
};
MymusicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MymusicPageRoutingModule);



/***/ }),

/***/ "./src/app/mymusic/mymusic.module.ts":
/*!*******************************************!*\
  !*** ./src/app/mymusic/mymusic.module.ts ***!
  \*******************************************/
/*! exports provided: MymusicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymusicPageModule", function() { return MymusicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mymusic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mymusic-routing.module */ "./src/app/mymusic/mymusic-routing.module.ts");
/* harmony import */ var _mymusic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mymusic.page */ "./src/app/mymusic/mymusic.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let MymusicPageModule = class MymusicPageModule {
};
MymusicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _mymusic_routing_module__WEBPACK_IMPORTED_MODULE_5__["MymusicPageRoutingModule"]
        ],
        declarations: [_mymusic_page__WEBPACK_IMPORTED_MODULE_6__["MymusicPage"]]
    })
], MymusicPageModule);



/***/ }),

/***/ "./src/app/mymusic/mymusic.page.scss":
/*!*******************************************!*\
  !*** ./src/app/mymusic/mymusic.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215bXVzaWMvbXltdXNpYy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/mymusic/mymusic.page.ts":
/*!*****************************************!*\
  !*** ./src/app/mymusic/mymusic.page.ts ***!
  \*****************************************/
/*! exports provided: MymusicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymusicPage", function() { return MymusicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter.service */ "./src/app/filter.service.ts");








let MymusicPage = class MymusicPage {
    constructor(http, navCtrl, router, filterServ, alertController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.router = router;
        this.filterServ = filterServ;
        this.alertController = alertController;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    getEditions() {
        this.http.getMusic().subscribe((res) => {
            this.ediciones = res['body'];
        }, (error) => {
            console.error(error);
        });
    }
    goToEdition(id, type) {
        this.navCtrl.navigateForward("/edition/" + this.http.getItemTypeURL(type) + "/" + id);
    }
    goToAddMusic() {
        this.navCtrl.navigateForward("/add-music");
    }
    ngOnInit() {
        this.getEditions();
        this.setFilteredList(null);
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(700))
            .subscribe(search => {
            this.setFilteredList(search);
        });
    }
    setFilteredList(searchTerm) {
        this.items = this.filterServ.filterByEdition(searchTerm, this.ediciones);
    }
    removeEditionFromUser(editionID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("holita ", editionID);
            const alert = yield this.alertController.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
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
                            this.http.removeEditionFromUser(editionID).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.getEditions();
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
        });
    }
};
MymusicPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
MymusicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mymusic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mymusic.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mymusic/mymusic.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mymusic.page.scss */ "./src/app/mymusic/mymusic.page.scss")).default]
    })
], MymusicPage);



/***/ })

}]);
//# sourceMappingURL=mymusic-mymusic-module-es2015.js.map