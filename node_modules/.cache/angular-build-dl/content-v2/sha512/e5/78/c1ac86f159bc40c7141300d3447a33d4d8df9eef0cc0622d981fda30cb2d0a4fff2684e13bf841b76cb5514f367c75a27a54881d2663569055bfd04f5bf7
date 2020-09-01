(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-game-create-game-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/create-game/create-game.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-game/create-game.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCreateGameCreateGamePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Crear edición juego</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newedition\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" [value]=\"newedition.Year\" formControlName=\"Year\" \n        type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">EAN13</ion-label>\n        <ion-input placeholder=\"Ejemplo: 8491234567890\" formControlName=\"EAN13\" type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Plataforma o consola</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"Plataforma\" type=\"text\" value=\"{{newedition.Plataforma}}\">\n          <ion-select-option *ngFor=\"let p of PlataformaLista\" [value]=\"p\">{{p}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Formato de juego</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"FormatoJuego\" type=\"text\" value=\"{{newedition.FormatoJuego}}\">\n          <ion-select-option *ngFor=\"let f of FormatoLista\" [value]=\"f\">{{f}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Región</ion-label>\n        <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n        formControlName=\"RegionJuego\" type=\"text\" value=\"{{newedition.RegionJuego}}\">\n          <ion-select-option *ngFor=\"let r of RegionLista\" [value]=\"r\">{{r}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Distribuidora</ion-label>\n        <ion-input placeholder=\"Ejemplo: CAPCOM\" [value]=\"newedition.Distribuidora\" formControlName=\"Distribuidora\" \n        type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Estudio</ion-label>\n        <ion-input placeholder=\"Ejemplo: Santa Monica Studio\" [value]=\"newedition.Estudio\" formControlName=\"Estudio\" \n        type=\"text\"></ion-input>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Notas de la edición (remasterizado, ed. especial, etc.)</ion-label>\n        <ion-input placeholder=\"Ejemplo: Edición coleccionista\" [value]=\"newedition.NotasEdJuego\" \n        formControlName=\"NotasEdJuego\" \n        type=\"text\"></ion-input>\n      </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/create-game/create-game-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/create-game/create-game-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CreateGamePageRoutingModule */

    /***/
    function srcAppCreateGameCreateGameRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGamePageRoutingModule", function () {
        return CreateGamePageRoutingModule;
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


      var _create_game_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-game.page */
      "./src/app/create-game/create-game.page.ts");

      var routes = [{
        path: '',
        component: _create_game_page__WEBPACK_IMPORTED_MODULE_3__["CreateGamePage"]
      }];

      var CreateGamePageRoutingModule = function CreateGamePageRoutingModule() {
        _classCallCheck(this, CreateGamePageRoutingModule);
      };

      CreateGamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateGamePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/create-game/create-game.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/create-game/create-game.module.ts ***!
      \***************************************************/

    /*! exports provided: CreateGamePageModule */

    /***/
    function srcAppCreateGameCreateGameModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGamePageModule", function () {
        return CreateGamePageModule;
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


      var _create_game_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-game-routing.module */
      "./src/app/create-game/create-game-routing.module.ts");
      /* harmony import */


      var _create_game_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-game.page */
      "./src/app/create-game/create-game.page.ts");

      var CreateGamePageModule = function CreateGamePageModule() {
        _classCallCheck(this, CreateGamePageModule);
      };

      CreateGamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _create_game_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateGamePageRoutingModule"]],
        declarations: [_create_game_page__WEBPACK_IMPORTED_MODULE_6__["CreateGamePage"]]
      })], CreateGamePageModule);
      /***/
    },

    /***/
    "./src/app/create-game/create-game.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/create-game/create-game.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCreateGameCreateGamePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1nYW1lL2NyZWF0ZS1nYW1lLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/create-game/create-game.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/create-game/create-game.page.ts ***!
      \*************************************************/

    /*! exports provided: CreateGamePage */

    /***/
    function srcAppCreateGameCreateGamePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGamePage", function () {
        return CreateGamePage;
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

      var CreateGamePage = /*#__PURE__*/function () {
        function CreateGamePage(http, navCtrl, modalController, route, router, formBuilder) {
          _classCallCheck(this, CreateGamePage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.FormatoLista = ['Físico', 'Digital'];
          this.PlataformaLista = ['Android', 'Arcade', 'Atari', 'Game & Watch', 'Game Boy (GB)', 'Game Boy Advance (GBA)', 'Game Boy Color (GBC)', 'Game Gear', 'Google Stadia', 'iOS', 'Nintendo 3DS', 'Nintendo 64 (N64)', 'Nintendo DS (NDS)', 'Nintendo Entertainment System (NES)', 'Nintendo GameCube (NGC)', 'Nintendo Switch', 'PC', 'PlayStation (PSX)', 'PlayStation 2 (PS2)', 'PlayStation 3 (PS3)', 'PlayStation 4 (PS4)', 'PlayStation 5 (PS5)', 'PlayStation Portable (PSP)', 'PlayStation Vita', 'Sega Dreamcast', 'Sega Genesis', 'Sega Mega Drive', 'Sega Saturn', 'Super Nintendo Entertainment System (SNES)', 'Wii', 'Wii U', 'Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X'];
          this.RegionLista = ['Sin región', 'NTSC-U/C', 'PAL', 'NTSC-J', 'Otra'];
          this.newedition = null;
          this.isSubmitted = false;
          this.item = this.route.snapshot.params.item;
          this.newedition = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Plataforma: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            FormatoJuego: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            RegionJuego: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Distribuidora: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Estudio: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NotasEdJuego: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
          console.log(this.item);
        }

        _createClass(CreateGamePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.newedition = this.formBuilder.group({
              'Year': [null],
              'EAN13': [null],
              'Plataforma': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              'FormatoJuego': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              'RegionJuego': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              'Distribuidora': [null],
              'Estudio': [null],
              'NotasEdJuego': [null]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this = this;

            this.isSubmitted = true;

            if (!this.newedition.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.newedition.value);
              this.http.createEdition(4, this.item, this.newedition.value).subscribe(function (data) {
                console.log("data body: ", data['body']['EditionID']);
                _this.editionID = data['body']['EditionID'];
                console.log("Edición ID:", _this.editionID);

                _this.navCtrl.navigateForward("/edition/game/" + _this.editionID);
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "compareFn",
          value: function compareFn(e1, e2) {
            return e1 && e2 ? e1.id === e2.id : e1 === e2;
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.newedition.controls;
          }
        }]);

        return CreateGamePage;
      }();

      CreateGamePage.ctorParameters = function () {
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

      CreateGamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-game.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/create-game/create-game.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-game.page.scss */
        "./src/app/create-game/create-game.page.scss"))["default"]]
      })], CreateGamePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-game-create-game-module-es5.js.map