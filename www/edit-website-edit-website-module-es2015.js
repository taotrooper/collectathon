(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-website-edit-website-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Editar página web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"web\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>URL/Dirección</ion-label>\n        <ion-input placeholder=\"http://www.ejemplo.com/pagina\" formControlName=\"URL\" type=\"url\" \n        [value]=\"web.URL\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.URL.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>Texto del enlace</ion-label>\n        <ion-input placeholder=\"Ejemplo: Amazon, Wikipedia, IMDB, etc.\" formControlName=\"Text\" \n        [value]=\"web.Text\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Text.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" (click)=\"closeModal()\">Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/edit-website/edit-website-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/edit-website/edit-website-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditWebsitePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWebsitePageRoutingModule", function() { return EditWebsitePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_website_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-website.page */ "./src/app/edit-website/edit-website.page.ts");




const routes = [
    {
        path: '',
        component: _edit_website_page__WEBPACK_IMPORTED_MODULE_3__["EditWebsitePage"]
    }
];
let EditWebsitePageRoutingModule = class EditWebsitePageRoutingModule {
};
EditWebsitePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditWebsitePageRoutingModule);



/***/ }),

/***/ "./src/app/edit-website/edit-website.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/edit-website/edit-website.module.ts ***!
  \*****************************************************/
/*! exports provided: EditWebsitePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWebsitePageModule", function() { return EditWebsitePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_website_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-website-routing.module */ "./src/app/edit-website/edit-website-routing.module.ts");
/* harmony import */ var _edit_website_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-website.page */ "./src/app/edit-website/edit-website.page.ts");







let EditWebsitePageModule = class EditWebsitePageModule {
};
EditWebsitePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_website_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditWebsitePageRoutingModule"]
        ],
        declarations: [_edit_website_page__WEBPACK_IMPORTED_MODULE_6__["EditWebsitePage"]]
    })
], EditWebsitePageModule);



/***/ }),

/***/ "./src/app/edit-website/edit-website.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-website/edit-website.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtd2Vic2l0ZS9lZGl0LXdlYnNpdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit-website/edit-website.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-website/edit-website.page.ts ***!
  \***************************************************/
/*! exports provided: EditWebsitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWebsitePage", function() { return EditWebsitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let EditWebsitePage = class EditWebsitePage {
    constructor(modalController, navParams, http, navCtrl, route, router, formBuilder) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
        this.web = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            URL: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
    }
    ngOnInit() {
        this.id = this.navParams.data.id;
        this.getWebsite();
    }
    getWebsite() {
        this.http.getWebsite(this.id).subscribe((res) => {
            this.web = this.formBuilder.group({
                'URL': [res['URL'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                'Text': [res['Text'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            console.log("res: ", res);
        }, (error) => {
            console.error(error);
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.web.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            this.web.value.WebsiteID = this.id;
            console.log(this.web.value);
            this.http.updateWebsite(this.web.value).subscribe(data => {
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
        return this.web.controls;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.WebsiteID);
        });
    }
};
EditWebsitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditWebsitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-website',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-website.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-website.page.scss */ "./src/app/edit-website/edit-website.page.scss")).default]
    })
], EditWebsitePage);



/***/ })

}]);
//# sourceMappingURL=edit-website-edit-website-module-es2015.js.map