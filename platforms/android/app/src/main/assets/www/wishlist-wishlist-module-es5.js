(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wishlist-wishlist-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWishlistWishlistPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Lista de deseos\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item *ngIf=\"this.ediciones.length == 0\"><small>La lista está vacía.</small></ion-item>\n    <ion-item *ngIf=\"this.ediciones.length > 0\"><small>Arrastrar a la derecha para ver opciones.</small></ion-item>\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"secondary\" (click)=\"markAsOwned(ed.EditionID)\">\n          <ion-icon name=\"checkbox\"></ion-icon>Ya lo tengo\n        </ion-item-option>\n        <ion-item-option color=\"danger\" (click)=\"removeFromWishlist(ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>Borrar de lista\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <app-present-action-sheet></app-present-action-sheet>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/wishlist/wishlist-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/wishlist/wishlist-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: WishlistPageRoutingModule */

    /***/
    function srcAppWishlistWishlistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageRoutingModule", function () {
        return WishlistPageRoutingModule;
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


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/wishlist/wishlist.page.ts");

      var routes = [{
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_3__["WishlistPage"]
      }];

      var WishlistPageRoutingModule = function WishlistPageRoutingModule() {
        _classCallCheck(this, WishlistPageRoutingModule);
      };

      WishlistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WishlistPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/wishlist/wishlist.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/wishlist/wishlist.module.ts ***!
      \*********************************************/

    /*! exports provided: WishlistPageModule */

    /***/
    function srcAppWishlistWishlistModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function () {
        return WishlistPageModule;
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


      var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wishlist-routing.module */
      "./src/app/wishlist/wishlist-routing.module.ts");
      /* harmony import */


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wishlist.page */
      "./src/app/wishlist/wishlist.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var WishlistPageModule = function WishlistPageModule() {
        _classCallCheck(this, WishlistPageModule);
      };

      WishlistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishlistPageRoutingModule"]],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_6__["WishlistPage"]]
      })], WishlistPageModule);
      /***/
    },

    /***/
    "./src/app/wishlist/wishlist.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/wishlist/wishlist.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppWishlistWishlistPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpc2hsaXN0L3dpc2hsaXN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/wishlist/wishlist.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/wishlist/wishlist.page.ts ***!
      \*******************************************/

    /*! exports provided: WishlistPage */

    /***/
    function srcAppWishlistWishlistPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WishlistPage", function () {
        return WishlistPage;
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

      var WishlistPage = /*#__PURE__*/function () {
        function WishlistPage(http, navCtrl, router, alertController, changeRef) {
          _classCallCheck(this, WishlistPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.router = router;
          this.alertController = alertController;
          this.changeRef = changeRef;
          this.getWishlist();
        }

        _createClass(WishlistPage, [{
          key: "getWishlist",
          value: function getWishlist() {
            var _this = this;

            this.ediciones = [];
            this.http.getWishlist().subscribe(function (res) {
              _this.ediciones = res['body'];
              console.log("res: ", _this.ediciones);
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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "markAsOwned",
          value: function markAsOwned(ed) {
            var _this2 = this;

            this.http.updateEditionToUser(ed, 1).subscribe(function (data) {
              _this2.http.presentToast(data['body']['Message']);

              if (data.status == 200) {
                _this2.getWishlist();

                _this2.changeRef.detectChanges();
              }
            }, function (error) {
              console.log(error);
              return error;
            });
          }
        }, {
          key: "removeFromWishlist",
          value: function removeFromWishlist(ed) {
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
                        message: '¿Estás seguro que deseas borrar la edición de tu lista?',
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

                            _this3.http.removeEditionFromUser(ed).subscribe(function (data) {
                              _this3.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this3.getWishlist();

                                _this3.changeRef.detectChanges();
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

        return WishlistPage;
      }();

      WishlistPage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      WishlistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wishlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wishlist.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wishlist.page.scss */
        "./src/app/wishlist/wishlist.page.scss"))["default"]]
      })], WishlistPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=wishlist-wishlist-module-es5.js.map