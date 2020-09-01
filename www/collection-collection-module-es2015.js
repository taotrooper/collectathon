(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collection-collection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"collections\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <div style=\"text-align: center\" *ngIf=\"user==myuser\">\n      <ion-button (click)=\"editCollection()\"><ion-icon name=\"pencil\"></ion-icon>Editar</ion-button>\n      <ion-button (click)=\"deleteCollection()\" color=\"danger\">\n        <ion-icon name=\"trash\"></ion-icon>Eliminar\n      </ion-button>\n    </div>\n    <ion-item *ngIf=\"this.ediciones.length == 0\"><small>La colección está vacía.</small></ion-item>\n    <ion-item *ngIf=\"this.ediciones.length > 0 && user==myuser\">\n      <small>Arrastrar a la derecha para ver opciones.</small>\n    </ion-item>\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option *ngIf=\"user==myuser\" color=\"danger\" \n        (click)=\"deleteEditionFromCollection(ed.ItemID, ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab *ngIf=\"user==myuser\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToAddCollection()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/collection/collection-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/collection/collection-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CollectionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageRoutingModule", function() { return CollectionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _collection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./collection.page */ "./src/app/collection/collection.page.ts");




const routes = [
    {
        path: '',
        component: _collection_page__WEBPACK_IMPORTED_MODULE_3__["CollectionPage"]
    }
];
let CollectionPageRoutingModule = class CollectionPageRoutingModule {
};
CollectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CollectionPageRoutingModule);



/***/ }),

/***/ "./src/app/collection/collection.module.ts":
/*!*************************************************!*\
  !*** ./src/app/collection/collection.module.ts ***!
  \*************************************************/
/*! exports provided: CollectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageModule", function() { return CollectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _collection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./collection-routing.module */ "./src/app/collection/collection-routing.module.ts");
/* harmony import */ var _collection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection.page */ "./src/app/collection/collection.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _add_collection_add_collection_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-collection/add-collection.module */ "./src/app/add-collection/add-collection.module.ts");
/* harmony import */ var _edit_collection_edit_collection_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-collection/edit-collection.module */ "./src/app/edit-collection/edit-collection.module.ts");










let CollectionPageModule = class CollectionPageModule {
};
CollectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _collection_routing_module__WEBPACK_IMPORTED_MODULE_5__["CollectionPageRoutingModule"],
            _add_collection_add_collection_module__WEBPACK_IMPORTED_MODULE_8__["AddCollectionPageModule"],
            _edit_collection_edit_collection_module__WEBPACK_IMPORTED_MODULE_9__["EditCollectionPageModule"]
        ],
        declarations: [_collection_page__WEBPACK_IMPORTED_MODULE_6__["CollectionPage"]]
    })
], CollectionPageModule);



/***/ }),

/***/ "./src/app/collection/collection.page.scss":
/*!*************************************************!*\
  !*** ./src/app/collection/collection.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/collection/collection.page.ts":
/*!***********************************************!*\
  !*** ./src/app/collection/collection.page.ts ***!
  \***********************************************/
/*! exports provided: CollectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPage", function() { return CollectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _add_collection_add_collection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-collection/add-collection.page */ "./src/app/add-collection/add-collection.page.ts");
/* harmony import */ var _edit_collection_edit_collection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-collection/edit-collection.page */ "./src/app/edit-collection/edit-collection.page.ts");








let CollectionPage = class CollectionPage {
    constructor(http, navCtrl, alertController, route, router, modalController, changeRef) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.modalController = modalController;
        this.changeRef = changeRef;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.myuser = this.http.getUserID();
        this.getEditionsInCollection();
        this.getCollection();
        console.log(this.ediciones);
        this.changeRef.detectChanges();
    }
    getEditionsInCollection() {
        this.ediciones = [];
        this.http.getEditionsInCollection(this.id).subscribe((res) => {
            if (res['body']) {
                this.ediciones = res['body'];
                this.changeRef.detectChanges();
            }
            console.log("res: ", this.ediciones);
        }, (error) => {
            console.error(error);
        });
    }
    getCollection() {
        this.name = null;
        this.http.getCollection(this.id).subscribe((res) => {
            this.name = res['CollectionName'];
            this.user = res['UserID'];
        }, (error) => {
            console.error(error);
        });
    }
    goToEdition(id, type) {
        this.navCtrl.navigateForward("/edition/" + this.http.getItemTypeURL(type) + "/" + id);
    }
    editCollection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.navCtrl.navigateForward("/edit-collection/"+this.id);
            const modal = yield this.modalController.create({
                component: _edit_collection_edit_collection_page__WEBPACK_IMPORTED_MODULE_6__["EditCollectionPage"],
                componentProps: {
                    "id": this.id
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.getCollection();
                this.changeRef.detectChanges();
            });
            return yield modal.present();
        });
    }
    goToAddCollection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Página modal");
            const modal = yield this.modalController.create({
                component: _add_collection_add_collection_page__WEBPACK_IMPORTED_MODULE_5__["AddCollectionPage"],
                componentProps: {
                    "id": this.id
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned != null) {
                    this.ediciones = [];
                    this.getEditionsInCollection();
                    this.changeRef.detectChanges();
                }
            });
            return yield modal.present();
        });
    }
    deleteCollection() {
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
                            this.http.deleteCollection(this.id).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.navCtrl.navigateForward("/collections");
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
    deleteEditionFromCollection(itemID, editionID) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas eliminar edición de la colección?',
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
                            this.http.removeEditionFromCollection(this.id, itemID, editionID).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                this.ediciones = [];
                                this.getEditionsInCollection();
                                this.changeRef.detectChanges();
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
CollectionPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CollectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./collection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./collection.page.scss */ "./src/app/collection/collection.page.scss")).default]
    })
], CollectionPage);



/***/ })

}]);
//# sourceMappingURL=collection-collection-module-es2015.js.map