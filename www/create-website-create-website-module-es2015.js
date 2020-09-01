(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-website-create-website-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Crear página web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newweb\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>URL/Dirección</ion-label>\n        <ion-input placeholder=\"http://www.ejemplo.com/pagina\" formControlName=\"URL\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.URL.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>Texto del enlace</ion-label>\n        <ion-input placeholder=\"Ejemplo: Amazon, Wikipedia, IMDB, etc.\" formControlName=\"Text\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Text.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" (click)=\"closeModal()\">Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/create-website/create-website.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-website/create-website.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS13ZWJzaXRlL2NyZWF0ZS13ZWJzaXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/create-website/create-website.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-website/create-website.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateWebsitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWebsitePage", function() { return CreateWebsitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let CreateWebsitePage = class CreateWebsitePage {
    constructor(modalController, navParams, http, navCtrl, route, router, formBuilder) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
        this.newweb = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            URL: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
    }
    ngOnInit() {
        this.id = this.navParams.data.id;
        this.type = this.navParams.data.type;
        this.newweb = this.formBuilder.group({
            'URL': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
                ])],
            'Text': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.newweb.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.newweb.value);
            this.http.createWebsite(this.newweb.value, this.id, this.type).subscribe(data => {
                console.log("Web " + data['body']);
                this.WebsiteID = data['body']['WebsiteID'];
                console.log("antes de cerrar modal ", this.WebsiteID);
                this.closeModal();
            }, error => {
                console.log(error);
            });
        }
    }
    get errorControl() {
        return this.newweb.controls;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.WebsiteID);
        });
    }
};
CreateWebsitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
CreateWebsitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-website',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-website.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-website.page.scss */ "./src/app/create-website/create-website.page.scss")).default]
    })
], CreateWebsitePage);



/***/ })

}]);
//# sourceMappingURL=create-website-create-website-module-es2015.js.map