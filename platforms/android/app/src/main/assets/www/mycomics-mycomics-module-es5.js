(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mycomics-mycomics-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mycomics/mycomics.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mycomics/mycomics.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMycomicsMycomicsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mis cómics\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-searchbar placeholder=\"Buscar...\" [formControl]=\"searchControl\"></ion-searchbar>\n  <ion-item><small>Arrastrar a la derecha para ver opciones.</small></ion-item>\n  <ion-list *ngIf=\"!items\">\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"removeEditionFromUser(ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-list *ngIf=\"items\">\n    <ion-item-sliding *ngFor=\"let ed of items\">\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToAddComic()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/mycomics/mycomics-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/mycomics/mycomics-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MycomicsPageRoutingModule */

    /***/
    function srcAppMycomicsMycomicsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycomicsPageRoutingModule", function () {
        return MycomicsPageRoutingModule;
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


      var _mycomics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mycomics.page */
      "./src/app/mycomics/mycomics.page.ts");

      var routes = [{
        path: '',
        component: _mycomics_page__WEBPACK_IMPORTED_MODULE_3__["MycomicsPage"]
      }];

      var MycomicsPageRoutingModule = function MycomicsPageRoutingModule() {
        _classCallCheck(this, MycomicsPageRoutingModule);
      };

      MycomicsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MycomicsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mycomics/mycomics.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/mycomics/mycomics.module.ts ***!
      \*********************************************/

    /*! exports provided: MycomicsPageModule */

    /***/
    function srcAppMycomicsMycomicsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycomicsPageModule", function () {
        return MycomicsPageModule;
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


      var _mycomics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mycomics-routing.module */
      "./src/app/mycomics/mycomics-routing.module.ts");
      /* harmony import */


      var _mycomics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mycomics.page */
      "./src/app/mycomics/mycomics.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var MycomicsPageModule = function MycomicsPageModule() {
        _classCallCheck(this, MycomicsPageModule);
      };

      MycomicsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _mycomics_routing_module__WEBPACK_IMPORTED_MODULE_5__["MycomicsPageRoutingModule"]],
        declarations: [_mycomics_page__WEBPACK_IMPORTED_MODULE_6__["MycomicsPage"]]
      })], MycomicsPageModule);
      /***/
    },

    /***/
    "./src/app/mycomics/mycomics.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/mycomics/mycomics.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppMycomicsMycomicsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Y29taWNzL215Y29taWNzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/mycomics/mycomics.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/mycomics/mycomics.page.ts ***!
      \*******************************************/

    /*! exports provided: MycomicsPage */

    /***/
    function srcAppMycomicsMycomicsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MycomicsPage", function () {
        return MycomicsPage;
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

      var MycomicsPage = /*#__PURE__*/function () {
        function MycomicsPage(http, navCtrl, router, filterServ, alertController) {
          _classCallCheck(this, MycomicsPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.router = router;
          this.filterServ = filterServ;
          this.alertController = alertController;
          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        }

        _createClass(MycomicsPage, [{
          key: "getEditions",
          value: function getEditions() {
            var _this = this;

            this.http.getComics().subscribe(function (res) {
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
          key: "goToAddComic",
          value: function goToAddComic() {
            this.navCtrl.navigateForward("/add-comic");
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
                      console.log("holita ", editionID);
                      _context.next = 3;
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

                    case 3:
                      alert = _context.sent;
                      _context.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MycomicsPage;
      }();

      MycomicsPage.ctorParameters = function () {
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

      MycomicsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mycomics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mycomics.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mycomics/mycomics.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mycomics.page.scss */
        "./src/app/mycomics/mycomics.page.scss"))["default"]]
      })], MycomicsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mycomics-mycomics-module-es5.js.map