(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collections-collections-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mis colecciones\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item detail button (click)='goToWishlist()'>\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <div style=\"margin-left: 5px;\">Lista de deseos</div>\n    </ion-item>\n    <ion-item-sliding *ngFor=\"let col of colecciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"deleteCollection(col.CollectionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item detail button (click)='goToCollection(col.CollectionID)'>\n        <ion-icon name=\"albums\"></ion-icon> \n        <div style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ col.CollectionName }}</div>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToNewCollection()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/collections/collections-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/collections/collections-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CollectionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsPageRoutingModule", function() { return CollectionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _collections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collections.page */ "./src/app/collections/collections.page.ts");




const routes = [
    {
        path: '',
        component: _collections_page__WEBPACK_IMPORTED_MODULE_3__["CollectionsPage"]
    }
];
let CollectionsPageRoutingModule = class CollectionsPageRoutingModule {
};
CollectionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CollectionsPageRoutingModule);



/***/ }),

/***/ "./src/app/collections/collections.module.ts":
/*!***************************************************!*\
  !*** ./src/app/collections/collections.module.ts ***!
  \***************************************************/
/*! exports provided: CollectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsPageModule", function() { return CollectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _collections_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collections-routing.module */ "./src/app/collections/collections-routing.module.ts");
/* harmony import */ var _collections_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collections.page */ "./src/app/collections/collections.page.ts");
/* harmony import */ var _create_collection_create_collection_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create-collection/create-collection.module */ "./src/app/create-collection/create-collection.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









let CollectionsPageModule = class CollectionsPageModule {
};
CollectionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _collections_routing_module__WEBPACK_IMPORTED_MODULE_5__["CollectionsPageRoutingModule"],
            _create_collection_create_collection_module__WEBPACK_IMPORTED_MODULE_7__["CreateCollectionPageModule"]
        ],
        declarations: [_collections_page__WEBPACK_IMPORTED_MODULE_6__["CollectionsPage"]]
    })
], CollectionsPageModule);



/***/ }),

/***/ "./src/app/collections/collections.page.scss":
/*!***************************************************!*\
  !*** ./src/app/collections/collections.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/collections/collections.page.ts":
/*!*************************************************!*\
  !*** ./src/app/collections/collections.page.ts ***!
  \*************************************************/
/*! exports provided: CollectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsPage", function() { return CollectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _create_collection_create_collection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../create-collection/create-collection.page */ "./src/app/create-collection/create-collection.page.ts");







let CollectionsPage = class CollectionsPage {
    constructor(http, navCtrl, modalController, route, router, alertController, changeRef) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.changeRef = changeRef;
        this.getCollections();
    }
    getCollections() {
        this.colecciones = [];
        this.http.getCollections().subscribe((res) => {
            this.colecciones = res['body'];
            console.log("colecciones: ", this.colecciones);
        }, (error) => {
            console.error(error);
        });
        console.log(this.colecciones);
    }
    goToCollection(id) {
        console.log('id ', id);
        this.navCtrl.navigateForward("/collection/" + id);
    }
    goToWishlist() {
        this.navCtrl.navigateForward("/wishlist");
    }
    ngOnInit() {
    }
    goToNewCollection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Página modal");
            const modal = yield this.modalController.create({
                component: _create_collection_create_collection_page__WEBPACK_IMPORTED_MODULE_5__["CreateCollectionPage"]
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned != null) {
                    this.colecciones = [];
                    this.newCol = dataReturned;
                    console.log("New Collection: ", this.newCol);
                    this.getCollections();
                    this.changeRef.detectChanges();
                }
            });
            return yield modal.present();
        });
    }
    deleteCollection(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas eliminar la colección?',
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
                            this.http.deleteCollection(id).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.getCollections();
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
        });
    }
};
CollectionsPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CollectionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collections',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collections.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.page.html")).default,
        providers: [_api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./collections.page.scss */ "./src/app/collections/collections.page.scss")).default]
    })
], CollectionsPage);



/***/ })

}]);
//# sourceMappingURL=collections-collections-module-es2015.js.map