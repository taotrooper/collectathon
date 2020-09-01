(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["item-item-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/myitems\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{itemName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item class=\"ion-card\"><ion-grid><ion-row>\n        <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n          <h1><ion-icon name=\"{{typeIcon}}\" style=\"margin: 0 5px;\"></ion-icon>\n            <strong>{{itemName}}</strong></h1>\n            <div>\n              <ion-button *ngIf=\"userID==creatorUser\" top expand=\"inline\" (click)=\"goToEditItem()\">Editar</ion-button>\n              <ion-button *ngIf=\"userID==creatorUser\" top expand=\"inline\" color=\"danger\" (click)=\"deleteItem()\">Eliminar</ion-button>\n            </div>\n        </ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-chip *ngFor=\"let p of people\">\n          <ion-icon name=\"person\"></ion-icon>\n          <a href=\"/person/{{p.PersonID}}\" class=\"chiplink\">\n          <app-persona Names=\"{{p.Names}}\" LastNames=\"{{p.LastNames}}\" Role=\"{{p.Role}}\"></app-persona>\n          </a>\n          <ion-icon name=\"close\" (click)=\"removePerson(p.PersonID, p.Role)\"></ion-icon>\n        </ion-chip>\n        <ion-chip (click)=\"addPerson()\">\n          <ion-icon name=\"person-add\"></ion-icon><ion-label>Agregar</ion-label>\n        </ion-chip>\n      </ion-row>\n      <ion-row>\n      <ion-chip *ngIf=\"series>0\">\n        <ion-icon name=\"pricetag\"></ion-icon>\n        <ion-label>\n          <strong>Serie: </strong> \n          <a href=\"/series/{{series}}\" class=\"chiplink\">{{seriesName}}</a>\n        </ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"genreID1>0\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n        <ion-label>\n          <strong></strong> \n          <a href=\"/genre/{{genreID1}}\" class=\"chiplink\">{{genreName1}}</a>\n        </ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"genreID2>0\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n        <ion-label>\n          <strong></strong> \n          <a href=\"/genre/{{genreID2}}\" class=\"chiplink\">{{genreName2}}</a>\n        </ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"genreID3>0\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n        <ion-label>\n          <strong></strong> \n          <a href=\"/genre/{{genreID3}}\" class=\"chiplink\">{{genreName3}}</a>\n        </ion-label>\n      </ion-chip>\n      </ion-row>\n      <ion-row>\n        <app-website-list [id]=\"id\" type=\"item\"></app-website-list>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  </ion-item-sliding>\n  <ion-item-sliding *ngIf=\"itemCount <= 0\">\n    <ion-label>No existen ediciones para este ítem.</ion-label>\n  </ion-item-sliding>\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item class=\"ion-card\">\n        <ion-grid>\n          <ion-row>\n            <ion-col *ngIf=\"type === 'book'\">\n              <div><ion-button href=\"/edition/book/{{ed.EditionID}}\">Ver detalle</ion-button></div>\n              <app-detail-book [id]=\"ed.EditionID\"></app-detail-book>\n            </ion-col>\n            <ion-col *ngIf=\"type === 'music'\">\n              <div><ion-button href=\"/edition/music/{{ed.EditionID}}\">Ver detalle</ion-button></div>\n              <app-detail-music [id]=\"ed.EditionID\"></app-detail-music>\n            </ion-col>\n            <ion-col *ngIf=\"type === 'video'\">\n              <div><ion-button href=\"/edition/video/{{ed.EditionID}}\">Ver detalle</ion-button></div>\n              <app-detail-video [id]=\"ed.EditionID\"></app-detail-video>\n            </ion-col>\n            <ion-col *ngIf=\"type === 'game'\">\n              <div><ion-button href=\"/edition/game/{{ed.EditionID}}\">Ver detalle</ion-button></div>\n              <app-detail-game [id]=\"ed.EditionID\"></app-detail-game>\n            </ion-col>\n            <ion-col *ngIf=\"type === 'comic'\">\n              <div><ion-button href=\"/edition/comic/{{ed.EditionID}}\">Ver detalle</ion-button></div>\n              <app-detail-comic [id]=\"ed.EditionID\"></app-detail-comic>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-button expand=\"full\" (click)=\"goToNewEdition()\">Nueva edición</ion-button>\n    </ion-item-sliding>\n  </ion-list>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/item/item-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/item/item-routing.module.ts ***!
  \*********************************************/
/*! exports provided: ItemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageRoutingModule", function() { return ItemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.page */ "./src/app/item/item.page.ts");




const routes = [
    {
        path: '',
        component: _item_page__WEBPACK_IMPORTED_MODULE_3__["ItemPage"]
    }
];
let ItemPageRoutingModule = class ItemPageRoutingModule {
};
ItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ItemPageRoutingModule);



