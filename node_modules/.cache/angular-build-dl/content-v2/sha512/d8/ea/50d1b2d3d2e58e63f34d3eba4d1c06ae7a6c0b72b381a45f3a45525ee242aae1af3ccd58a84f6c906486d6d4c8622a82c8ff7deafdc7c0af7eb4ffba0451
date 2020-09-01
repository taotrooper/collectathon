(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-comic-edit-comic-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-comic/edit-comic.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-comic/edit-comic.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditComicEditComicPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/edition/book/{{id}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar edición cómic</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"comic\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" [value]=\"comic.Year\" formControlName=\"Year\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">EAN13</ion-label>\n        <ion-input placeholder=\"Ejemplo: 8491234567890\" [value]=\"comic.EAN13\" formControlName=\"EAN13\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">ISBN</ion-label>\n        <ion-input placeholder=\"Ejemplo: 9781234567890\" [value]=\"comic.ISBNComic\" formControlName=\"ISBNComic\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Tipo de edición</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"TipoComic\" type=\"text\" value=\"{{comic.TipoComic}}\">\n          <ion-select-option *ngFor=\"let t of TipoLista\" [value]=\"t\">{{t}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Formato</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"FormatoComic\" type=\"text\" value=\"{{comic.FormatoComic}}\">\n          <ion-select-option *ngFor=\"let f of FormatoLista\" [value]=\"f\">{{f}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Número de grapa/tomo</ion-label>\n        <ion-input placeholder=\"Ejemplo: 1\" [value]=\"comic.NroComic\" formControlName=\"NroComic\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Editorial</ion-label>\n        <ion-input placeholder=\"Ejemplo: Panini Comics\" [value]=\"comic.EditorialComic\" \n        formControlName=\"EditorialComic\" type=\"text\">\n        </ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Origen</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Origen\" type=\"text\" value=\"{{comic.Origen}}\">\n          <ion-select-option *ngFor=\"let o of OrigenLista\" [value]=\"o\">{{o}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Idioma</ion-label>\n        <ion-input placeholder=\"Ejemplo: Español\" [value]=\"comic.IdiomaComic\" \n        formControlName=\"IdiomaComic\" type=\"text\">\n        </ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/edit-comic/edit-comic-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/edit-comic/edit-comic-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: EditComicPageRoutingModule */

    /***/
    function srcAppEditComicEditComicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComicPageRoutingModule", function () {
        return EditComicPageRoutingModule;
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


      var _edit_comic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-comic.page */
      "./src/app/edit-comic/edit-comic.page.ts");

      var routes = [{
        path: '',
        component: _edit_comic_page__WEBPACK_IMPORTED_MODULE_3__["EditComicPage"]
      }];

      var EditComicPageRoutingModule = function EditComicPageRoutingModule() {
        _classCallCheck(this, EditComicPageRoutingModule);
      };

      EditComicPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditComicPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/edit-comic/edit-comic.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/edit-comic/edit-comic.module.ts ***!
      \*************************************************/

    /*! exports provided: EditComicPageModule */

    /***/
    function srcAppEditComicEditComicModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComicPageModule", function () {
        return EditComicPageModule;
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


      var _edit_comic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-comic-routing.module */
      "./src/app/edit-comic/edit-comic-routing.module.ts");
      /* harmony import */


      var _edit_comic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-comic.page */
      "./src/app/edit-comic/edit-comic.page.ts");

      var EditComicPageModule = function EditComicPageModule() {
        _classCallCheck(this, EditComicPageModule);
      };

      EditComicPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_comic_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditComicPageRoutingModule"]],
        declarations: [_edit_comic_page__WEBPACK_IMPORTED_MODULE_6__["EditComicPage"]]
      })], EditComicPageModule);
      /***/
    },

    /***/
    "./src/app/edit-comic/edit-comic.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/edit-comic/edit-comic.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditComicEditComicPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY29taWMvZWRpdC1jb21pYy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/edit-comic/edit-comic.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/edit-comic/edit-comic.page.ts ***!
      \***********************************************/

    /*! exports provided: EditComicPage */

    /***/
    function srcAppEditComicEditComicPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComicPage", function () {
        return EditComicPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var EditComicPage = /*#__PURE__*/function () {
        function EditComicPage(http, navCtrl, modalController, route, router, formBuilder) {
          _classCallCheck(this, EditComicPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.TipoLista = ['Grapas', 'Tomo', 'Omnibus'];
          this.FormatoLista = ['Físico', 'Digital'];
          this.OrigenLista = ['Norteamericano', 'Europeo', 'Manga', 'Otros'];
          this.comic = null;
          this.isSubmitted = false;
          this.id = this.route.snapshot.params.id;
          this.comic = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            ISBNComic: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            TipoComic: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            FormatoComic: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroComic: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EditorialComic: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Origen: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            IdiomaComic: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
          this.getComic();
          console.log("comic", this.comic);
        }

        _createClass(EditComicPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getComic",
          value: function getComic() {
            var _this = this;

            this.http.getEdition(this.id, "comic").subscribe(function (res) {
              _this.item = res['ItemID'];
              _this.comic = _this.formBuilder.group({
                'Year': [res['Year']],
                'EAN13': [res['EAN13']],
                'EditionID': [res['EditionID']],
                'ISBNComic': [res['ISBNComic']],
                'TipoComic': [res['TipoComic']],
                'FormatoComic': [res['FormatoComic']],
                'NroComic': [res['NroComic']],
                'EditorialComic': [res['EditorialComic']],
                'Origen': [res['Origen']],
                'IdiomaComic': [res['IdiomaComic']]
              });
              console.log("res: ", res);
              console.log("comic: ", _this.comic);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.comic.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.comic.value);
              var res = this.http.updateEdition(this.comic.value, this.id, "comic");
              console.log("Resultado: ", res);
              this.navCtrl.navigateForward("/item/comic/" + this.item);
            }
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.comic.controls;
          }
        }]);

        return EditComicPage;
      }();

      EditComicPage.ctorParameters = function () {
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
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      EditComicPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-comic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-comic.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-comic/edit-comic.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-comic.page.scss */
        "./src/app/edit-comic/edit-comic.page.scss"))["default"]]
      })], EditComicPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-comic-edit-comic-module-es5.js.map