(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["allseries-allseries-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/allseries/allseries.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/allseries/allseries.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAllseriesAllseriesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Series</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let s of series\">\n      <ion-item detail (click)=\"goToSeries(s.SeriesID)\" *ngIf=\"s.CreatorUserID>0\">\n        <ion-icon top name=\"pricetags\"></ion-icon>\n        <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ s.SeriesName }}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToNewSeries()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/allseries/allseries-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/allseries/allseries-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AllseriesPageRoutingModule */

    /***/
    function srcAppAllseriesAllseriesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllseriesPageRoutingModule", function () {
        return AllseriesPageRoutingModule;
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


      var _allseries_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./allseries.page */
      "./src/app/allseries/allseries.page.ts");

      var routes = [{
        path: '',
        component: _allseries_page__WEBPACK_IMPORTED_MODULE_3__["AllseriesPage"]
      }];

      var AllseriesPageRoutingModule = function AllseriesPageRoutingModule() {
        _classCallCheck(this, AllseriesPageRoutingModule);
      };

      AllseriesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AllseriesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/allseries/allseries.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/allseries/allseries.module.ts ***!
      \***********************************************/

    /*! exports provided: AllseriesPageModule */

    /***/
    function srcAppAllseriesAllseriesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllseriesPageModule", function () {
        return AllseriesPageModule;
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


      var _allseries_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./allseries-routing.module */
      "./src/app/allseries/allseries-routing.module.ts");
      /* harmony import */


      var _allseries_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./allseries.page */
      "./src/app/allseries/allseries.page.ts");
      /* harmony import */


      var _create_series_create_series_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../create-series/create-series.module */
      "./src/app/create-series/create-series.module.ts");

      var AllseriesPageModule = function AllseriesPageModule() {
        _classCallCheck(this, AllseriesPageModule);
      };

      AllseriesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _allseries_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllseriesPageRoutingModule"], _create_series_create_series_module__WEBPACK_IMPORTED_MODULE_7__["CreateSeriesPageModule"]],
        declarations: [_allseries_page__WEBPACK_IMPORTED_MODULE_6__["AllseriesPage"]]
      })], AllseriesPageModule);
      /***/
    },

    /***/
    "./src/app/allseries/allseries.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/allseries/allseries.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAllseriesAllseriesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbHNlcmllcy9hbGxzZXJpZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/allseries/allseries.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/allseries/allseries.page.ts ***!
      \*********************************************/

    /*! exports provided: AllseriesPage */

    /***/
    function srcAppAllseriesAllseriesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllseriesPage", function () {
        return AllseriesPage;
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


      var _create_series_create_series_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../create-series/create-series.page */
      "./src/app/create-series/create-series.page.ts");

      var AllseriesPage = /*#__PURE__*/function () {
        function AllseriesPage(http, navCtrl, ModalController, route, router) {
          _classCallCheck(this, AllseriesPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.ModalController = ModalController;
          this.route = route;
          this.router = router;
          this.getSeries();
        }

        _createClass(AllseriesPage, [{
          key: "getSeries",
          value: function getSeries() {
            var _this = this;

            this.series = [];
            this.http.getSeriesList().subscribe(function (res) {
              _this.series = res['body'];
              console.log("res: ", _this.series);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToSeries",
          value: function goToSeries(id) {
            this.navCtrl.navigateForward("/series/" + id);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToNewSeries",
          value: function goToNewSeries() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Página modal");
                      _context.next = 3;
                      return this.ModalController.create({
                        component: _create_series_create_series_page__WEBPACK_IMPORTED_MODULE_5__["CreateSeriesPage"],
                        componentProps: {
                          "paramID": 123,
                          "paramTitle": "Test Title"
                        }
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned != null) {
                          _this2.series = [];
                          _this2.NewSeries = dataReturned;
                          console.log("New Series: ", _this2.NewSeries);

                          _this2.getSeries();
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
        }]);

        return AllseriesPage;
      }();

      AllseriesPage.ctorParameters = function () {
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
        }];
      };

      AllseriesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allseries',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./allseries.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/allseries/allseries.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./allseries.page.scss */
        "./src/app/allseries/allseries.page.scss"))["default"]]
      })], AllseriesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=allseries-allseries-module-es5.js.map