(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["explore-explore-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/explore/explore.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore/explore.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppExploreExplorePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Explorar</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <ion-list class=\"ion-text-wrap\" style=\"text-align: center\">\n  <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/add-book\">\n    <ion-icon name=\"book\"></ion-icon>&nbsp;&nbsp;Explorar libros</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/add-music\">\n    <ion-icon name=\"musical-notes\"></ion-icon>&nbsp;&nbsp;Explorar álbumes</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/add-video\">\n    <ion-icon name=\"film\"></ion-icon>&nbsp;&nbsp;Explorar vídeos</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/add-game\">\n    <ion-icon name=\"game-controller\"></ion-icon>&nbsp;&nbsp;Explorar videojuegos</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/add-comic\">\n    <ion-icon name=\"chatbubbles\"></ion-icon>&nbsp;&nbsp;Explorar cómics</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/search\">\n    <ion-icon name=\"search\"></ion-icon>&nbsp;&nbsp;Búsqueda avanzada</ion-button>\n  <ion-grid style=\"padding: 0\">\n    <ion-row style=\"padding: 0\">\n      <ion-col style=\"padding: 0\">\n        <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"allpeople\">Gente</ion-button>\n      </ion-col>\n      <ion-col style=\"padding: 0\">\n        <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/allseries\">Series</ion-button>\n      </ion-col>\n      <ion-col style=\"padding: 0\">\n        <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/allgenres\">Géneros</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" href=\"/random\">\n    <ion-icon name=\"archive\"></ion-icon>&nbsp;&nbsp;Ver otras colecciones</ion-button>\n</ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/explore/explore-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/explore/explore-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ExplorePageRoutingModule */

    /***/
    function srcAppExploreExploreRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePageRoutingModule", function () {
        return ExplorePageRoutingModule;
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


      var _explore_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./explore.page */
      "./src/app/explore/explore.page.ts");

      var routes = [{
        path: '',
        component: _explore_page__WEBPACK_IMPORTED_MODULE_3__["ExplorePage"]
      }];

      var ExplorePageRoutingModule = function ExplorePageRoutingModule() {
        _classCallCheck(this, ExplorePageRoutingModule);
      };

      ExplorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExplorePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/explore/explore.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/explore/explore.module.ts ***!
      \*******************************************/

    /*! exports provided: ExplorePageModule */

    /***/
    function srcAppExploreExploreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePageModule", function () {
        return ExplorePageModule;
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


      var _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./explore-routing.module */
      "./src/app/explore/explore-routing.module.ts");
      /* harmony import */


      var _explore_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./explore.page */
      "./src/app/explore/explore.page.ts");

      var ExplorePageModule = function ExplorePageModule() {
        _classCallCheck(this, ExplorePageModule);
      };

      ExplorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _explore_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExplorePageRoutingModule"]],
        declarations: [_explore_page__WEBPACK_IMPORTED_MODULE_6__["ExplorePage"]]
      })], ExplorePageModule);
      /***/
    },

    /***/
    "./src/app/explore/explore.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/explore/explore.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppExploreExplorePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/explore/explore.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/explore/explore.page.ts ***!
      \*****************************************/

    /*! exports provided: ExplorePage */

    /***/
    function srcAppExploreExplorePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExplorePage", function () {
        return ExplorePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ExplorePage = /*#__PURE__*/function () {
        function ExplorePage() {
          _classCallCheck(this, ExplorePage);
        }

        _createClass(ExplorePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExplorePage;
      }();

      ExplorePage.ctorParameters = function () {
        return [];
      };

      ExplorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-explore',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./explore.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/explore/explore.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./explore.page.scss */
        "./src/app/explore/explore.page.scss"))["default"]]
      })], ExplorePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=explore-explore-module-es5.js.map