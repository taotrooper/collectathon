(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edition-edition-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/edition/edition.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edition/edition.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditionEditionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{itemName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item class=\"ion-card\"><ion-grid><ion-row>\n        <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\">\n          <h1><ion-icon name=\"{{typeIcon}}\" style=\"margin: 0 5px;\"></ion-icon>\n            <strong>{{itemName}}</strong></h1>\n            <div><ion-button top expand=\"inline\" (click)=\"goToItem()\">Ver todas las ediciones</ion-button></div>\n        </ion-label>\n      </ion-row>\n      <ion-row>\n        <ion-chip *ngFor=\"let p of people\">\n          <ion-icon name=\"person\"></ion-icon> \n          <a href=\"/person/{{p.PersonID}}\" class=\"chiplink\">\n          <app-persona Names=\"{{p.Names}}\" LastNames=\"{{p.LastNames}}\" Role=\"{{p.Role}}\"></app-persona>\n          </a>\n          <ion-icon name=\"close\" (click)=\"removePerson(p.PersonID, p.Role)\"></ion-icon>\n        </ion-chip>\n        <ion-chip (click)=\"addPerson()\">\n          <ion-icon name=\"person-add\"></ion-icon><ion-label>Agregar</ion-label>\n        </ion-chip>\n      </ion-row>\n      <ion-row>\n      <ion-chip *ngIf=\"seriesID>0\">\n        <ion-icon name=\"pricetag\"></ion-icon> \n        <ion-label>\n          <strong>Serie: </strong> \n          <a href=\"/series/{{seriesID}}\" class=\"chiplink\">{{seriesName}}</a>\n        </ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"genreID1>0\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n        <ion-label>\n          <strong></strong> \n          <a href=\"/genre/{{genreID1}}\" class=\"chiplink\">{{genreName1}}</a>\n        </ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"genreID2>0\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n        <ion-label>\n          <strong></strong> \n          <a href=\"/genre/{{genreID2}}\" class=\"chiplink\">{{genreName2}}</a>\n        </ion-label>\n      </ion-chip>\n      <ion-chip *ngIf=\"genreID3>0\">\n        <ion-icon name=\"bookmark\"></ion-icon>\n        <ion-label>\n          <strong></strong> \n          <a href=\"/genre/{{genreID3}}\" class=\"chiplink\">{{genreName3}}</a>\n        </ion-label>\n      </ion-chip>\n      </ion-row>\n      <ion-row>\n        <app-website-list [id]=\"id\" type=\"edition\"></app-website-list>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n  </ion-item-sliding>\n  <ion-item-sliding>\n    <ion-item class=\"ion-card\">\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngIf=\"type === 'book'\">\n            <!--<app-detail-book [book]=\"edicion\" [id]=\"id\"></app-detail-book>-->\n            <app-detail-book [id]=\"id\"></app-detail-book>\n          </ion-col>\n          <ion-col *ngIf=\"type === 'music'\">\n            <app-detail-music [id]=\"id\"></app-detail-music>\n          </ion-col>\n          <ion-col *ngIf=\"type === 'video'\">\n            <app-detail-video [id]=\"id\"></app-detail-video>\n          </ion-col>\n          <ion-col *ngIf=\"type === 'game'\">\n            <app-detail-game [id]=\"id\"></app-detail-game>\n          </ion-col>\n          <ion-col *ngIf=\"type === 'comic'\">\n            <app-detail-comic [id]=\"id\"></app-detail-comic>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/edition/edition-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/edition/edition-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: EditionPageRoutingModule */

    /***/
    function srcAppEditionEditionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditionPageRoutingModule", function () {
        return EditionPageRoutingModule;
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


      var _edition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edition.page */
      "./src/app/edition/edition.page.ts");

      var routes = [{
        path: '',
        component: _edition_page__WEBPACK_IMPORTED_MODULE_3__["EditionPage"]
      }];

      var EditionPageRoutingModule = function EditionPageRoutingModule() {
        _classCallCheck(this, EditionPageRoutingModule);
      };

      EditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/edition/edition.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/edition/edition.module.ts ***!
      \*******************************************/

    /*! exports provided: EditionPageModule */

    /***/
    function srcAppEditionEditionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditionPageModule", function () {
        return EditionPageModule;
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


      var _edition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edition-routing.module */
      "./src/app/edition/edition-routing.module.ts");
      /* harmony import */


      var _edition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edition.page */
      "./src/app/edition/edition.page.ts");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/components.module */
      "./src/app/components/components.module.ts");

      var EditionPageModule = function EditionPageModule() {
        _classCallCheck(this, EditionPageModule);
      };

      EditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edition_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditionPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_edition_page__WEBPACK_IMPORTED_MODULE_6__["EditionPage"]]
      })], EditionPageModule);
      /***/
    },

    /***/
    "./src/app/edition/edition.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/edition/edition.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditionEditionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRpb24vZWRpdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/edition/edition.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/edition/edition.page.ts ***!
      \*****************************************/

    /*! exports provided: EditionPage */

    /***/
    function srcAppEditionEditionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditionPage", function () {
        return EditionPage;
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

      var EditionPage = /*#__PURE__*/function () {
        function EditionPage(http, navCtrl, route, router, changeRef) {
          _classCallCheck(this, EditionPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.changeRef = changeRef;
          this.id = this.route.snapshot.params.id;
          this.type = this.route.snapshot.params.type;
          this.getEdition(); //this.getIsEditionOwned();
        }

        _createClass(EditionPage, [{
          key: "getEdition",
          value: function getEdition() {
            var _this = this;

            this.http.getEdition(this.id, this.type).subscribe(function (res) {
              _this.edicion = res;
              console.log(res);
              console.log("id: " + _this.id + ", type: " + _this.type);
              console.log("edicion: " + _this.edicion);
              _this.typeName = _this.http.getItemTypeName(_this.type);
              _this.typeIcon = _this.http.getItemTypeIcon(_this.edicion['ItemType']);
              _this.itemID = _this.edicion['ItemID'];
              _this.itemName = _this.edicion['ItemName'];
              _this.people = _this.edicion['People'];
              _this.seriesID = _this.edicion['SeriesID'];
              _this.seriesName = _this.edicion['SeriesName'];
              _this.genreID1 = _this.edicion['GenreID1'];
              _this.genreName1 = _this.edicion['GenreName1'];
              _this.genreID2 = _this.edicion['GenreID2'];
              _this.genreName2 = _this.edicion['GenreName2'];
              _this.genreID3 = _this.edicion['GenreID3'];
              _this.genreName3 = _this.edicion['GenreName3'];
            }, function (error) {
              console.error(error);
            });
          }
          /*getIsEditionOwned() {
            this.http.getEditionOwned(this.id).subscribe(
              (res) => {
                this.isOwned = res['body'][0]['IsOwned'];
                console.log("isOwned:",this.isOwned);
              },
              (error) =>{
                console.error(error);
              }
            )
          }*/

        }, {
          key: "goToEdit",
          value: function goToEdit() {
            console.log("/edit-" + this.type + "/" + this.id);
            this.navCtrl.navigateForward("/edit-" + this.type + "/" + this.id);
          }
        }, {
          key: "goToItem",
          value: function goToItem() {
            this.navCtrl.navigateForward("/item/" + this.type + "/" + this.itemID);
          }
        }, {
          key: "addPerson",
          value: function addPerson() {
            console.log("Añadir persona");
            this.navCtrl.navigateForward("/add-person/" + this.type + "/" + this.itemID);
          }
        }, {
          key: "removePerson",
          value: function removePerson(person, role) {
            var _this2 = this;

            console.log("Borrar persona ", person);
            this.http.removePersonToItem(person, this.itemID, role).subscribe(function (data) {
              _this2.http.presentToast(data['body']['Message']);

              if (data.status == 200) {
                _this2.people = [];

                _this2.getEdition();

                _this2.changeRef.detectChanges();
              }
            }, function (error) {
              console.log(error);
              return error;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditionPage;
      }();

      EditionPage.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      EditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edition.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edition/edition.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edition.page.scss */
        "./src/app/edition/edition.page.scss"))["default"]]
      })], EditionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edition-edition-module-es5.js.map