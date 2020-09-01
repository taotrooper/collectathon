(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-music-add-music-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/add-music/add-music.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-music/add-music.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAddMusicAddMusicPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/explore\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Explorar música\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item class=\"ion-text-wrap\">\n      <small>Selecciona ítem para ver sus ediciones o crea uno nuevo si no está en la lista.</small>\n    </ion-item>\n    <ion-searchbar placeholder=\"Buscar...\" [formControl]=\"searchControl\"></ion-searchbar>\n    <div *ngIf=\"!items\">\n    <ion-item-sliding *ngFor=\"let i of albumes\">\n      <ion-item detail (click)=\"goToItem(i.ItemID)\">\n        <ion-label *ngIf=\"i.ItemSummary\" style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n          {{ i.ItemSummary }}\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n    </div>\n    <div *ngIf=\"items\">\n      <ion-item-sliding *ngFor=\"let i of items\">\n        <ion-item detail (click)=\"goToItem(i.ItemID)\">\n          <ion-label *ngIf=\"i.ItemSummary\" style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n            {{ i.ItemSummary }}\n          </ion-label>\n        </ion-item>\n      </ion-item-sliding>\n    </div>\n    <ion-button color=\"primary\" expand=\"block\" shape=\"round\" (click)=\"goToNewMusic()\">\n      <ion-icon name=\"add\"></ion-icon>\n      <ion-label>Crear nuevo álbum</ion-label>\n    </ion-button>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/add-music/add-music-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/add-music/add-music-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: AddMusicPageRoutingModule */

    /***/
    function srcAppAddMusicAddMusicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMusicPageRoutingModule", function () {
        return AddMusicPageRoutingModule;
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


      var _add_music_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-music.page */
      "./src/app/add-music/add-music.page.ts");

      var routes = [{
        path: '',
        component: _add_music_page__WEBPACK_IMPORTED_MODULE_3__["AddMusicPage"]
      }];

      var AddMusicPageRoutingModule = function AddMusicPageRoutingModule() {
        _classCallCheck(this, AddMusicPageRoutingModule);
      };

      AddMusicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddMusicPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/add-music/add-music.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/add-music/add-music.module.ts ***!
      \***********************************************/

    /*! exports provided: AddMusicPageModule */

    /***/
    function srcAppAddMusicAddMusicModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMusicPageModule", function () {
        return AddMusicPageModule;
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


      var _add_music_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-music-routing.module */
      "./src/app/add-music/add-music-routing.module.ts");
      /* harmony import */


      var _add_music_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-music.page */
      "./src/app/add-music/add-music.page.ts");

      var AddMusicPageModule = function AddMusicPageModule() {
        _classCallCheck(this, AddMusicPageModule);
      };

      AddMusicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_music_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddMusicPageRoutingModule"]],
        declarations: [_add_music_page__WEBPACK_IMPORTED_MODULE_6__["AddMusicPage"]]
      })], AddMusicPageModule);
      /***/
    },

    /***/
    "./src/app/add-music/add-music.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/add-music/add-music.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppAddMusicAddMusicPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tdXNpYy9hZGQtbXVzaWMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/add-music/add-music.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/add-music/add-music.page.ts ***!
      \*********************************************/

    /*! exports provided: AddMusicPage */

    /***/
    function srcAppAddMusicAddMusicPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMusicPage", function () {
        return AddMusicPage;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../api-rest.service */
      "./src/app/api-rest.service.ts");
      /* harmony import */


      var _filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../filter.service */
      "./src/app/filter.service.ts");

      var AddMusicPage = /*#__PURE__*/function () {
        function AddMusicPage(http, filterServ, navCtrl, route, router) {
          var _this = this;

          _classCallCheck(this, AddMusicPage);

          this.http = http;
          this.filterServ = filterServ;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
          this.http.getItems(2).subscribe(function (res) {
            _this.albumes = res['body'];
          }, function (error) {
            console.error(error);
          });
        }

        _createClass(AddMusicPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.setFilteredList(null);
            this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(700)).subscribe(function (search) {
              _this2.setFilteredList(search);
            });
          }
        }, {
          key: "setFilteredList",
          value: function setFilteredList(searchTerm) {
            this.items = this.filterServ.filterByItem(searchTerm, this.albumes);
          }
        }, {
          key: "goToItem",
          value: function goToItem(id) {
            console.log("/item/music/" + id);
            this.navCtrl.navigateForward("/item/music/" + id);
          }
        }, {
          key: "goToNewMusic",
          value: function goToNewMusic() {
            console.log("estoy en goToNewMusic()");
            this.navCtrl.navigateForward("/create-item/music");
          }
        }]);

        return AddMusicPage;
      }();

      AddMusicPage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["ApiRestService"]
        }, {
          type: _filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AddMusicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-music',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-music.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/add-music/add-music.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-music.page.scss */
        "./src/app/add-music/add-music.page.scss"))["default"]]
      })], AddMusicPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=add-music-add-music-module-es5.js.map