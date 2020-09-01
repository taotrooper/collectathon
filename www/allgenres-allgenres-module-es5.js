(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["allgenres-allgenres-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/allgenres/allgenres.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/allgenres/allgenres.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAllgenresAllgenresPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Géneros</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <form [formGroup]=\"selector\" novalidate>\n      <ion-item-sliding>\n        <ion-item (click)=\"clickFilter()\">\n          <ion-label>Categorías</ion-label><ion-icon name=\"{{iconSelector}}\"></ion-icon>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"showSelector\">\n          <ion-toggle color=\"secondary\" formControlName=\"narrativa\"></ion-toggle>\n          <ion-label style=\"margin-left: 5px\">Narrativa</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"showSelector\">\n          <ion-toggle color=\"secondary\" formControlName=\"musical\"></ion-toggle>\n          <ion-label style=\"margin-left: 5px\">Musical</ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" *ngIf=\"showSelector\">\n          <ion-toggle color=\"secondary\" formControlName=\"manga\"></ion-toggle>\n          <ion-label style=\"margin-left: 5px\">Manga</ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"showSelector\">\n          <ion-toggle color=\"secondary\" formControlName=\"gaming\"></ion-toggle>\n          <ion-label style=\"margin-left: 5px\">Gaming</ion-label>\n        </ion-item>\n      </ion-item-sliding>\n      <ion-item-sliding *ngFor=\"let g of genres\">\n      <ion-item detail (click)=\"goToGenre(g.GenreID)\" *ngIf=\"selector.value[g.GenreType]\">\n        <ion-icon top name=\"bookmark-outline\"></ion-icon>\n        <span>{{g.GenreName}} ({{g.GenreType}})</span>\n      </ion-item>\n    </ion-item-sliding>\n    </form>\n  </ion-list>\n  <br />\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/allgenres/allgenres-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/allgenres/allgenres-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AllgenresPageRoutingModule */

    /***/
    function srcAppAllgenresAllgenresRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllgenresPageRoutingModule", function () {
        return AllgenresPageRoutingModule;
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


      var _allgenres_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./allgenres.page */
      "./src/app/allgenres/allgenres.page.ts");

      var routes = [{
        path: '',
        component: _allgenres_page__WEBPACK_IMPORTED_MODULE_3__["AllgenresPage"]
      }];

      var AllgenresPageRoutingModule = function AllgenresPageRoutingModule() {
        _classCallCheck(this, AllgenresPageRoutingModule);
      };

      AllgenresPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AllgenresPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/allgenres/allgenres.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/allgenres/allgenres.module.ts ***!
      \***********************************************/

    /*! exports provided: AllgenresPageModule */

    /***/
    function srcAppAllgenresAllgenresModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllgenresPageModule", function () {
        return AllgenresPageModule;
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


      var _allgenres_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./allgenres-routing.module */
      "./src/app/allgenres/allgenres-routing.module.ts");
      /* harmony import */


      var _allgenres_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./allgenres.page */
      "./src/app/allgenres/allgenres.page.ts");

      var AllgenresPageModule = function AllgenresPageModule() {
        _classCallCheck(this, AllgenresPageModule);
      };

      AllgenresPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _allgenres_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllgenresPageRoutingModule"]],
        declarations: [_allgenres_page__WEBPACK_IMPORTED_MODULE_6__["AllgenresPage"]]
      })], AllgenresPageModule);
      /***/
    },

    /***/
    "./src/app/allgenres/allgenres.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/allgenres/allgenres.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAllgenresAllgenresPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGdlbnJlcy9hbGxnZW5yZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/allgenres/allgenres.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/allgenres/allgenres.page.ts ***!
      \*********************************************/

    /*! exports provided: AllgenresPage */

    /***/
    function srcAppAllgenresAllgenresPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllgenresPage", function () {
        return AllgenresPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../api-rest.service */
      "./src/app/api-rest.service.ts");

      var AllgenresPage = /*#__PURE__*/function () {
        function AllgenresPage(http, navCtrl, route, router, formBuilder) {
          _classCallCheck(this, AllgenresPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.showSelector = true;
          this.iconSelector = 'caret-up-outline';
          this.getGenres();
          this.selector = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            narrativa: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            musical: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            manga: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            gaming: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
          });
        }

        _createClass(AllgenresPage, [{
          key: "getGenres",
          value: function getGenres() {
            var _this = this;

            this.genres = [];
            this.http.getAllGenreList().subscribe(function (res) {
              _this.genres = res['body'];
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToGenre",
          value: function goToGenre(id) {
            this.navCtrl.navigateForward("/genre/" + id);
          }
        }, {
          key: "clickFilter",
          value: function clickFilter() {
            this.showSelector = !this.showSelector;

            if (this.showSelector) {
              this.iconSelector = 'caret-up-outline';
            } else {
              this.iconSelector = 'caret-down-outline';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selector = this.formBuilder.group({
              'narrativa': [true],
              'musical': [true],
              'manga': [true],
              'gaming': [true]
            });
          }
        }]);

        return AllgenresPage;
      }();

      AllgenresPage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      AllgenresPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allgenres',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./allgenres.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/allgenres/allgenres.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./allgenres.page.scss */
        "./src/app/allgenres/allgenres.page.scss"))["default"]]
      })], AllgenresPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=allgenres-allgenres-module-es5.js.map