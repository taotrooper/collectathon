(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-person-add-person-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"item/{{type}}/{{item}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Asignar persona/grupo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <ion-item><small>Asigna al menos una persona/grupo al item:</small></ion-item>\n  <form [formGroup]=\"formpeople\" (ngSubmit)=\"addSelect()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Selecciona persona o grupo</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"PersonID\" type=\"text\">\n          <ion-select-option *ngFor=\"let p of people\" [value]=\"p.PersonID\">\n            {{p.LastNames}}<span *ngIf=\"p.LastNames && p.Names\">, </span>{{p.Names}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>Rol</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Role\" type=\"text\">\n        <div *ngIf=\"type=='book'\">\n          <ion-select-option value=\"Autor\">Autor</ion-select-option>\n          <ion-select-option value=\"Ilustrador\">Ilustrador</ion-select-option>\n        </div>\n        <div *ngIf=\"type=='video'\">\n          <ion-select-option value=\"Principal\">Actor principal</ion-select-option>\n          <ion-select-option value=\"Secundario\">Actor secundario</ion-select-option>\n          <ion-select-option value=\"Director\">Director</ion-select-option>\n          <ion-select-option value=\"Productor\">Productor</ion-select-option>\n          <ion-select-option value=\"Guionista\">Guionista</ion-select-option>\n          <ion-select-option value=\"Compositor\">Compositor</ion-select-option>\n          <ion-select-option value=\"Creador\">Creador</ion-select-option>\n          <ion-select-option value=\"Artista\">Artista</ion-select-option>\n          <ion-select-option value=\"Narrador\">Narrador</ion-select-option>\n          <ion-select-option value=\"Presentador\">Presentador</ion-select-option>\n        </div>\n        <div *ngIf=\"type=='music'\">\n          <ion-select-option value=\"Artista\">Artista</ion-select-option>\n        </div>\n        <div *ngIf=\"type=='game'\">\n          <ion-select-option value=\"Director\">Director</ion-select-option>\n          <ion-select-option value=\"Productor\">Productor</ion-select-option>\n          <ion-select-option value=\"Escritor\">Escritor</ion-select-option>\n          <ion-select-option value=\"Compositor\">Compositor</ion-select-option>\n          <ion-select-option value=\"Actor\">Actor</ion-select-option>\n        </div>\n        <div *ngIf=\"type=='comic'\">\n          <ion-select-option value=\"Escritor\">Escritor</ion-select-option>\n          <ion-select-option value=\"Ilustrador\">Ilustrador</ion-select-option>\n          <ion-select-option value=\"Mangaka\">Mangaka</ion-select-option>\n        </div>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button shape=\"round\" color=\"primary\" type=\"submit\">Añadir</ion-button>\n    <ion-button shape=\"round\" color=\"primary\" (click)=\"newPerson()\">Nueva persona</ion-button>\n  </form>\n  <ion-list>\n    <ion-item lines=\"full\" *ngIf=\"peopleadded.length<1\">No hay personas aún.</ion-item>\n    <ion-item lines=\"full\" *ngFor=\"let a of peopleadded\">\n      <ion-chip><app-persona Names=\"{{a.Names}}\" LastNames=\"{{a.LastNames}}\" Role=\"{{a.Role}}\"></app-persona>\n      <button ion-button (click)=\"removePerson(a)\">x</button></ion-chip>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" shape=\"round\" color=\"primary\" (click)=\"process()\">Aceptar</ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/add-person/add-person-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-person/add-person-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddPersonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonPageRoutingModule", function() { return AddPersonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-person.page */ "./src/app/add-person/add-person.page.ts");




const routes = [
    {
        path: '',
        component: _add_person_page__WEBPACK_IMPORTED_MODULE_3__["AddPersonPage"]
    }
];
let AddPersonPageRoutingModule = class AddPersonPageRoutingModule {
};
AddPersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddPersonPageRoutingModule);



/***/ }),

/***/ "./src/app/add-person/add-person.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-person/add-person.module.ts ***!
  \*************************************************/
