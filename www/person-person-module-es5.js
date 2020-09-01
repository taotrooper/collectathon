(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person-person-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPersonPersonPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"allpeople\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{names}} {{lastnames}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-item><h1>{{names}} {{lastnames}}</h1></ion-item>\n  <ion-item><app-website-list [id]=\"id\" type=\"person\"></app-website-list></ion-item>\n  <ion-list>\n    <ion-item-sliding *ngIf=\"itemCount <= 0\">\n      <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">No existen items para esta persona.</ion-label>\n    </ion-item-sliding>\n    <ion-item-sliding *ngFor=\"let i of items\">\n      <ion-item detail (click)=\"goToItem(i.ItemID, i.ItemType)\">\n        <ion-icon top name={{http.getItemTypeIcon(i.ItemType)}}></ion-icon>\n        <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">{{ i.ItemSummary }}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-button *ngIf=\"creatoruser==user\" (click)=\"goToEditPerson()\">Editar persona</ion-button>\n      <ion-button *ngIf=\"creatoruser==user && itemCount==0\" (click)=\"deletePerson()\" color=\"danger\">Eliminar persona</ion-button>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/person/person-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/person/person-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: PersonPageRoutingModule */

    /***/
    function srcAppPersonPersonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonPageRoutingModule", function () {
        return PersonPageRoutingModule;
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


      var _person_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./person.page */
      "./src/app/person/person.page.ts");

      var routes = [{
        path: '',
        component: _person_page__WEBPACK_IMPORTED_MODULE_3__["PersonPage"]
      }];

      var PersonPageRoutingModule = function PersonPageRoutingModule() {
        _classCallCheck(this, PersonPageRoutingModule);
      };

      PersonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PersonPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/person/person.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/person/person.module.ts ***!
      \*****************************************/

    /*! exports provided: PersonPageModule */

    /***/
    function srcAppPersonPersonModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonPageModule", function () {
        return PersonPageModule;
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


      var _person_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./person-routing.module */
      "./src/app/person/person-routing.module.ts");
      /* harmony import */


      var _person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./person.page */
      "./src/app/person/person.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var PersonPageModule = function PersonPageModule() {
        _classCallCheck(this, PersonPageModule);
      };

      PersonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _person_routing_module__WEBPACK_IMPORTED_MODULE_5__["PersonPageRoutingModule"]],
        declarations: [_person_page__WEBPACK_IMPORTED_MODULE_6__["PersonPage"]]
      })], PersonPageModule);
      /***/
    },

    /***/
    "./src/app/person/person.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/person/person.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppPersonPersonPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/person/person.page.ts":
    /*!***************************************!*\
      !*** ./src/app/person/person.page.ts ***!
      \***************************************/

    /*! exports provided: PersonPage */

    /***/
    function srcAppPersonPersonPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonPage", function () {
        return PersonPage;
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

      var PersonPage = /*#__PURE__*/function () {
        function PersonPage(http, navCtrl, alertCtrl, route, router) {
          _classCallCheck(this, PersonPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.router = router;
          this.itemCount = 0;
          this.id = this.route.snapshot.params.id;
          console.log(this.id);
          this.getItemsByPerson();
          this.getPerson();
          this.user = this.http.getUserID();
          console.log("usuarios: ", this.user, " ", this.creatoruser);
          console.log(this.items);
        }

        _createClass(PersonPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getItemsByPerson",
          value: function getItemsByPerson() {
            var _this = this;

            this.items = [];
            this.http.getItemsByPerson(this.id).subscribe(function (res) {
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
          key: "getPerson",
          value: function getPerson() {
            var _this2 = this;

            this.http.getPerson(this.id).subscribe(function (res) {
              _this2.names = res['Names'];
              _this2.lastnames = res['LastNames'];
              _this2.creatoruser = res['CreatorUserID'];
              console.log("persona: ", res);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToItem",
          value: function goToItem(id, type) {
            this.navCtrl.navigateForward("/item/" + this.http.getItemTypeURL(type) + "/" + id);
          }
        }, {
          key: "goToEditPerson",
          value: function goToEditPerson() {
            this.navCtrl.navigateForward("/edit-person/" + this.id);
          }
        }, {
          key: "deletePerson",
          value: function deletePerson() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Estás seguro que deseas eliminar la persona?',
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

                            _this3.http.deletePerson(_this3.id);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/allpeople");

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return PersonPage;
      }();

      PersonPage.ctorParameters = function () {
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

      PersonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./person.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/person/person.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./person.page.scss */
        "./src/app/person/person.page.scss"))["default"]]
      })], PersonPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=person-person-module-es5.js.map