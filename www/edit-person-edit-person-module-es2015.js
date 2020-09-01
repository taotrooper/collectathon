(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-person-edit-person-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-person/edit-person.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-person/edit-person.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/person/{{PersonID}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar persona</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"person\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Nombres/pseudónimo de la persona o grupo</ion-label>\n        <ion-input placeholder=\"Nombre\" formControlName=\"Names\" [value]=\"person.Names\" \n        type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Names.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Apellidos de la persona (si tiene)</ion-label>\n        <ion-input placeholder=\"Apellidos\" formControlName=\"LastNames\" [value]=\"person.LastNames\" \n        type=\"text\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/edit-person/edit-person-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/edit-person/edit-person-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EditPersonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonPageRoutingModule", function() { return EditPersonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-person.page */ "./src/app/edit-person/edit-person.page.ts");




const routes = [
    {
        path: '',
        component: _edit_person_page__WEBPACK_IMPORTED_MODULE_3__["EditPersonPage"]
    }
];
let EditPersonPageRoutingModule = class EditPersonPageRoutingModule {
};
EditPersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPersonPageRoutingModule);



/***/ }),

/***/ "./src/app/edit-person/edit-person.module.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-person/edit-person.module.ts ***!
  \***************************************************/
/*! exports provided: EditPersonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonPageModule", function() { return EditPersonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-person-routing.module */ "./src/app/edit-person/edit-person-routing.module.ts");
/* harmony import */ var _edit_person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-person.page */ "./src/app/edit-person/edit-person.page.ts");







let EditPersonPageModule = class EditPersonPageModule {
};
EditPersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_person_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPersonPageRoutingModule"]
        ],
        declarations: [_edit_person_page__WEBPACK_IMPORTED_MODULE_6__["EditPersonPage"]]
    })
], EditPersonPageModule);



/***/ }),

/***/ "./src/app/edit-person/edit-person.page.scss":
/*!***************************************************!*\
  !*** ./src/app/edit-person/edit-person.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtcGVyc29uL2VkaXQtcGVyc29uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-person/edit-person.page.ts":
/*!*************************************************!*\
  !*** ./src/app/edit-person/edit-person.page.ts ***!
  \*************************************************/
/*! exports provided: EditPersonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPersonPage", function() { return EditPersonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let EditPersonPage = class EditPersonPage {
    constructor(http, navCtrl, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.person = null;
        this.isSubmitted = false;
        this.PersonID = this.route.snapshot.params.id;
        this.person = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            PersonID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Names: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            LastNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.getPerson();
    }
    getPerson() {
        this.http.getPerson(this.PersonID).subscribe((res) => {
            this.person = this.formBuilder.group({
                'PersonID': [res['PersonID']],
                'Names': [res['Names']],
                'LastNames': [res['LastNames']]
            });
            console.log("person: ", this.person);
        }, (error) => {
            console.error(error);
        });
    }
    ngOnInit() { }
    submitForm() {
        this.isSubmitted = true;
        if (!this.person.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.person.value);
            var res = this.http.updatePerson(this.person.value, this.PersonID);
            console.log("Resultado: ", res);
            this.navCtrl.navigateForward("/person/" + this.PersonID);
        }
    }
    get errorControl() {
        return this.person.controls;
    }
};
EditPersonPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditPersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-person',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-person.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-person/edit-person.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-person.page.scss */ "./src/app/edit-person/edit-person.page.scss")).default]
    })
], EditPersonPage);



/***/ })

}]);
//# sourceMappingURL=edit-person-edit-person-module-es2015.js.map