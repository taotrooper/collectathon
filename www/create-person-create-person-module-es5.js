(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-person-create-person-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/create-person/create-person.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-person/create-person.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCreatePersonCreatePersonPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/allpeople\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Crear persona/grupo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newperson\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Nombres/pseudónimo de la persona o grupo</ion-label>\n        <ion-input placeholder=\"Nombre\" formControlName=\"Names\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Names.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Apellidos de la persona (si tiene)</ion-label>\n        <ion-input placeholder=\"Apellidos\" formControlName=\"LastNames\" type=\"text\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/create-person/create-person-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/create-person/create-person-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CreatePersonPageRoutingModule */

    /***/
    function srcAppCreatePersonCreatePersonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePersonPageRoutingModule", function () {
        return CreatePersonPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _create_person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-person.page */
      "./src/app/create-person/create-person.page.ts");

      var routes = [{
        path: '',
        component: _create_person_page__WEBPACK_IMPORTED_MODULE_3__["CreatePersonPage"]
      }];

      var CreatePersonPageRoutingModule = function CreatePersonPageRoutingModule() {
        _classCallCheck(this, CreatePersonPageRoutingModule);
      };

      CreatePersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreatePersonPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/create-person/create-person.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/create-person/create-person.module.ts ***!
      \*******************************************************/

    /*! exports provided: CreatePersonPageModule */

    /***/
    function srcAppCreatePersonCreatePersonModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePersonPageModule", function () {
        return CreatePersonPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _create_person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-person-routing.module */
      "./src/app/create-person/create-person-routing.module.ts");
      /* harmony import */


      var _create_person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-person.page */
      "./src/app/create-person/create-person.page.ts");

      var CreatePersonPageModule = function CreatePersonPageModule() {
        _classCallCheck(this, CreatePersonPageModule);
      };

      CreatePersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_person_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePersonPageRoutingModule"]],
        declarations: [_create_person_page__WEBPACK_IMPORTED_MODULE_6__["CreatePersonPage"]]
      })], CreatePersonPageModule);
      /***/
    },

    /***/
    "./src/app/create-person/create-person.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/create-person/create-person.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCreatePersonCreatePersonPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1wZXJzb24vY3JlYXRlLXBlcnNvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/create-person/create-person.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/create-person/create-person.page.ts ***!
      \*****************************************************/

    /*! exports provided: CreatePersonPage */

    /***/
    function srcAppCreatePersonCreatePersonPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePersonPage", function () {
        return CreatePersonPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api-rest.service */
      "./src/app/api-rest.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var CreatePersonPage = /*#__PURE__*/function () {
        function CreatePersonPage(http, navCtrl, route, router, formBuilder) {
          _classCallCheck(this, CreatePersonPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.isSubmitted = false;
          this.newperson = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Names: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            LastNames: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            PersonID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
        }

        _createClass(CreatePersonPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newperson = this.formBuilder.group({
              'Names': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              'LastNames': [null]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.newperson.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.newperson.value);
              this.PersonID = this.http.createPerson(this.newperson.value);
              console.log("PersonID:", this.PersonID);
              this.navCtrl.navigateForward("/allpeople");
            }
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.newperson.controls;
          }
        }]);

        return CreatePersonPage;
      }();

      CreatePersonPage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      CreatePersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-person',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-person.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/create-person/create-person.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-person.page.scss */
        "./src/app/create-person/create-person.page.scss"))["default"]]
      })], CreatePersonPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-person-create-person-module-es5.js.map