(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myitems-myitems-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myitems/myitems.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myitems/myitems.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mis ítems\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!--<ion-searchbar placeholder=\"Buscar...\" [formControl]=\"searchControl\"></ion-searchbar>-->\n  <ion-item><small>Arrastrar a la derecha para ver opciones.</small></ion-item>\n  <!--<ion-list *ngIf=\"!items\">\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"removeEditionFromUser(ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf=\"items\">\n    <ion-item-sliding *ngFor=\"let ed of items\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"removeEditionFromUser(ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>-->\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"removeEditionFromUser(ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <app-present-action-sheet></app-present-action-sheet>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-infinite-scroll #infiniteScroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Cargando...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/myitems/myitems-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/myitems/myitems-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MyitemsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyitemsPageRoutingModule", function() { return MyitemsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _myitems_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myitems.page */ "./src/app/myitems/myitems.page.ts");




const routes = [
    {
        path: '',
        component: _myitems_page__WEBPACK_IMPORTED_MODULE_3__["MyitemsPage"]
    }
];
let MyitemsPageRoutingModule = class MyitemsPageRoutingModule {
};
MyitemsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyitemsPageRoutingModule);



/***/ }),

/***/ "./src/app/myitems/myitems.module.ts":
/*!*******************************************!*\
  !*** ./src/app/myitems/myitems.module.ts ***!
  \*******************************************/
/*! exports provided: MyitemsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyitemsPageModule", function() { return MyitemsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _myitems_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myitems-routing.module */ "./src/app/myitems/myitems-routing.module.ts");
/* harmony import */ var _myitems_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myitems.page */ "./src/app/myitems/myitems.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let MyitemsPageModule = class MyitemsPageModule {
};
MyitemsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _myitems_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyitemsPageRoutingModule"]
        ],
        declarations: [_myitems_page__WEBPACK_IMPORTED_MODULE_6__["MyitemsPage"]]
    })
], MyitemsPageModule);



/***/ }),

/***/ "./src/app/myitems/myitems.page.scss":
/*!*******************************************!*\
  !*** ./src/app/myitems/myitems.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215aXRlbXMvbXlpdGVtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/myitems/myitems.page.ts":
/*!*****************************************!*\
  !*** ./src/app/myitems/myitems.page.ts ***!
  \*****************************************/
/*! exports provided: MyitemsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyitemsPage", function() { return MyitemsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../filter.service */ "./src/app/filter.service.ts");







let MyitemsPage = class MyitemsPage {
    constructor(http, filterServ, navCtrl, router, alertController) {
        this.http = http;
        this.filterServ = filterServ;
        this.navCtrl = navCtrl;
        this.router = router;
        this.alertController = alertController;
        this.ediciones = [];
        this.page_number = 1;
        this.page_limit = 10;
        this.firstLoad = true;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    getEditions() {
        this.http.getEditions().subscribe((res) => {
            this.ediciones = res['body'];
            console.log(this.ediciones);
        }, (error) => {
            console.error(error);
        });
    }
    getEditionsPaginated(event) {
        this.http.getEditionsPaginated(this.page_number, this.page_limit).subscribe((res) => {
            /*this.ediciones = res['body'];
            console.log(this.ediciones);*/
            for (let i = 0; i < res['body'].length; i++) {
                this.ediciones.push(res['body'][i]);
            }
            if (event)
                event.target.complete();
            if (!res['body']) {
                event.target.disabled = true;
            }
            this.page_number++;
        }, error => {
            event.target.disabled = true;
            console.log(error);
        });
    }
    doInfinite(event) {
        this.getEditionsPaginated(event);
    }
    goToEdition(id, type) {
        this.navCtrl.navigateForward("/edition/" + this.http.getItemTypeURL(type) + "/" + id);
    }
    ngOnInit() {
        /*this.getEditions();*/
        this.getEditionsPaginated(event);
        /*this.setFilteredList(null);
        this.searchControl.valueChanges
          .pipe(debounceTime(700))
          .subscribe(search => {
            this.setFilteredList(search);
          });*/
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
MyitemsPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["ApiRestService"] },
    { type: _filter_service__WEBPACK_IMPORTED_MODULE_6__["FilterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
MyitemsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myitems',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myitems.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myitems/myitems.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myitems.page.scss */ "./src/app/myitems/myitems.page.scss")).default]
    })
], MyitemsPage);



/***/ })

}]);
//# sourceMappingURL=myitems-myitems-module-es2015.js.map