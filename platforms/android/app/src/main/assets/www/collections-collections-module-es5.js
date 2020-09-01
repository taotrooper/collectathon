(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collections-collections-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCollectionsCollectionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Mis colecciones\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-list>\n    <ion-item detail button (click)='goToWishlist()'>\n      <ion-icon name=\"heart-outline\"></ion-icon>\n      <div style=\"margin-left: 5px;\">Lista de deseos</div>\n    </ion-item>\n    <ion-item-sliding *ngFor=\"let col of colecciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option color=\"danger\" (click)=\"deleteCollection(col.CollectionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item detail button (click)='goToCollection(col.CollectionID)'>\n        <ion-icon name=\"albums\"></ion-icon> \n        <div style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ col.CollectionName }}</div>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToNewCollection()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/collections/collections-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/collections/collections-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CollectionsPageRoutingModule */

    /***/
    function srcAppCollectionsCollectionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionsPageRoutingModule", function () {
        return CollectionsPageRoutingModule;
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


      var _collections_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collections.page */
      "./src/app/collections/collections.page.ts");

      var routes = [{
        path: '',
        component: _collections_page__WEBPACK_IMPORTED_MODULE_3__["CollectionsPage"]
      }];

      var CollectionsPageRoutingModule = function CollectionsPageRoutingModule() {
        _classCallCheck(this, CollectionsPageRoutingModule);
      };

      CollectionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CollectionsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/collections/collections.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/collections/collections.module.ts ***!
      \***************************************************/

    /*! exports provided: CollectionsPageModule */

    /***/
    function srcAppCollectionsCollectionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionsPageModule", function () {
        return CollectionsPageModule;
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


      var _collections_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./collections-routing.module */
      "./src/app/collections/collections-routing.module.ts");
      /* harmony import */


      var _collections_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collections.page */
      "./src/app/collections/collections.page.ts");
      /* harmony import */


      var _create_collection_create_collection_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../create-collection/create-collection.module */
      "./src/app/create-collection/create-collection.module.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var CollectionsPageModule = function CollectionsPageModule() {
        _classCallCheck(this, CollectionsPageModule);
      };

      CollectionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _collections_routing_module__WEBPACK_IMPORTED_MODULE_5__["CollectionsPageRoutingModule"], _create_collection_create_collection_module__WEBPACK_IMPORTED_MODULE_7__["CreateCollectionPageModule"]],
        declarations: [_collections_page__WEBPACK_IMPORTED_MODULE_6__["CollectionsPage"]]
      })], CollectionsPageModule);
      /***/
    },

    /***/
    "./src/app/collections/collections.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/collections/collections.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCollectionsCollectionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb25zL2NvbGxlY3Rpb25zLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/collections/collections.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/collections/collections.page.ts ***!
      \*************************************************/

    /*! exports provided: CollectionsPage */

    /***/
    function srcAppCollectionsCollectionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionsPage", function () {
        return CollectionsPage;
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


      var _create_collection_create_collection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../create-collection/create-collection.page */
      "./src/app/create-collection/create-collection.page.ts");

      var CollectionsPage = /*#__PURE__*/function () {
        function CollectionsPage(http, navCtrl, modalController, route, router, alertController, changeRef) {
          _classCallCheck(this, CollectionsPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.router = router;
          this.alertController = alertController;
          this.changeRef = changeRef;
          this.getCollections();
        }

        _createClass(CollectionsPage, [{
          key: "getCollections",
          value: function getCollections() {
            var _this = this;

            this.colecciones = [];
            this.http.getCollections().subscribe(function (res) {
              _this.colecciones = res['body'];
              console.log("colecciones: ", _this.colecciones);
            }, function (error) {
              console.error(error);
            });
            console.log(this.colecciones);
          }
        }, {
          key: "goToCollection",
          value: function goToCollection(id) {
            console.log('id ', id);
            this.navCtrl.navigateForward("/collection/" + id);
          }
        }, {
          key: "goToWishlist",
          value: function goToWishlist() {
            this.navCtrl.navigateForward("/wishlist");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToNewCollection",
          value: function goToNewCollection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Página modal");
                      _context.next = 3;
                      return this.modalController.create({
                        component: _create_collection_create_collection_page__WEBPACK_IMPORTED_MODULE_5__["CreateCollectionPage"]
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned != null) {
                          _this2.colecciones = [];
                          _this2.newCol = dataReturned;
                          console.log("New Collection: ", _this2.newCol);

                          _this2.getCollections();

                          _this2.changeRef.detectChanges();
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
          key: "deleteCollection",
          value: function deleteCollection(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirmar',
                        message: '¿Estás seguro que deseas eliminar la colección?',
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

                            _this3.http.deleteCollection(id).subscribe(function (data) {
                              _this3.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this3.getCollections();
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return CollectionsPage;
      }();

      CollectionsPage.ctorParameters = function () {
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      CollectionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collections',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./collections.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/collections/collections.page.html"))["default"],
        providers: [_api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./collections.page.scss */
        "./src/app/collections/collections.page.scss"))["default"]]
      })], CollectionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=collections-collections-module-es5.js.map