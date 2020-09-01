(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["allpeople-allpeople-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/allpeople/allpeople.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/allpeople/allpeople.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAllpeopleAllpeoplePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Gente</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let p of people\">\n      <ion-item detail (click)=\"goToPerson(p.PersonID)\" *ngIf=\"p.CreatorUserID>0\">\n        <ion-icon top name=\"person-outline\"></ion-icon>\n        <app-persona Names=\"{{p.Names}}\" LastNames=\"{{p.LastNames}}\"></app-persona>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToNewPerson()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/allpeople/allpeople-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/allpeople/allpeople-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AllpeoplePageRoutingModule */

    /***/
    function srcAppAllpeopleAllpeopleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllpeoplePageRoutingModule", function () {
        return AllpeoplePageRoutingModule;
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


      var _allpeople_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./allpeople.page */
      "./src/app/allpeople/allpeople.page.ts");

      var routes = [{
        path: '',
        component: _allpeople_page__WEBPACK_IMPORTED_MODULE_3__["AllpeoplePage"]
      }];

      var AllpeoplePageRoutingModule = function AllpeoplePageRoutingModule() {
        _classCallCheck(this, AllpeoplePageRoutingModule);
      };

      AllpeoplePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AllpeoplePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/allpeople/allpeople.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/allpeople/allpeople.module.ts ***!
      \***********************************************/

    /*! exports provided: AllpeoplePageModule */

    /***/
    function srcAppAllpeopleAllpeopleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllpeoplePageModule", function () {
        return AllpeoplePageModule;
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


      var _allpeople_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./allpeople-routing.module */
      "./src/app/allpeople/allpeople-routing.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _allpeople_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./allpeople.page */
      "./src/app/allpeople/allpeople.page.ts");

      var AllpeoplePageModule = function AllpeoplePageModule() {
        _classCallCheck(this, AllpeoplePageModule);
      };

      AllpeoplePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _allpeople_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllpeoplePageRoutingModule"]],
        declarations: [_allpeople_page__WEBPACK_IMPORTED_MODULE_7__["AllpeoplePage"]]
      })], AllpeoplePageModule);
      /***/
    },

    /***/
    "./src/app/allpeople/allpeople.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/allpeople/allpeople.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAllpeopleAllpeoplePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbHBlb3BsZS9hbGxwZW9wbGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/allpeople/allpeople.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/allpeople/allpeople.page.ts ***!
      \*********************************************/

    /*! exports provided: AllpeoplePage */

    /***/
    function srcAppAllpeopleAllpeoplePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllpeoplePage", function () {
        return AllpeoplePage;
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

      var AllpeoplePage = /*#__PURE__*/function () {
        function AllpeoplePage(http, navCtrl, route, router) {
          _classCallCheck(this, AllpeoplePage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.getPeople();
        }

        _createClass(AllpeoplePage, [{
          key: "getPeople",
          value: function getPeople() {
            var _this = this;

            this.people = [];
            this.http.getPersonList().subscribe(function (res) {
              _this.people = res['body'];
              console.log("res: ", _this.people);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToPerson",
          value: function goToPerson(id) {
            this.navCtrl.navigateForward("/person/" + id);
          }
        }, {
          key: "goToNewPerson",
          value: function goToNewPerson() {
            this.navCtrl.navigateForward("/create-person");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllpeoplePage;
      }();

      AllpeoplePage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AllpeoplePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allpeople',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./allpeople.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/allpeople/allpeople.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./allpeople.page.scss */
        "./src/app/allpeople/allpeople.page.scss"))["default"]]
      })], AllpeoplePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=allpeople-allpeople-module-es5.js.map