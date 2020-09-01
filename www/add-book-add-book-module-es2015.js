(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-book-add-book-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-book/add-book.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-book/add-book.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Explorar libros\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ion-text-wrap\">\n      <small>Selecciona ítem para ver sus ediciones o crea uno nuevo si no está en la lista.</small>\n    </ion-item>\n    <ion-searchbar placeholder=\"Buscar...\" [formControl]=\"searchControl\"></ion-searchbar>\n    <div *ngIf=\"!items\">\n    <ion-item-sliding *ngFor=\"let i of libros\">\n      <ion-item detail (click)=\"goToItem(i.ItemID)\">\n        <ion-label *ngIf=\"i.ItemSummary\" style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n          {{ i.ItemSummary }}\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n    </div>\n    <div *ngIf=\"items\">\n      <ion-item-sliding *ngFor=\"let i of items\">\n        <ion-item detail (click)=\"goToItem(i.ItemID)\">\n          <ion-label *ngIf=\"i.ItemSummary\" style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n            {{ i.ItemSummary }}\n          </ion-label>\n        </ion-item>\n      </ion-item-sliding>\n    </div>\n    <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToNewBook()\">\n      <ion-icon name=\"add\"></ion-icon>\n      <ion-label>Crear nuevo libro</ion-label>\n    </ion-button>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/add-book/add-book-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-book/add-book-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddBookPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookPageRoutingModule", function() { return AddBookPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-book.page */ "./src/app/add-book/add-book.page.ts");




const routes = [
    {
        path: '',
        component: _add_book_page__WEBPACK_IMPORTED_MODULE_3__["AddBookPage"]
    }
];
let AddBookPageRoutingModule = class AddBookPageRoutingModule {
};
AddBookPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddBookPageRoutingModule);



/***/ }),

/***/ "./src/app/add-book/add-book.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-book/add-book.module.ts ***!
  \*********************************************/
/*! exports provided: AddBookPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookPageModule", function() { return AddBookPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-book-routing.module */ "./src/app/add-book/add-book-routing.module.ts");
/* harmony import */ var _add_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-book.page */ "./src/app/add-book/add-book.page.ts");







let AddBookPageModule = class AddBookPageModule {
};
AddBookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_book_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddBookPageRoutingModule"]
        ],
        declarations: [_add_book_page__WEBPACK_IMPORTED_MODULE_6__["AddBookPage"]]
    })
], AddBookPageModule);



/***/ }),

/***/ "./src/app/add-book/add-book.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-book/add-book.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ib29rL2FkZC1ib29rLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-book/add-book.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-book/add-book.page.ts ***!
  \*******************************************/
/*! exports provided: AddBookPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookPage", function() { return AddBookPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter.service */ "./src/app/filter.service.ts");








let AddBookPage = class AddBookPage {
    constructor(http, filterServ, navCtrl, route, router) {
        this.http = http;
        this.filterServ = filterServ;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.http.getItems(1).subscribe((res) => {
            this.libros = res['body'];
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
        this.items = this.filterServ.filterByItem(searchTerm, this.libros);
    }
    goToItem(id) {
        console.log("/item/book/" + id);
        this.navCtrl.navigateForward("/item/book/" + id);
    }
    goToNewBook() {
        /*this.navCtrl.navigateForward("/new-book");*/
        console.log("estoy en goToNewBook()");
        this.navCtrl.navigateForward("/create-item/book");
    }
};
AddBookPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["ApiRestService"] },
    { type: _filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddBookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-book',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-book.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-book/add-book.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-book.page.scss */ "./src/app/add-book/add-book.page.scss")).default]
    })
], AddBookPage);



/***/ })

}]);
//# sourceMappingURL=add-book-add-book-module-es2015.js.map