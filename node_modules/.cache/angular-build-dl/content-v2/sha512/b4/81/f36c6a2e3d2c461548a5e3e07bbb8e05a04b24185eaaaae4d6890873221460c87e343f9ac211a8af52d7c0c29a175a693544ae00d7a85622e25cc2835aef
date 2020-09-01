(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mygames-mygames-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mygames/mygames.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mygames/mygames.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMygamesMygamesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mis videojuegos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-searchbar placeholder=\"Buscar...\" [formControl]=\"searchControl\"></ion-searchbar>\n  <ion-item><small>Arrastrar a la derecha para ver opciones.</small></ion-item>\n  <ion-list *ngIf=\"!items\">\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"removeEditionFromUser(ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf=\"items\">\n    <ion-item-sliding *ngFor=\"let ed of items\">\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToAddGames()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/mygames/mygames-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/mygames/mygames-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: MygamesPageRoutingModule */

    /***/
    function srcAppMygamesMygamesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MygamesPageRoutingModule", function () {
        return MygamesPageRoutingModule;
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


      var _mygames_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mygames.page */
      "./src/app/mygames/mygames.page.ts");

      var routes = [{
        path: '',
        component: _mygames_page__WEBPACK_IMPORTED_MODULE_3__["MygamesPage"]
      }];

      var MygamesPageRoutingModule = function MygamesPageRoutingModule() {
        _classCallCheck(this, MygamesPageRoutingModule);
      };

      MygamesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MygamesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mygames/mygames.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/mygames/mygames.module.ts ***!
      \*******************************************/

    /*! exports provided: MygamesPageModule */

    /***/
    function srcAppMygamesMygamesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MygamesPageModule", function () {
        return MygamesPageModule;
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


      var _mygames_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mygames-routing.module */
      "./src/app/mygames/mygames-routing.module.ts");
      /* harmony import */


      var _mygames_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mygames.page */
      "./src/app/mygames/mygames.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var MygamesPageModule = function MygamesPageModule() {
        _classCallCheck(this, MygamesPageModule);
      };

      MygamesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _mygames_routing_module__WEBPACK_IMPORTED_MODULE_5__["MygamesPageRoutingModule"]],
        declarations: [_mygames_page__WEBPACK_IMPORTED_MODULE_6__["MygamesPage"]]
      })], MygamesPageModule);
      /***/
    },

    /***/
    "./src/app/mygames/mygames.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/mygames/mygames.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppMygamesMygamesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Z2FtZXMvbXlnYW1lcy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/mygames/mygames.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/mygames/mygames.page.ts ***!
      \*****************************************/

    /*! exports provided: MygamesPage */

    /***/
    function srcAppMygamesMygamesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MygamesPage", function () {
        return MygamesPage;
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

      var MygamesPage = /*#__PURE__*/function () {
        function MygamesPage(http, navCtrl, router, filterServ, alertController) {
          _classCallCheck(this, MygamesPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.router = router;
          this.filterServ = filterServ;
          this.alertController = alertController;
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        }

        _createClass(MygamesPage, [{
          key: "getEditions",
          value: function getEditions() {
            var _this = this;

            this.http.getGames().subscribe(function (res) {
              _this.ediciones = res['body'];
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToEdition",
          value: function goToEdition(id, type) {
            this.navCtrl.navigateForward("/edition/" + this.http.getItemTypeURL(type) + "/" + id);
          }
        }, {
          key: "goToAddGames",
          value: function goToAddGames() {
            this.navCtrl.navigateForward("/add-game");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.getEditions();
            this.setFilteredList(null);
            this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(700)).subscribe(function (search) {
              _this2.setFilteredList(search);
            });
          }
        }, {
          key: "setFilteredList",
          value: function setFilteredList(searchTerm) {
            this.items = this.filterServ.filterByEdition(searchTerm, this.ediciones);
          }
        }, {
          key: "removeEditionFromUser",
          value: function removeEditionFromUser(editionID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirmar',
                        message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
                        buttons: [{
                          text: 'Cancelar',
                          role: 'cancelar',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Aceptar',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this3.http.removeEditionFromUser(editionID).subscribe(function (data) {
                              _this3.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this3.getEditions();
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MygamesPage;
      }();

      MygamesPage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      MygamesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mygames',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mygames.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mygames/mygames.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mygames.page.scss */
        "./src/app/mygames/mygames.page.scss"))["default"]]
      })], MygamesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mygames-mygames-module-es5.js.map