(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-video-edit-video-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-video/edit-video.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-video/edit-video.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditVideoEditVideoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/edition/video/{{id}}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Editar edición vídeo</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"video\" (ngSubmit)=\"submitForm()\" novalidate>\n   <ion-list>\n    <ion-item lines=\"full\">\n        <ion-label position=\"stacked\">Año de edición</ion-label>\n        <ion-input placeholder=\"Ejemplo: 2020\" [value]=\"video.Year\" formControlName=\"Year\" \n        type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">EAN13</ion-label>\n      <ion-input placeholder=\"Ejemplo: 8491234567890\" [value]=\"video.EAN13\" formControlName=\"EAN13\" type=\"text\">\n      </ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Formato de vídeo</ion-label>\n      <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n      formControlName=\"FormatoVideo\" type=\"text\" value=\"{{video.FormatoVideo}}\" (ionChange)=\"getRegions()\">\n        <ion-select-option *ngFor=\"let f of FormatoLista\" [value]=\"f\">{{f}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Tipo de vídeo</ion-label>\n      <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n      formControlName=\"TipoVideo\" type=\"text\" value=\"{{video.TipoVideo}}\">\n        <ion-select-option *ngFor=\"let t of TipoLista\" [value]=\"t\">{{t}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Sistema de codificación</ion-label>\n      <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n      formControlName=\"Sistema\" type=\"text\" value=\"{{video.Sistema}}\">\n        <ion-select-option *ngFor=\"let s of SistemaLista\" [value]=\"s\">{{s}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Número de discos</ion-label>\n      <ion-input placeholder=\"Ejemplo: 1\" [value]=\"video.NroDiscosVideo\" formControlName=\"NroDiscosVideo\" \n      type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Región (si aplica)</ion-label>\n      <ion-select okText=\"Aceptar\" cancelText=\"Cancelar\" interface=\"alert\" placeholder=\"Seleccionar\" \n      formControlName=\"RegionVideo\" type=\"text\" value=\"{{video.RegionVideo}}\">\n        <ion-select-option value=\"null\">Ninguno</ion-select-option>\n        <ion-select-option *ngFor=\"let r of RegionLista\" \n        [value]=\"r\">{{r}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"video.value['TipoVideo']==='Serie'\">\n      <ion-label position=\"stacked\">Temporada (si aplica)</ion-label>\n      <ion-input placeholder=\"Ejemplo: 1\" [value]=\"video.Temporada\" formControlName=\"Temporada\" \n      type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"video.value['TipoVideo']!=='Película'\">\n      <ion-label position=\"stacked\">Volumen (si aplica)</ion-label>\n      <ion-input placeholder=\"Ejemplo: 1\" [value]=\"video.VolumenVideo\" formControlName=\"VolumenVideo\" \n      type=\"number\"></ion-input>\n    </ion-item>\n    <ion-item lines=\"full\" *ngIf=\"video.value['TipoVideo']==='Serie'\">\n      <ion-label position=\"stacked\">Número de episodios (si aplica)</ion-label>\n      <ion-input placeholder=\"Ejemplo: 10\" [value]=\"video.NroEpisodios\" formControlName=\"NroEpisodios\" \n      type=\"number\"></ion-input>\n    </ion-item>\n    </ion-list>\n    <ion-button expand=\"block\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/edit-video/edit-video-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/edit-video/edit-video-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: EditVideoPageRoutingModule */

    /***/
    function srcAppEditVideoEditVideoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditVideoPageRoutingModule", function () {
        return EditVideoPageRoutingModule;
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


      var _edit_video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./edit-video.page */
      "./src/app/edit-video/edit-video.page.ts");

      var routes = [{
        path: '',
        component: _edit_video_page__WEBPACK_IMPORTED_MODULE_3__["EditVideoPage"]
      }];

      var EditVideoPageRoutingModule = function EditVideoPageRoutingModule() {
        _classCallCheck(this, EditVideoPageRoutingModule);
      };

      EditVideoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditVideoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/edit-video/edit-video.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/edit-video/edit-video.module.ts ***!
      \*************************************************/

    /*! exports provided: EditVideoPageModule */

    /***/
    function srcAppEditVideoEditVideoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditVideoPageModule", function () {
        return EditVideoPageModule;
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


      var _edit_video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./edit-video-routing.module */
      "./src/app/edit-video/edit-video-routing.module.ts");
      /* harmony import */


      var _edit_video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-video.page */
      "./src/app/edit-video/edit-video.page.ts");

      var EditVideoPageModule = function EditVideoPageModule() {
        _classCallCheck(this, EditVideoPageModule);
      };

      EditVideoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_video_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditVideoPageRoutingModule"]],
        declarations: [_edit_video_page__WEBPACK_IMPORTED_MODULE_6__["EditVideoPage"]]
      })], EditVideoPageModule);
      /***/
    },

    /***/
    "./src/app/edit-video/edit-video.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/edit-video/edit-video.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditVideoEditVideoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtdmlkZW8vZWRpdC12aWRlby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/edit-video/edit-video.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/edit-video/edit-video.page.ts ***!
      \***********************************************/

    /*! exports provided: EditVideoPage */

    /***/
    function srcAppEditVideoEditVideoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditVideoPage", function () {
        return EditVideoPage;
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

      var EditVideoPage = /*#__PURE__*/function () {
        function EditVideoPage(http, navCtrl, modalController, route, router, formBuilder) {
          _classCallCheck(this, EditVideoPage);

          this.http = http;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.FormatoLista = ['VHS', 'DVD', 'Blu-ray', 'Blu-ray 3D', 'Digital'];
          this.TipoLista = ['Película', 'Serie', 'Cortometraje', 'Documental', 'Concierto', 'Teatro', 'Otra Actuación', 'Curso'];
          this.SistemaLista = ['PAL', 'NTSC', 'SECAM', 'N/A'];
          this.RegionLista = [];
          this.video = null;
          this.isSubmitted = false;
          this.id = this.route.snapshot.params.id;
          this.video = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            Year: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            EAN13: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            FormatoVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            TipoVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Sistema: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroDiscosVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            RegionVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Temporada: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            VolumenVideo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            NroEpisodios: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
          this.getVideo();
          console.log("video", this.video);
        }

        _createClass(EditVideoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getVideo",
          value: function getVideo() {
            var _this = this;

            this.http.getEdition(this.id, "video").subscribe(function (res) {
              _this.item = res['ItemID'];
              _this.video = _this.formBuilder.group({
                'Year': [res['Year']],
                'EAN13': [res['EAN13']],
                'EditionID': [res['EditionID']],
                'FormatoVideo': [res['FormatoVideo']],
                'TipoVideo': [res['TipoVideo']],
                'Sistema': [res['Sistema']],
                'NroDiscosVideo': [res['NroDiscosVideo']],
                'RegionVideo': [res['RegionVideo']],
                'Temporada': [res['Temporada']],
                'VolumenVideo': [res['VolumenVideo']],
                'NroEpisodios': [res['NroEpisodios']]
              });

              _this.getRegions();

              console.log("res: ", res);
              console.log("video: ", _this.video);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getRegions",
          value: function getRegions() {
            this.RegionLista = [];

            if (this.video.value['FormatoVideo'] === "DVD") {
              this.RegionLista = ['DVD-0', 'DVD-1', 'DVD-2', 'DVD-3', 'DVD-4', 'DVD-5', 'DVD-6'];
            } else if (this.video.value['FormatoVideo'] === 'Blu-ray' || this.video.value['FormatoVideo'] === 'Blu-ray 3D') {
              this.RegionLista = ['A/1', 'B/2', 'C/3', 'ABC'];
            }
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;

            if (!this.video.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.video.value);
              var res = this.http.updateEdition(this.video.value, this.id, "video");
              console.log("Resultado: ", res);
              this.navCtrl.navigateForward("/item/video/" + this.item);
            }
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.video.controls;
          }
        }]);

        return EditVideoPage;
      }();

      EditVideoPage.ctorParameters = function () {
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

      EditVideoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-video.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-video/edit-video.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-video.page.scss */
        "./src/app/edit-video/edit-video.page.scss"))["default"]]
      })], EditVideoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=edit-video-edit-video-module-es5.js.map