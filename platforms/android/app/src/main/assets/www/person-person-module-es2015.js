(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person-person-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"allpeople\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{names}} {{lastnames}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-item><h1>{{names}} {{lastnames}}</h1></ion-item>\n  <ion-item><app-website-list [id]=\"id\" type=\"person\"></app-website-list></ion-item>\n  <ion-list>\n    <ion-item-sliding *ngIf=\"itemCount <= 0\">\n      <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">No existen items para esta persona.</ion-label>\n    </ion-item-sliding>\n    <ion-item-sliding *ngFor=\"let i of items\">\n      <ion-item detail (click)=\"goToItem(i.ItemID, i.ItemType)\">\n        <ion-icon top name={{http.getItemTypeIcon(i.ItemType)}}></ion-icon>\n        <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ i.ItemSummary }}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-button *ngIf=\"creatoruser==user\" (click)=\"goToEditPerson()\">Editar persona</ion-button>\n      <ion-button *ngIf=\"creatoruser==user && itemCount==0\" (click)=\"deletePerson()\" color=\"danger\">Eliminar persona</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/person/person-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/person/person-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PersonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPageRoutingModule", function() { return PersonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.page */ "./src/app/person/person.page.ts");




const routes = [
    {
        path: '',
        component: _person_page__WEBPACK_IMPORTED_MODULE_3__["PersonPage"]
    }
];
let PersonPageRoutingModule = class PersonPageRoutingModule {
};
PersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PersonPageRoutingModule);



/***/ }),

/***/ "./src/app/person/person.module.ts":
/*!*****************************************!*\
  !*** ./src/app/person/person.module.ts ***!
  \*****************************************/
/*! exports provided: PersonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPageModule", function() { return PersonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/person/person-routing.module.ts");
/* harmony import */ var _person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person.page */ "./src/app/person/person.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let PersonPageModule = class PersonPageModule {
};
PersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _person_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonPageRoutingModule"]
        ],
        declarations: [_person_page__WEBPACK_IMPORTED_MODULE_6__["PersonPage"]]
    })
], PersonPageModule);



/***/ }),

/***/ "./src/app/person/person.page.scss":
/*!*****************************************!*\
  !*** ./src/app/person/person.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/person/person.page.ts":
/*!***************************************!*\
  !*** ./src/app/person/person.page.ts ***!
  \***************************************/
/*! exports provided: PersonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPage", function() { return PersonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");





let PersonPage = class PersonPage {
    constructor(http, navCtrl, alertCtrl, route, router) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.itemCount = 0;
        this.id = this.route.snapshot.params.id;
        console.log(this.id);
        this.getItemsByPerson();
        this.getPerson();
        this.user = this.http.getUserID();
        console.log("usuarios: ", this.user, " ", this.creatoruser);
        console.log(this.items);
    }
    ngOnInit() {
    }
    getItemsByPerson() {
        this.items = [];
        this.http.getItemsByPerson(this.id).subscribe((res) => {
            this.items = res['body'];
            if (this.items) {
                this.itemCount = this.items.length;
            }
            console.log("res: ", this.items);
        }, (error) => {
            console.error(error);
        });
    }
    getPerson() {
        this.http.getPerson(this.id).subscribe((res) => {
            this.names = res['Names'];
            this.lastnames = res['LastNames'];
            this.creatoruser = res['CreatorUserID'];
            console.log("persona: ", res);
        }, (error) => {
            console.error(error);
        });
    }
    goToItem(id, type) {
        this.navCtrl.navigateForward("/item/" + this.http.getItemTypeURL(type) + "/" + id);
    }
    goToEditPerson() {
        this.navCtrl.navigateForward("/edit-person/" + this.id);
    }
    deletePerson() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas eliminar la persona?',
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
                            this.http.deletePerson(this.id);
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/allpeople");
        });
    }
};
PersonPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./person.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./person.page.scss */ "./src/app/person/person.page.scss")).default]
    })
], PersonPage);



/***/ })

}]);
//# sourceMappingURL=person-person-module-es2015.js.map