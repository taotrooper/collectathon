(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["genre-genre-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/genre/genre.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/genre/genre.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGenreGenrePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"allgenres\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-item><h1>{{name}}</h1></ion-item>\n  <ion-list>\n    <ion-item-sliding *ngIf=\"itemCount <= 0\">\n      <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">No existen items para este género.</ion-label>\n    </ion-item-sliding>\n    <ion-item-sliding *ngFor=\"let i of items\">\n      <ion-item detail (click)=\"goToItem(i.ItemID, i.ItemType)\">\n        <ion-icon top name={{http.getItemTypeIcon(i.ItemType)}}></ion-icon>\n        <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ i.ItemSummary }}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/genre/genre-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/genre/genre-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: GenrePageRoutingModule */

    /***/
    function srcAppGenreGenreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenrePageRoutingModule", function () {
        return GenrePageRoutingModule;
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


      var _genre_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./genre.page */
      "./src/app/genre/genre.page.ts");

      var routes = [{
        path: '',
        component: _genre_page__WEBPACK_IMPORTED_MODULE_3__["GenrePage"]
      }];

      var GenrePageRoutingModule = function GenrePageRoutingModule() {
        _classCallCheck(this, GenrePageRoutingModule);
      };

      GenrePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GenrePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/genre/genre.module.ts":
    /*!***************************************!*\
      !*** ./src/app/genre/genre.module.ts ***!
      \***************************************/

    /*! exports provided: GenrePageModule */

    /***/
    function srcAppGenreGenreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenrePageModule", function () {
        return GenrePageModule;
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


      var _genre_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./genre-routing.module */
      "./src/app/genre/genre-routing.module.ts");
      /* harmony import */


      var _genre_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./genre.page */
      "./src/app/genre/genre.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var GenrePageModule = function GenrePageModule() {
        _classCallCheck(this, GenrePageModule);
      };

      GenrePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _genre_routing_module__WEBPACK_IMPORTED_MODULE_5__["GenrePageRoutingModule"]],
        declarations: [_genre_page__WEBPACK_IMPORTED_MODULE_6__["GenrePage"]]
      })], GenrePageModule);
      /***/
    },

    /***/
    "./src/app/genre/genre.page.scss":
    /*!***************************************!*\
      !*** ./src/app/genre/genre.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppGenreGenrePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbnJlL2dlbnJlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/genre/genre.page.ts":
    /*!*************************************!*\
      !*** ./src/app/genre/genre.page.ts ***!
      \*************************************/

    /*! exports provided: GenrePage */

    /***/
    function srcAppGenreGenrePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenrePage", function () {
        return GenrePage;
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

      var GenrePage = /*#__PURE__*/function () {
        function GenrePage(http, navCtrl, alertCtrl, route, router) {
          _classCallCheck(this, GenrePage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.router = router;
          this.itemCount = 0;
          this.id = this.route.snapshot.params.id;
          console.log(this.id);
          this.getItemsByGenre();
          this.getGenre();
          console.log(this.items);
        }

        _createClass(GenrePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getItemsByGenre",
          value: function getItemsByGenre() {
            var _this = this;

            this.items = [];
            this.http.getItemsByGenre(this.id).subscribe(function (res) {
              _this.items = res['body'];

              if (_this.items) {
                _this.itemCount = _this.items.length;
              }

              console.log("res: ", _this.items);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getGenre",
          value: function getGenre() {
            var _this2 = this;

            this.http.getGenre(this.id).subscribe(function (res) {
              _this2.name = res['GenreName'];
              _this2.type = res['GenreType'];
              console.log("género: ", res);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToItem",
          value: function goToItem(id, type) {
            this.navCtrl.navigateForward("/item/" + this.http.getItemTypeURL(type) + "/" + id);
          }
        }]);

        return GenrePage;
      }();

      GenrePage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      GenrePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-genre',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./genre.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/genre/genre.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./genre.page.scss */
        "./src/app/genre/genre.page.scss"))["default"]]
      })], GenrePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=genre-genre-module-es5.js.map