/***/ }),

/***/ "./src/app/item/item.module.ts":
/*!*************************************!*\
  !*** ./src/app/item/item.module.ts ***!
  \*************************************/
/*! exports provided: ItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPageModule", function() { return ItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-routing.module */ "./src/app/item/item-routing.module.ts");
/* harmony import */ var _item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.page */ "./src/app/item/item.page.ts");
/* harmony import */ var _create_website_create_website_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create-website/create-website.module */ "./src/app/create-website/create-website.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");









let ItemPageModule = class ItemPageModule {
};
ItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _item_routing_module__WEBPACK_IMPORTED_MODULE_5__["ItemPageRoutingModule"],
            _create_website_create_website_module__WEBPACK_IMPORTED_MODULE_7__["CreateWebsitePageModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_item_page__WEBPACK_IMPORTED_MODULE_6__["ItemPage"]],
    })
], ItemPageModule);



/***/ }),

/***/ "./src/app/item/item.page.scss":
/*!*************************************!*\
  !*** ./src/app/item/item.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/item/item.page.ts":
/*!***********************************!*\
  !*** ./src/app/item/item.page.ts ***!
  \***********************************/
/*! exports provided: ItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemPage", function() { return ItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");





let ItemPage = class ItemPage {
    constructor(http, navCtrl, route, router, alertCtrl, modalController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.id = this.route.snapshot.params.id;
        this.type = this.route.snapshot.params.type;
        this.userID = http.getUserID();
        this.getItem();
        this.getEditions();
        console.log("id: " + this.id + ", type: " + this.type + ", userID: " + this.userID);
    }
    getItem() {
        this.http.getItem(this.id).subscribe((res) => {
            this.item = res;
            console.log(this.item);
            this.typeName = this.http.getItemTypeName(this.type);
            this.typeIcon = this.http.getItemTypeIcon(res['ItemType']);
            console.log(this.typeIcon);
            this.itemName = res['ItemName'];
            this.series = res['SeriesID'];
            this.seriesName = res['SeriesName'];
            this.genreID1 = res['GenreID1'];
            this.genreName1 = res['GenreName1'];
            this.genreID2 = res['GenreID2'];
            this.genreName2 = res['GenreName2'];
            this.genreID3 = res['GenreID3'];
            this.genreName3 = res['GenreName3'];
            this.people = res['People'];
            this.creatorUser = res['CreatorUserID'];
            console.log("creator user:", this.creatorUser);
        }, (error) => {
            console.error(error);
        });
    }
    getEditions() {
        this.ediciones = [];
        this.http.getEditionsOfItem(this.id, this.type).subscribe((res) => {
            this.ediciones = res['body'];
            this.itemCount = res['itemCount'];
            console.log('ediciones ', this.ediciones);
        }, (error) => {
            console.error(error);
            this.itemCount = 0;
        });
    }
    goToEditItem() {
        this.navCtrl.navigateForward("/edit-item/" + this.id);
    }
    goToEditEdition(ed) {
        this.navCtrl.navigateForward("/edit-" + this.type + "/" + ed);
    }
    goToNewEdition() {
        this.navCtrl.navigateForward("/create-" + this.type + "/" + this.id);
    }
    deleteItem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Seguro que deseas eliminar permanentemente el item y todas sus ediciones?',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.http.deleteItem(this.id, this.type);
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();*/
        });
    }
    addPerson() {
        console.log("Añadir persona");
        this.navCtrl.navigateForward("/add-person/" + this.type + "/" + this.id);
    }
    removePerson(person, role) {
        console.log("Borrar persona ", person);
        this.http.removePersonToItem(person, this.id, role).subscribe(data => {
            this.http.presentToast(data['body']['Message']);
            if (data.status == 200) {
                this.people = [];
                this.getItem();
            }
        }, error => {
            console.log(error);
            return error;
        });
    }
    ngOnInit() {
    }
};
ItemPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/item/item.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./item.page.scss */ "./src/app/item/item.page.scss")).default]
    })
], ItemPage);



/***/ })

}]);
//# sourceMappingURL=item-item-module-es2015.js.map