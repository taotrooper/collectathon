(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-item-create-item-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/create-item/create-item.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-item/create-item.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCreateItemCreateItemPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Crear item</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newitem\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Nombre del item</ion-label>\n        <ion-input placeholder=\"Nombre\" formControlName=\"ItemName\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.ItemName.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Serie</ion-label>\n        <ion-select #SeriesID okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"SeriesID\" type=\"text\">\n          <ion-select-option [value]=null>Ninguna</ion-select-option>\n          <ion-select-option *ngFor=\"let s of series\" [value]=\"s.SeriesID\">{{s.SeriesName}}</ion-select-option>\n        </ion-select>\n        <ion-button (click)=\"goToNewSeries()\" small>Nueva serie...</ion-button>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Géneros (elige hasta 3)</ion-label>\n          <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n          formControlName=\"GenreID1\" type=\"text\">\n            <ion-select-option [value]=null>Ninguno</ion-select-option>\n            <ion-select-option *ngFor=\"let g of genres\" [value]=\"g.GenreID\">\n              {{g.GenreName}}\n            </ion-select-option>\n          </ion-select>\n          <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n          formControlName=\"GenreID2\">\n            <ion-select-option [value]=null>Ninguno</ion-select-option>\n            <ion-select-option *ngFor=\"let g of genres\" [value]=\"g.GenreID\">\n              {{g.GenreName}}\n            </ion-select-option>\n          </ion-select>\n          <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n          formControlName=\"GenreID3\">\n            <ion-select-option [value]=null>Ninguno</ion-select-option>\n            <ion-select-option *ngFor=\"let g of genres\" [value]=\"g.GenreID\">\n              {{g.GenreName}}\n            </ion-select-option>\n          </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Siguiente ></ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/create-item/create-item-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/create-item/create-item-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CreateItemPageRoutingModule */

    /***/
    function srcAppCreateItemCreateItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateItemPageRoutingModule", function () {
        return CreateItemPageRoutingModule;
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


      var _create_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-item.page */
      "./src/app/create-item/create-item.page.ts");

      var routes = [{
        path: '',
        component: _create_item_page__WEBPACK_IMPORTED_MODULE_3__["CreateItemPage"]
      }];

      var CreateItemPageRoutingModule = function CreateItemPageRoutingModule() {
        _classCallCheck(this, CreateItemPageRoutingModule);
      };

      CreateItemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateItemPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/create-item/create-item.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/create-item/create-item.module.ts ***!
      \***************************************************/

    /*! exports provided: CreateItemPageModule */

    /***/
    function srcAppCreateItemCreateItemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateItemPageModule", function () {
        return CreateItemPageModule;
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


      var _create_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-item-routing.module */
      "./src/app/create-item/create-item-routing.module.ts");
      /* harmony import */


      var _create_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-item.page */
      "./src/app/create-item/create-item.page.ts");
      /* harmony import */


      var _create_series_create_series_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../create-series/create-series.module */
      "./src/app/create-series/create-series.module.ts");

      var CreateItemPageModule = function CreateItemPageModule() {
        _classCallCheck(this, CreateItemPageModule);
      };

      CreateItemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateItemPageRoutingModule"], _create_series_create_series_module__WEBPACK_IMPORTED_MODULE_7__["CreateSeriesPageModule"]],
        declarations: [_create_item_page__WEBPACK_IMPORTED_MODULE_6__["CreateItemPage"]]
      })], CreateItemPageModule);
      /***/
    },

    /***/
    "./src/app/create-item/create-item.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/create-item/create-item.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCreateItemCreateItemPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1pdGVtL2NyZWF0ZS1pdGVtLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/create-item/create-item.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/create-item/create-item.page.ts ***!
      \*************************************************/

    /*! exports provided: CreateItemPage */

    /***/
    function srcAppCreateItemCreateItemPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateItemPage", function () {
        return CreateItemPage;
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
      /* harmony import */


      var _create_series_create_series_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../create-series/create-series.page */
      "./src/app/create-series/create-series.page.ts");

      var CreateItemPage = /*#__PURE__*/function () {
        function CreateItemPage(http, navCtrl, modalController, route, router, formBuilder) {
          _classCallCheck(this, CreateItemPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.NewSeries = null;
          this.isSubmitted = false;
          this.type = this.route.snapshot.params.type;
          this.typeName = this.http.getItemTypeName(this.type);
          this.getSeriesList();
          this.getGenreList();
          this.newitem = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            ItemName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            SeriesID: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            GenreID1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            GenreID2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            GenreID3: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
          this.SeriesID = null;
          this.ItemType = this.http.getItemType(this.type);
        }

        _createClass(CreateItemPage, [{
          key: "getSeriesList",
          value: function getSeriesList() {
            var _this = this;

            this.http.getSeriesList().subscribe(function (res) {
              _this.series = res['body'];
              _this.series = _this.series.filter(function (o) {
                return o['CreatorUserID'] > 0;
              });
              console.log("Series:", _this.series);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getGenreList",
          value: function getGenreList() {
            var _this2 = this;

            console.log("busco géneros de ", this.type);
            this.http.getGenreList(this.type).subscribe(function (res) {
              _this2.genres = res['body'];
              console.log("Géneros ", _this2.genres);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newitem = this.formBuilder.group({
              'ItemName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              'SeriesID': [null],
              'GenreID1': [null],
              'GenreID2': [null],
              'GenreID3': [null]
            });
          }
        }, {
          key: "goToNewSeries",
          value: function goToNewSeries() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Página modal");
                      _context.next = 3;
                      return this.modalController.create({
                        component: _create_series_create_series_page__WEBPACK_IMPORTED_MODULE_6__["CreateSeriesPage"],
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned != null) {
                          _this3.series = [];
                          _this3.NewSeries = dataReturned;
                          console.log("New Series: ", _this3.NewSeries);

                          _this3.getSeriesList();
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                      return _context.abrupt("return", _context.sent);

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.newitem.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              this.newitem.value['ItemType'] = this.ItemType;
              console.log(this.newitem.value);
              this.ItemID = this.http.createItem(this.newitem.value);
              console.log(this.ItemID);
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
            return this.newitem.controls;
          }
        }]);

        return CreateItemPage;
      }();

      CreateItemPage.ctorParameters = function () {
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

      CreateItemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-item',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-item.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/create-item/create-item.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-item.page.scss */
        "./src/app/create-item/create-item.page.scss"))["default"]]
      })], CreateItemPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-item-create-item-module-es5.js.map