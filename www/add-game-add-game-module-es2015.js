(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-game-add-game-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-game/add-game.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-game/add-game.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Explorar videojuegos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ion-text-wrap\">\n      <small>Selecciona ítem para ver sus ediciones o crea uno nuevo si no está en la lista.</small>\n    </ion-item>\n    <ion-searchbar placeholder=\"Buscar...\" [formControl]=\"searchControl\"></ion-searchbar>\n    <div *ngIf=\"!items\">\n    <ion-item-sliding *ngFor=\"let i of games\">\n      <ion-item detail (click)=\"goToItem(i.ItemID)\">\n        <ion-label *ngIf=\"i.ItemSummary\" style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n          {{ i.ItemSummary }}\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n    </div>\n    <div *ngIf=\"items\">\n      <ion-item-sliding *ngFor=\"let i of items\">\n        <ion-item detail (click)=\"goToItem(i.ItemID)\">\n          <ion-label *ngIf=\"i.ItemSummary\" style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n            {{ i.ItemSummary }}\n          </ion-label>\n        </ion-item>\n      </ion-item-sliding>\n    </div>\n    <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToNewGame()\">\n      <ion-icon name=\"add\"></ion-icon>\n      <ion-label>Crear nuevo juego</ion-label>\n    </ion-button>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-game/add-game-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-game/add-game-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddGamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGamePageRoutingModule", function() { return AddGamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-game.page */ "./src/app/add-game/add-game.page.ts");




const routes = [
    {
        path: '',
        component: _add_game_page__WEBPACK_IMPORTED_MODULE_3__["AddGamePage"]
    }
];
let AddGamePageRoutingModule = class AddGamePageRoutingModule {
};
AddGamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddGamePageRoutingModule);



/***/ }),

/***/ "./src/app/add-game/add-game.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-game/add-game.module.ts ***!
  \*********************************************/
/*! exports provided: AddGamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGamePageModule", function() { return AddGamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-game-routing.module */ "./src/app/add-game/add-game-routing.module.ts");
/* harmony import */ var _add_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-game.page */ "./src/app/add-game/add-game.page.ts");







let AddGamePageModule = class AddGamePageModule {
};
AddGamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_game_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddGamePageRoutingModule"]
        ],
        declarations: [_add_game_page__WEBPACK_IMPORTED_MODULE_6__["AddGamePage"]]
    })
], AddGamePageModule);



/***/ }),

/***/ "./src/app/add-game/add-game.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-game/add-game.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1nYW1lL2FkZC1nYW1lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-game/add-game.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-game/add-game.page.ts ***!
  \*******************************************/
/*! exports provided: AddGamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGamePage", function() { return AddGamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter.service */ "./src/app/filter.service.ts");








let AddGamePage = class AddGamePage {
    constructor(http, filterServ, navCtrl, route, router) {
        this.http = http;
        this.filterServ = filterServ;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.http.getItems(4).subscribe((res) => {
            this.games = res['body'];
        }, (error) => {
            console.error(error);
        });
    }
    ngOnInit() {
        this.setFilteredList(null);
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(700))
            .subscribe(search => {
            this.setFilteredList(search);
        });
    }
    setFilteredList(searchTerm) {
        this.items = this.filterServ.filterByItem(searchTerm, this.games);
    }
    goToItem(id) {
        console.log("/item/game/" + id);
        this.navCtrl.navigateForward("/item/game/" + id);
    }
    goToNewGame() {
        console.log("estoy en goToNewGame()");
        this.navCtrl.navigateForward("/create-item/game");
    }
};
AddGamePage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["ApiRestService"] },
    { type: _filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddGamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-game.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-game/add-game.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-game.page.scss */ "./src/app/add-game/add-game.page.scss")).default]
    })
], AddGamePage);



/***/ })

}]);
//# sourceMappingURL=add-game-add-game-module-es2015.js.map