/*! exports provided: AddPersonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonPageModule", function() { return AddPersonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-person-routing.module */ "./src/app/add-person/add-person-routing.module.ts");
/* harmony import */ var _add_person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-person.page */ "./src/app/add-person/add-person.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");








let AddPersonPageModule = class AddPersonPageModule {
};
AddPersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_person_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPersonPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_add_person_page__WEBPACK_IMPORTED_MODULE_6__["AddPersonPage"]]
    })
], AddPersonPageModule);



/***/ }),

/***/ "./src/app/add-person/add-person.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-person/add-person.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wZXJzb24vYWRkLXBlcnNvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/add-person/add-person.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-person/add-person.page.ts ***!
  \***********************************************/
/*! exports provided: AddPersonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPersonPage", function() { return AddPersonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let AddPersonPage = class AddPersonPage {
    constructor(http, navCtrl, route, router, formBuilder) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.peopleadded = [];
        this.isSubmitted = false;
        this.formpeople = null;
        this.item = this.route.snapshot.params.item;
        this.type = this.route.snapshot.params.type;
        this.formpeople = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            PersonID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Names: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            LastNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Role: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
        });
        this.getPersonList();
    }
    ngOnInit() {
        this.formpeople = this.formBuilder.group({
            'PersonID': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'Names': [null],
            'LastNames': [null],
            'Role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ionViewWillEnter() {
        this.getPersonList();
    }
    getPersonList() {
        this.people = [];
        this.http.getPersonList().subscribe((res) => {
            this.people = res['body'];
            this.people = this.people.filter(o => o['CreatorUserID'] > 0);
            console.log("People:", this.people);
        }, (error) => {
            console.error(error);
        });
    }
    addSelect() {
        this.isSubmitted = true;
        if (!this.formpeople.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else if (this.formpeople.value['PersonID'] > 0) {
            console.log(this.formpeople.value['PersonID']);
            if (!this.peopleadded.find(e => e['PersonID'] == this.formpeople.value['PersonID']
                && e['Role'] == this.formpeople.value['Role'])) {
                var e = this.people.find(e => e['PersonID'] == this.formpeople.value['PersonID']);
                var p = {
                    'PersonID': e['PersonID'],
                    'Names': e['Names'],
                    'LastNames': e['LastNames'],
                    'Role': this.formpeople.value['Role']
                };
                this.peopleadded.push(p);
            }
            console.log("people:" + this.peopleadded);
        }
        this.formpeople.reset();
    }
    newPerson() {
        /*if(!this.peopleadded.find(e => e['Names'] == this.nextitem.value['Names']
          && e['LastNames'] == this.nextitem.value['LastNames'])) {
          var p = {
            'Names': this.nextitem.value['Names'],
            'LastNames': this.nextitem.value['LastNames']
          };
          this.http.createPerson(p);
          this.people = [];
          this.getPersonList();
        }
        this.nextitem.reset();*/
        this.navCtrl.navigateForward("/create-person");
    }
    removePerson(a) {
        this.peopleadded.splice(this.peopleadded.findIndex(e => e === a), 1);
        console.log("people:" + this.peopleadded);
    }
    get errorControl() {
        return this.formpeople.controls;
    }
    compareFn(e1, e2) {
        return e1 && e2 ? e1.id === e2.id : e1 === e2;
    }
    process() {
        var id;
        this.peopleadded.forEach(p => {
            this.http.addPersonToItem(p, this.item).subscribe(data => {
                console.log("Añadida persona ", data['body']['PersonID']);
            }, error => {
                console.log(error);
            });
        });
        this.navCtrl.navigateForward("/item/" + this.type + "/" + this.item);
    }
};
AddPersonPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
AddPersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-person',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-person.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-person/add-person.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-person.page.scss */ "./src/app/add-person/add-person.page.scss")).default]
    })
], AddPersonPage);



/***/ })

}]);
//# sourceMappingURL=add-person-add-person-module-es2015.js.map