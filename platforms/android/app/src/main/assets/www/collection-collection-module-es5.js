(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["collection-collection-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCollectionCollectionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"collections\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <div style=\"text-align: center\" *ngIf=\"user==myuser\">\n      <ion-button (click)=\"editCollection()\"><ion-icon name=\"pencil\"></ion-icon>Editar</ion-button>\n      <ion-button (click)=\"deleteCollection()\" color=\"danger\">\n        <ion-icon name=\"trash\"></ion-icon>Eliminar\n      </ion-button>\n    </div>\n    <ion-item *ngIf=\"this.ediciones.length == 0\"><small>La colección está vacía.</small></ion-item>\n    <ion-item *ngIf=\"this.ediciones.length > 0 && user==myuser\">\n      <small>Arrastrar a la derecha para ver opciones.</small>\n    </ion-item>\n    <ion-item-sliding *ngFor=\"let ed of ediciones\">\n      <ion-item-options side=\"start\">\n        <ion-item-option *ngIf=\"user==myuser\" color=\"danger\" \n        (click)=\"deleteEditionFromCollection(ed.ItemID, ed.EditionID)\">\n          <ion-icon name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n      <app-edition-list [ed]=\"ed\"></app-edition-list>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab *ngIf=\"user==myuser\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"add\" (click)=\"goToAddCollection()\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/collection/collection-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/collection/collection-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: CollectionPageRoutingModule */

    /***/
    function srcAppCollectionCollectionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionPageRoutingModule", function () {
        return CollectionPageRoutingModule;
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


      var _collection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./collection.page */
      "./src/app/collection/collection.page.ts");

      var routes = [{
        path: '',
        component: _collection_page__WEBPACK_IMPORTED_MODULE_3__["CollectionPage"]
      }];

      var CollectionPageRoutingModule = function CollectionPageRoutingModule() {
        _classCallCheck(this, CollectionPageRoutingModule);
      };

      CollectionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CollectionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/collection/collection.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/collection/collection.module.ts ***!
      \*************************************************/

    /*! exports provided: CollectionPageModule */

    /***/
    function srcAppCollectionCollectionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionPageModule", function () {
        return CollectionPageModule;
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


      var _collection_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./collection-routing.module */
      "./src/app/collection/collection-routing.module.ts");
      /* harmony import */


      var _collection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./collection.page */
      "./src/app/collection/collection.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");
      /* harmony import */


      var _add_collection_add_collection_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../add-collection/add-collection.module */
      "./src/app/add-collection/add-collection.module.ts");
      /* harmony import */


      var _edit_collection_edit_collection_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../edit-collection/edit-collection.module */
      "./src/app/edit-collection/edit-collection.module.ts");

      var CollectionPageModule = function CollectionPageModule() {
        _classCallCheck(this, CollectionPageModule);
      };

      CollectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _collection_routing_module__WEBPACK_IMPORTED_MODULE_5__["CollectionPageRoutingModule"], _add_collection_add_collection_module__WEBPACK_IMPORTED_MODULE_8__["AddCollectionPageModule"], _edit_collection_edit_collection_module__WEBPACK_IMPORTED_MODULE_9__["EditCollectionPageModule"]],
        declarations: [_collection_page__WEBPACK_IMPORTED_MODULE_6__["CollectionPage"]]
      })], CollectionPageModule);
      /***/
    },

    /***/
    "./src/app/collection/collection.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/collection/collection.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCollectionCollectionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/collection/collection.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/collection/collection.page.ts ***!
      \***********************************************/

    /*! exports provided: CollectionPage */

    /***/
    function srcAppCollectionCollectionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CollectionPage", function () {
        return CollectionPage;
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


      var _add_collection_add_collection_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../add-collection/add-collection.page */
      "./src/app/add-collection/add-collection.page.ts");
      /* harmony import */


      var _edit_collection_edit_collection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../edit-collection/edit-collection.page */
      "./src/app/edit-collection/edit-collection.page.ts");

      var CollectionPage = /*#__PURE__*/function () {
        function CollectionPage(http, navCtrl, alertController, route, router, modalController, changeRef) {
          _classCallCheck(this, CollectionPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.route = route;
          this.router = router;
          this.modalController = modalController;
          this.changeRef = changeRef;
        }

        _createClass(CollectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.route.snapshot.params.id;
            console.log(this.id);
            this.myuser = this.http.getUserID();
            this.getEditionsInCollection();
            this.getCollection();
            console.log(this.ediciones);
            this.changeRef.detectChanges();
          }
        }, {
          key: "getEditionsInCollection",
          value: function getEditionsInCollection() {
            var _this = this;

            this.ediciones = [];
            this.http.getEditionsInCollection(this.id).subscribe(function (res) {
              if (res['body']) {
                _this.ediciones = res['body'];

                _this.changeRef.detectChanges();
              }

              console.log("res: ", _this.ediciones);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getCollection",
          value: function getCollection() {
            var _this2 = this;

            this.name = null;
            this.http.getCollection(this.id).subscribe(function (res) {
              _this2.name = res['CollectionName'];
              _this2.user = res['UserID'];
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
          key: "editCollection",
          value: function editCollection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _edit_collection_edit_collection_page__WEBPACK_IMPORTED_MODULE_6__["EditCollectionPage"],
                        componentProps: {
                          "id": this.id
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        _this3.getCollection();

                        _this3.changeRef.detectChanges();
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "goToAddCollection",
          value: function goToAddCollection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("Página modal");
                      _context2.next = 3;
                      return this.modalController.create({
                        component: _add_collection_add_collection_page__WEBPACK_IMPORTED_MODULE_5__["AddCollectionPage"],
                        componentProps: {
                          "id": this.id
                        }
                      });

                    case 3:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned != null) {
                          _this4.ediciones = [];

                          _this4.getEditionsInCollection();

                          _this4.changeRef.detectChanges();
                        }
                      });
                      _context2.next = 7;
                      return modal.present();

                    case 7:
                      return _context2.abrupt("return", _context2.sent);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteCollection",
          value: function deleteCollection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
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

                            _this5.http.deleteCollection(_this5.id).subscribe(function (data) {
                              _this5.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this5.navCtrl.navigateForward("/collections");
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "deleteEditionFromCollection",
          value: function deleteEditionFromCollection(itemID, editionID) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Confirmar',
                        message: '¿Estás seguro que deseas eliminar edición de la colección?',
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

                            _this6.http.removeEditionFromCollection(_this6.id, itemID, editionID).subscribe(function (data) {
                              _this6.http.presentToast(data['body']['Message']);

                              _this6.ediciones = [];

                              _this6.getEditionsInCollection();

                              _this6.changeRef.detectChanges();
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return CollectionPage;
      }();

      CollectionPage.ctorParameters = function () {
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
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      CollectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-collection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./collection.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/collection/collection.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./collection.page.scss */
        "./src/app/collection/collection.page.scss"))["default"]]
      })], CollectionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=collection-collection-module-es5.js.map