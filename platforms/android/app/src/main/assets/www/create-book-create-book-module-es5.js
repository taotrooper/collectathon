(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-book-create-book-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/create-book/create-book.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-book/create-book.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCreateBookCreateBookPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Crear edición libro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newedition\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" formControlName=\"Year\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">EAN13</ion-label>\n        <ion-input placeholder=\"Ejemplo: 8491234567890\" formControlName=\"EAN13\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">ISBN</ion-label>\n        <ion-input placeholder=\"Ejemplo: 9781234567890\" formControlName=\"ISBN\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de páginas</ion-label>\n        <ion-input placeholder=\"Ejemplo: 200\" formControlName=\"NroPaginas\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Editorial</ion-label>\n        <ion-input placeholder=\"Nombre editorial\" formControlName=\"Editorial\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de edición (sin ordinal)</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2\" formControlName=\"Edicion\" type=\"number\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Idioma</ion-label>\n        <ion-input placeholder=\"Ejemplo: Español\" formControlName=\"Idioma\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Tipo de edición</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Tipo\" type=\"text\">\n          <ion-select-option *ngFor=\"let t of TipoLista\" [value]=\"t\">{{t}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/create-book/create-book-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/create-book/create-book-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CreateBookPageRoutingModule */

    /***/
    function srcAppCreateBookCreateBookRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBookPageRoutingModule", function () {
        return CreateBookPageRoutingModule;
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


      var _create_book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-book.page */
      "./src/app/create-book/create-book.page.ts");

      var routes = [{
        path: '',
        component: _create_book_page__WEBPACK_IMPORTED_MODULE_3__["CreateBookPage"]
      }];

      var CreateBookPageRoutingModule = function CreateBookPageRoutingModule() {
        _classCallCheck(this, CreateBookPageRoutingModule);
      };

      CreateBookPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateBookPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/create-book/create-book.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/create-book/create-book.module.ts ***!
      \***************************************************/

    /*! exports provided: CreateBookPageModule */

    /***/
    function srcAppCreateBookCreateBookModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBookPageModule", function () {
        return CreateBookPageModule;
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


      var _create_book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-book-routing.module */
      "./src/app/create-book/create-book-routing.module.ts");
      /* harmony import */


      var _create_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-book.page */
      "./src/app/create-book/create-book.page.ts");

      var CreateBookPageModule = function CreateBookPageModule() {
        _classCallCheck(this, CreateBookPageModule);
      };

      CreateBookPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_book_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateBookPageRoutingModule"]],
        declarations: [_create_book_page__WEBPACK_IMPORTED_MODULE_6__["CreateBookPage"]]
      })], CreateBookPageModule);
      /***/
    },

    /***/
    "./src/app/create-book/create-book.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/create-book/create-book.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCreateBookCreateBookPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1ib29rL2NyZWF0ZS1ib29rLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/create-book/create-book.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/create-book/create-book.page.ts ***!
      \*************************************************/

    /*! exports provided: CreateBookPage */

    /***/
    function srcAppCreateBookCreateBookPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBookPage", function () {
        return CreateBookPage;
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

      var CreateBookPage = /*#__PURE__*/function () {
        function CreateBookPage(http, navCtrl, modalController, route, router, formBuilder) {
          _classCallCheck(this, CreateBookPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.TipoLista = ['Bolsillo', 'Tapa dura', 'Ebook', 'Audiolibro'];
          this.isSubmitted = false;
          this.item = this.route.snapshot.params.item;
          this.newedition = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            ISBN: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroPaginas: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Editorial: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Edicion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Idioma: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
          console.log(this.item);
        }

        _createClass(CreateBookPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newedition = this.formBuilder.group({
              'Year': [null],
              'EAN13': [null],
              'ISBN': [null],
              'NroPaginas': [null],
              'Editorial': [null],
              'Edicion': [null],
              'Idioma': [null],
              'Tipo': [null]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            this.isSubmitted = true;

            if (!this.newedition.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.newedition.value);
              this.http.createEdition(1, this.item, this.newedition.value).subscribe(function (data) {
                console.log("data body: ", data['body']['EditionID']);
                _this.editionID = data['body']['EditionID'];
                console.log("Edición ID:", _this.editionID);

                _this.navCtrl.navigateForward("/edition/book/" + _this.editionID);
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "compareFn",
          value: function compareFn(e1, e2) {
            return e1 && e2 ? e1.id === e2.id : e1 === e2;
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.newedition.controls;
          }
        }]);

        return CreateBookPage;
      }();

      CreateBookPage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      CreateBookPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-book',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-book.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/create-book/create-book.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-book.page.scss */
        "./src/app/create-book/create-book.page.scss"))["default"]]
      })], CreateBookPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-book-create-book-module-es5.js.map