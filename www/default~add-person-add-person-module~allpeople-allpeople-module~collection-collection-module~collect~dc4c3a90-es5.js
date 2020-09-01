(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-person-add-person-module~allpeople-allpeople-module~collection-collection-module~collect~dc4c3a90"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-book/detail-book.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-book/detail-book.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDetailBookDetailBookComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"ISBN\"><strong>ISBN:</strong> {{ISBN}}<br /></span>\n<span *ngIf=\"NroPaginas\"><strong>Nº páginas:</strong> {{NroPaginas}}<br /></span>\n<span *ngIf=\"Editorial\"><strong>Editorial:</strong> {{Editorial}}<br /></span>\n<span *ngIf=\"Edicion > 0\"><strong>Edición:</strong> {{Edicion}}ª<br /></span>\n<span *ngIf=\"Idioma\"><strong>Idioma:</strong> {{Idioma}}<br /></span>\n<span *ngIf=\"Tipo\"><strong>Tipo:</strong> {{Tipo}}<br /></span>\n\n<ion-button *ngIf=\"!isOwned\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-comic/detail-comic.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-comic/detail-comic.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDetailComicDetailComicComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"ISBNComic\"><strong>ISBN:</strong> {{ISBNComic}}<br /></span>\n<span *ngIf=\"TipoComic\"><strong>Tipo:</strong> {{TipoComic}}<br /></span>\n<span *ngIf=\"FormatoComic\"><strong>Formato:</strong> {{FormatoComic}}<br /></span>\n<span *ngIf=\"NroComic\">\n  <strong *ngIf=\"TipoComic==='Grapas'\">Nº:</strong>\n  <strong *ngIf=\"TipoComic!=='Grapas'\">Tomo:</strong>\n   {{NroComic}}<br />\n</span>\n<span *ngIf=\"EditorialComic\"><strong>Editorial:</strong> {{EditorialComic}}<br /></span>\n<span *ngIf=\"Origen\"><strong>Origen:</strong> {{Origen}}<br /></span>\n<span *ngIf=\"IdiomaComic\"><strong>Idioma:</strong> {{IdiomaComic}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-game/detail-game.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-game/detail-game.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDetailGameDetailGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"Plataforma\"><strong>Plataforma:</strong> {{Plataforma}}<br /></span>\n<span *ngIf=\"FormatoJuego\"><strong>Formato:</strong> {{FormatoJuego}}<br /></span>\n<span *ngIf=\"RegionJuego\"><strong>Región:</strong> {{RegionJuego}}<br /></span>\n<span *ngIf=\"Distribuidora\"><strong>Distribuidora:</strong> {{Distribuidora}}<br /></span>\n<span *ngIf=\"Estudio\"><strong>Estudio:</strong> {{Estudio}}<br /></span>\n<span *ngIf=\"NotasEdJuego\"><strong>Notas Edición:</strong> {{NotasEdJuego}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-music/detail-music.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-music/detail-music.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDetailMusicDetailMusicComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"Formato\"><strong>Formato:</strong> {{Formato}}<br /></span>\n<span *ngIf=\"NroPistas > 0\"><strong>Nº pistas:</strong> {{NroPistas}}<br /></span>\n<span *ngIf=\"NroDiscos > 0\"><strong>Nº discos:</strong> {{NroDiscos}}<br /></span>\n<span *ngIf=\"Sello\"><strong>Sello:</strong> {{Sello}}<br /></span>\n<span *ngIf=\"NotasVersion\"><strong>Notas Versión:</strong> {{NotasVersion}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-video/detail-video.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-video/detail-video.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsDetailVideoDetailVideoComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"FormatoVideo\"><strong>Formato:</strong> {{FormatoVideo}}<br /></span>\n<span *ngIf=\"TipoVideo\"><strong>Tipo de Vídeo:</strong> {{TipoVideo}}<br /></span>\n<span *ngIf=\"Sistema\"><strong>Sistema:</strong> {{Sistema}}<br /></span>\n<span *ngIf=\"NroDiscosVideo > 0\"><strong>Nº Discos:</strong> {{NroDiscosVideo}}<br /></span>\n<span *ngIf=\"RegionVideo\"><strong>Región:</strong> {{RegionVideo}}<br /></span>\n<span *ngIf=\"Temporada > 0\"><strong>Temporada:</strong> {{Temporada}}<br /></span>\n<span *ngIf=\"VolumenVideo > 0\"><strong>Volumen:</strong> {{VolumenVideo}}<br /></span>\n<span *ngIf=\"NroEpisodios > 0\"><strong>Nº Epìsodios:</strong> {{NroEpisodios}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edition-list/edition-list.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edition-list/edition-list.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsEditionListEditionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-item detail (click)=\"goToEdition(ed.EditionID, ed.ItemType)\">\n  <ion-avatar slot=\"end\">\n    <img src=\"{{thumburl}}\" *ngIf=\"thumburl\" style=\"border: 3px solid #c3c3c3;\" />\n  </ion-avatar>\n  <ion-icon top name={{http.getItemTypeIcon(ed.ItemType)}}></ion-icon>\n  <ion-icon *ngIf=\"ed.IsOwned==1\" name=\"checkmark-circle-outline\"></ion-icon>\n  <ion-icon *ngIf=\"ed.IsOwned==0\" name=\"heart-circle-outline\"></ion-icon>\n  <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\"><h2>{{ ed.ItemName }}</h2>\n    <small>{{ ed.Summary }}</small>\n  </ion-label>\n</ion-item>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-edition/image-edition.component.html":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-edition/image-edition.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsImageEditionImageEditionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div style=\"float: right; vertical-align: top; margin-right: 10px;\">\n  <a href=\"{{imageurl}}\" *ngIf=\"imageurl\">\n    <ion-thumbnail slot=\"end\">\n      <img style=\"border: 1px solid #c3c3c3; padding: 2px;\" \n      src=\"{{thumburl}}\" />\n    </ion-thumbnail>\n  </a>\n  <ion-thumbnail slot=\"end\" *ngIf=\"!imageurl\">\n    <img style=\"border: 1px solid #c3c3c3; padding: 2px;\" src=\"{{thumburl}}\" />\n  </ion-thumbnail>\n  <ion-button (click)=\"selectImage()\" *ngIf=\"isCreator\">\n    <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n  </ion-button>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/persona/persona.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/persona/persona.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPersonaPersonaComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<strong *ngIf=\"Role\">{{Role}}: </strong> <span *ngIf=\"LastNames\">{{LastNames}}</span>\n<span *ngIf=\"LastNames && Names\">, </span><span *ngIf=\"Names\">{{Names}}</span>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/present-action-sheet/present-action-sheet.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/present-action-sheet/present-action-sheet.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsPresentActionSheetPresentActionSheetComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "    <ion-icon name=\"add\" (click)=\"presentActionSheet()\"></ion-icon>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-list/website-list.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-list/website-list.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsWebsiteListWebsiteListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-chip *ngFor=\"let w of webs\">\n  <ion-icon [name]=\"getIcon(w.URL)\"></ion-icon>\n  <ion-label>\n    <a href=\"{{w.URL}}\" class=\"chiplink\">{{w.Text}}</a>\n  </ion-label>\n  <div *ngIf=\"w.CreatorUserID==user\">\n    <ion-icon name=\"pencil\" (click)=\"goToEditWebsite(w.WebsiteID)\"></ion-icon>\n    <ion-icon name=\"close\" (click)=\"deleteWebsite(w.WebsiteID)\"></ion-icon>\n  </div>\n</ion-chip>\n<ion-chip (click)=\"goToNewWebsite()\">\n  <ion-icon name=\"add\"></ion-icon><ion-label>web</ion-label>\n</ion-chip>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCreateWebsiteCreateWebsitePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Crear página web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newweb\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>URL/Dirección</ion-label>\n        <ion-input placeholder=\"http://www.ejemplo.com/pagina\" formControlName=\"URL\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.URL.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>Texto del enlace</ion-label>\n        <ion-input placeholder=\"Ejemplo: Amazon, Wikipedia, IMDB, etc.\" formControlName=\"Text\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Text.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" (click)=\"closeModal()\">Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditWebsiteEditWebsitePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Editar página web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"web\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>URL/Dirección</ion-label>\n        <ion-input placeholder=\"http://www.ejemplo.com/pagina\" formControlName=\"URL\" type=\"url\" \n        [value]=\"web.URL\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.URL.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>Texto del enlace</ion-label>\n        <ion-input placeholder=\"Ejemplo: Amazon, Wikipedia, IMDB, etc.\" formControlName=\"Text\" \n        [value]=\"web.Text\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Text.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" (click)=\"closeModal()\">Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/components.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: ComponentsModule */

    /***/
    function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
        return ComponentsModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _edition_list_edition_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edition-list/edition-list.component */
      "./src/app/components/edition-list/edition-list.component.ts");
      /* harmony import */


      var _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./persona/persona.component */
      "./src/app/components/persona/persona.component.ts");
      /* harmony import */


      var _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail-book/detail-book.component */
      "./src/app/components/detail-book/detail-book.component.ts");
      /* harmony import */


      var _detail_music_detail_music_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./detail-music/detail-music.component */
      "./src/app/components/detail-music/detail-music.component.ts");
      /* harmony import */


      var _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./detail-video/detail-video.component */
      "./src/app/components/detail-video/detail-video.component.ts");
      /* harmony import */


      var _detail_game_detail_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./detail-game/detail-game.component */
      "./src/app/components/detail-game/detail-game.component.ts");
      /* harmony import */


      var _detail_comic_detail_comic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./detail-comic/detail-comic.component */
      "./src/app/components/detail-comic/detail-comic.component.ts");
      /* harmony import */


      var _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./website-list/website-list.component */
      "./src/app/components/website-list/website-list.component.ts");
      /* harmony import */


      var _present_action_sheet_present_action_sheet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./present-action-sheet/present-action-sheet.component */
      "./src/app/components/present-action-sheet/present-action-sheet.component.ts");
      /* harmony import */


      var _image_edition_image_edition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./image-edition/image-edition.component */
      "./src/app/components/image-edition/image-edition.component.ts");

      var ComponentsModule = function ComponentsModule() {
        _classCallCheck(this, ComponentsModule);
      };

      ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_edition_list_edition_list_component__WEBPACK_IMPORTED_MODULE_4__["EditionListComponent"], _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__["PersonaComponent"], _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailBookComponent"], _detail_music_detail_music_component__WEBPACK_IMPORTED_MODULE_7__["DetailMusicComponent"], _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_8__["DetailVideoComponent"], _detail_game_detail_game_component__WEBPACK_IMPORTED_MODULE_9__["DetailGameComponent"], _detail_comic_detail_comic_component__WEBPACK_IMPORTED_MODULE_10__["DetailComicComponent"], _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteListComponent"], _image_edition_image_edition_component__WEBPACK_IMPORTED_MODULE_13__["ImageEditionComponent"], _present_action_sheet_present_action_sheet_component__WEBPACK_IMPORTED_MODULE_12__["PresentActionSheetComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
        exports: [_edition_list_edition_list_component__WEBPACK_IMPORTED_MODULE_4__["EditionListComponent"], _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__["PersonaComponent"], _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailBookComponent"], _detail_music_detail_music_component__WEBPACK_IMPORTED_MODULE_7__["DetailMusicComponent"], _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_8__["DetailVideoComponent"], _detail_game_detail_game_component__WEBPACK_IMPORTED_MODULE_9__["DetailGameComponent"], _detail_comic_detail_comic_component__WEBPACK_IMPORTED_MODULE_10__["DetailComicComponent"], _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteListComponent"], _image_edition_image_edition_component__WEBPACK_IMPORTED_MODULE_13__["ImageEditionComponent"], _present_action_sheet_present_action_sheet_component__WEBPACK_IMPORTED_MODULE_12__["PresentActionSheetComponent"]]
      })], ComponentsModule);
      /***/
    },

    /***/
    "./src/app/components/detail-book/detail-book.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/detail-book/detail-book.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsDetailBookDetailBookComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLWJvb2svZGV0YWlsLWJvb2suY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/detail-book/detail-book.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/detail-book/detail-book.component.ts ***!
      \*****************************************************************/

    /*! exports provided: DetailBookComponent */

    /***/
    function srcAppComponentsDetailBookDetailBookComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailBookComponent", function () {
        return DetailBookComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");

      var DetailBookComponent = /*#__PURE__*/function () {
        function DetailBookComponent(http, navCtrl, alertCtrl, changeRef) {
          _classCallCheck(this, DetailBookComponent);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.changeRef = changeRef;
        }

        _createClass(DetailBookComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("book: ", this.id);
            this.getEdition();
            this.getIsEditionOwned();
            this.user = this.http.getUserID();
            console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
          }
        }, {
          key: "getEdition",
          value: function getEdition() {
            var _this = this;

            this.http.getEdition(this.id, "book").subscribe(function (res) {
              console.log("detalles: ", res);
              _this.ItemID = res['ItemID'];
              _this.Year = res['Year'];
              _this.EAN13 = res['EAN13'];
              _this.ISBN = res['ISBN'];
              _this.NroPaginas = res['NroPaginas'];
              _this.Editorial = res['Editorial'];
              _this.Edicion = res['Edicion'];
              _this.Idioma = res['Idioma'];
              _this.Tipo = res['Tipo'];
              _this.CreatorUserID = res['CreatorUserID'];
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getIsEditionOwned",
          value: function getIsEditionOwned() {
            var _this2 = this;

            this.http.getEditionOwned(this.id).subscribe(function (res) {
              if (res['body']) {
                _this2.isOwned = 1;
              } else _this2.isOwned = null;

              console.log("isOwned:", _this2.isOwned);
            }, function (error) {
              console.error(error);
              _this2.isOwned = null;
            });
            console.log("isOwned:", this.isOwned);
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.navCtrl.navigateForward("/edit-book/" + this.id);
          }
        }, {
          key: "addEditionToUser",
          value: function addEditionToUser() {
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
                        message: '¿Tienes esta edición?',
                        buttons: [{
                          text: 'Lo tengo',
                          handler: function handler() {
                            console.log(_this3.isOwned);

                            _this3.http.addEditionToUser(_this3.id, "book", 1);

                            _this3.getIsEditionOwned();

                            console.log(_this3.isOwned);

                            _this3.changeRef.detectChanges();
                          }
                        }, {
                          text: 'Añadir a lista de deseos',
                          handler: function handler() {
                            _this3.http.addEditionToUser(_this3.id, "book", 0);

                            _this3.getIsEditionOwned();

                            _this3.changeRef.detectChanges();
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
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
                      this.navCtrl.navigateForward("/edition/book/" + this.id);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "removeEditionFromUser",
          value: function removeEditionFromUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
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

                            _this4.http.removeEditionFromUser(_this4.id).subscribe(function (data) {
                              _this4.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this4.getIsEditionOwned();

                                _this4.changeRef.detectChanges();
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
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/book/" + this.id);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteEdition",
          value: function deleteEdition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Seguro que deseas eliminar permanentemente la edición?',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this5.http.deleteEdition(_this5.id, "book").subscribe(function (data) {
                              _this5.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this5.navCtrl.navigateForward("/item/book/" + _this5.ItemID);
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
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
        }]);

        return DetailBookComponent;
      }();

      DetailBookComponent.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      };

      DetailBookComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }]
      };
      DetailBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-book',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail-book.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-book/detail-book.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail-book.component.scss */
        "./src/app/components/detail-book/detail-book.component.scss"))["default"]]
      })], DetailBookComponent);
      /***/
    },

    /***/
    "./src/app/components/detail-comic/detail-comic.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/detail-comic/detail-comic.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsDetailComicDetailComicComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLWNvbWljL2RldGFpbC1jb21pYy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/detail-comic/detail-comic.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/detail-comic/detail-comic.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailComicComponent */

    /***/
    function srcAppComponentsDetailComicDetailComicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailComicComponent", function () {
        return DetailComicComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");

      var DetailComicComponent = /*#__PURE__*/function () {
        function DetailComicComponent(http, navCtrl, alertCtrl) {
          _classCallCheck(this, DetailComicComponent);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
        }

        _createClass(DetailComicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("comic: ", this.id);
            this.getEdition();
            this.getIsEditionOwned();
            this.user = this.http.getUserID();
            console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
          }
        }, {
          key: "getEdition",
          value: function getEdition() {
            var _this6 = this;

            this.http.getEdition(this.id, "comic").subscribe(function (res) {
              console.log("detalles: ", res);
              _this6.ItemID = res['ItemID'];
              _this6.Year = res['Year'];
              _this6.EAN13 = res['EAN13'];
              _this6.ISBNComic = res['ISBNComic'];
              _this6.TipoComic = res['TipoComic'];
              _this6.FormatoComic = res['FormatoComic'];
              _this6.NroComic = res['NroComic'];
              _this6.EditorialComic = res['EditorialComic'];
              _this6.Origen = res['Origen'];
              _this6.IdiomaComic = res['IdiomaComic'];
              _this6.CreatorUserID = res['CreatorUserID'];
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getIsEditionOwned",
          value: function getIsEditionOwned() {
            var _this7 = this;

            this.http.getEditionOwned(this.id).subscribe(function (res) {
              if (res['body']) {
                _this7.isOwned = res['body'][0]['IsOwned'];
              } else _this7.isOwned = null;

              console.log("isOwned:", _this7.isOwned);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.navCtrl.navigateForward("/edit-comic/" + this.id);
          }
        }, {
          key: "addEditionToUser",
          value: function addEditionToUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Tienes esta edición?',
                        buttons: [{
                          text: 'Lo tengo',
                          handler: function handler() {
                            _this8.http.addEditionToUser(_this8.id, "comic", 1);
                          }
                        }, {
                          text: 'Añadir a lista de deseos',
                          handler: function handler() {
                            _this8.http.addEditionToUser(_this8.id, "comic", 0);
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/comic/" + this.id);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "removeEditionFromUser",
          value: function removeEditionFromUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertCtrl.create({
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

                            _this9.http.removeEditionFromUser(_this9.id).subscribe(function (data) {
                              _this9.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this9.getIsEditionOwned();
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/comic/" + this.id);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteEdition",
          value: function deleteEdition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Seguro que deseas eliminar permanentemente la edición?',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this10.http.deleteEdition(_this10.id, "comic").subscribe(function (data) {
                              _this10.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this10.navCtrl.navigateForward("/item/comic/" + _this10.ItemID);
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return DetailComicComponent;
      }();

      DetailComicComponent.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      DetailComicComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }]
      };
      DetailComicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-comic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail-comic.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-comic/detail-comic.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail-comic.component.scss */
        "./src/app/components/detail-comic/detail-comic.component.scss"))["default"]]
      })], DetailComicComponent);
      /***/
    },

    /***/
    "./src/app/components/detail-game/detail-game.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/detail-game/detail-game.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsDetailGameDetailGameComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLWdhbWUvZGV0YWlsLWdhbWUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/detail-game/detail-game.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/detail-game/detail-game.component.ts ***!
      \*****************************************************************/

    /*! exports provided: DetailGameComponent */

    /***/
    function srcAppComponentsDetailGameDetailGameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailGameComponent", function () {
        return DetailGameComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");

      var DetailGameComponent = /*#__PURE__*/function () {
        function DetailGameComponent(http, navCtrl, alertCtrl) {
          _classCallCheck(this, DetailGameComponent);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
        }

        _createClass(DetailGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("game: ", this.id);
            this.getEdition();
            this.getIsEditionOwned();
            this.user = this.http.getUserID();
            console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
          }
        }, {
          key: "getEdition",
          value: function getEdition() {
            var _this11 = this;

            this.http.getEdition(this.id, "game").subscribe(function (res) {
              console.log("detalles: ", res);
              _this11.ItemID = res['ItemID'];
              _this11.Year = res['Year'];
              _this11.EAN13 = res['EAN13'];
              _this11.Plataforma = res['Plataforma'];
              _this11.FormatoJuego = res['FormatoJuego'];
              _this11.RegionJuego = res['RegionJuego'];
              _this11.Distribuidora = res['Distribuidora'];
              _this11.Estudio = res['Estudio'];
              _this11.NotasEdJuego = res['NotasEdJuego'];
              _this11.CreatorUserID = res['CreatorUserID'];
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getIsEditionOwned",
          value: function getIsEditionOwned() {
            var _this12 = this;

            this.http.getEditionOwned(this.id).subscribe(function (res) {
              if (res['body']) {
                _this12.isOwned = res['body'][0]['IsOwned'];
              } else _this12.isOwned = null;

              console.log("isOwned:", _this12.isOwned);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.navCtrl.navigateForward("/edit-game/" + this.id);
          }
        }, {
          key: "addEditionToUser",
          value: function addEditionToUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this13 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Tienes esta edición?',
                        buttons: [{
                          text: 'Lo tengo',
                          handler: function handler() {
                            _this13.http.addEditionToUser(_this13.id, "game", 1);
                          }
                        }, {
                          text: 'Añadir a lista de deseos',
                          handler: function handler() {
                            _this13.http.addEditionToUser(_this13.id, "game", 0);
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/game/" + this.id);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "removeEditionFromUser",
          value: function removeEditionFromUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this14 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertCtrl.create({
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

                            _this14.http.removeEditionFromUser(_this14.id).subscribe(function (data) {
                              _this14.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this14.getIsEditionOwned();
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/game/" + this.id);

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "deleteEdition",
          value: function deleteEdition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this15 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Seguro que deseas eliminar permanentemente la edición?',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this15.http.deleteEdition(_this15.id, "game").subscribe(function (data) {
                              _this15.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this15.navCtrl.navigateForward("/item/game/" + _this15.ItemID);
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }]);

        return DetailGameComponent;
      }();

      DetailGameComponent.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      DetailGameComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }]
      };
      DetailGameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail-game.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-game/detail-game.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail-game.component.scss */
        "./src/app/components/detail-game/detail-game.component.scss"))["default"]]
      })], DetailGameComponent);
      /***/
    },

    /***/
    "./src/app/components/detail-music/detail-music.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/detail-music/detail-music.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsDetailMusicDetailMusicComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLW11c2ljL2RldGFpbC1tdXNpYy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/detail-music/detail-music.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/detail-music/detail-music.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailMusicComponent */

    /***/
    function srcAppComponentsDetailMusicDetailMusicComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailMusicComponent", function () {
        return DetailMusicComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");

      var DetailMusicComponent = /*#__PURE__*/function () {
        function DetailMusicComponent(http, navCtrl, alertCtrl) {
          _classCallCheck(this, DetailMusicComponent);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
        }

        _createClass(DetailMusicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("music: ", this.id);
            this.getEdition();
            this.getIsEditionOwned();
            this.user = this.http.getUserID();
            console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
          }
        }, {
          key: "getEdition",
          value: function getEdition() {
            var _this16 = this;

            this.http.getEdition(this.id, "music").subscribe(function (res) {
              console.log("detalles: ", res);
              _this16.ItemID = res['ItemID'];
              _this16.Year = res['Year'];
              _this16.EAN13 = res['EAN13'];
              _this16.Formato = res['Formato'];
              _this16.NroPistas = res['NroPistas'];
              _this16.NroDiscos = res['NroDiscos'];
              _this16.Sello = res['Sello'];
              _this16.NotasVersion = res['NotasVersion'];
              _this16.CreatorUserID = res['CreatorUserID'];
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getIsEditionOwned",
          value: function getIsEditionOwned() {
            var _this17 = this;

            this.http.getEditionOwned(this.id).subscribe(function (res) {
              if (res['body']) {
                _this17.isOwned = res['body'][0]['IsOwned'];
              } else _this17.isOwned = null;

              console.log("isOwned:", _this17.isOwned);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.navCtrl.navigateForward("/edit-music/" + this.id);
          }
        }, {
          key: "addEditionToUser",
          value: function addEditionToUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this18 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Tienes esta edición?',
                        buttons: [{
                          text: 'Lo tengo',
                          handler: function handler() {
                            _this18.http.addEditionToUser(_this18.id, "music", 1);
                          }
                        }, {
                          text: 'Añadir a lista de deseos',
                          handler: function handler() {
                            _this18.http.addEditionToUser(_this18.id, "music", 0);
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context10.sent;
                      _context10.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/music/" + this.id);

                    case 6:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "removeEditionFromUser",
          value: function removeEditionFromUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var _this19 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alertCtrl.create({
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

                            _this19.http.removeEditionFromUser(_this19.id).subscribe(function (data) {
                              _this19.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this19.getIsEditionOwned();
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context11.sent;
                      _context11.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/music/" + this.id);

                    case 6:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }, {
          key: "deleteEdition",
          value: function deleteEdition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this20 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Seguro que deseas eliminar permanentemente la edición?',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this20.http.deleteEdition(_this20.id, "music").subscribe(function (data) {
                              _this20.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this20.navCtrl.navigateForward("/item/music/" + _this20.ItemID);
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context12.sent;
                      _context12.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }]);

        return DetailMusicComponent;
      }();

      DetailMusicComponent.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      DetailMusicComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }]
      };
      DetailMusicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-music',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail-music.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-music/detail-music.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail-music.component.scss */
        "./src/app/components/detail-music/detail-music.component.scss"))["default"]]
      })], DetailMusicComponent);
      /***/
    },

    /***/
    "./src/app/components/detail-video/detail-video.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/detail-video/detail-video.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsDetailVideoDetailVideoComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLXZpZGVvL2RldGFpbC12aWRlby5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/detail-video/detail-video.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/detail-video/detail-video.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailVideoComponent */

    /***/
    function srcAppComponentsDetailVideoDetailVideoComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailVideoComponent", function () {
        return DetailVideoComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");

      var DetailVideoComponent = /*#__PURE__*/function () {
        function DetailVideoComponent(http, navCtrl, alertCtrl) {
          _classCallCheck(this, DetailVideoComponent);

          this.http = http;
          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
        }

        _createClass(DetailVideoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("video: ", this.id);
            this.getEdition();
            this.getIsEditionOwned();
            this.user = this.http.getUserID();
            console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
          }
        }, {
          key: "getEdition",
          value: function getEdition() {
            var _this21 = this;

            this.http.getEdition(this.id, "video").subscribe(function (res) {
              console.log("detalles: ", res);
              _this21.ItemID = res['ItemID'];
              _this21.Year = res['Year'];
              _this21.EAN13 = res['EAN13'];
              _this21.FormatoVideo = res['FormatoVideo'];
              _this21.TipoVideo = res['TipoVideo'];
              _this21.Sistema = res['Sistema'];
              _this21.NroDiscosVideo = res['NroDiscosVideo'];
              _this21.RegionVideo = res['RegionVideo'];
              _this21.Temporada = res['Temporada'];
              _this21.VolumenVideo = res['VolumenVideo'];
              _this21.NroEpisodios = res['NroEpisodios'];
              _this21.CreatorUserID = res['CreatorUserID'];
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "getIsEditionOwned",
          value: function getIsEditionOwned() {
            var _this22 = this;

            this.http.getEditionOwned(this.id).subscribe(function (res) {
              if (res['body']) {
                _this22.isOwned = res['body'][0]['IsOwned'];
              } else _this22.isOwned = null;

              console.log("isOwned:", _this22.isOwned);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToEdit",
          value: function goToEdit() {
            this.navCtrl.navigateForward("/edit-video/" + this.id);
          }
        }, {
          key: "addEditionToUser",
          value: function addEditionToUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this23 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Tienes esta edición?',
                        buttons: [{
                          text: 'Lo tengo',
                          handler: function handler() {
                            _this23.http.addEditionToUser(_this23.id, "video", 1);
                          }
                        }, {
                          text: 'Añadir a lista de deseos',
                          handler: function handler() {
                            _this23.http.addEditionToUser(_this23.id, "video", 0);
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context13.sent;
                      _context13.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/video/" + this.id);

                    case 6:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "removeEditionFromUser",
          value: function removeEditionFromUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this24 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.alertCtrl.create({
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

                            _this24.http.removeEditionFromUser(_this24.id).subscribe(function (data) {
                              _this24.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this24.getIsEditionOwned();
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context14.sent;
                      _context14.next = 5;
                      return alert.present();

                    case 5:
                      /*let result = await alert.onDidDismiss();
                      console.log(result);*/
                      this.navCtrl.navigateForward("/edition/video/" + this.id);

                    case 6:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "deleteEdition",
          value: function deleteEdition() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this25 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Seguro que deseas eliminar permanentemente la edición?',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this25.http.deleteEdition(_this25.id, "video").subscribe(function (data) {
                              _this25.http.presentToast(data['body']['Message']);

                              if (data.status == 200) {
                                _this25.navCtrl.navigateForward("/item/video/" + _this25.ItemID);
                              }
                            }, function (error) {
                              console.log(error);
                              return error;
                            });
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context15.sent;
                      _context15.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }]);

        return DetailVideoComponent;
      }();

      DetailVideoComponent.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      };

      DetailVideoComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }]
      };
      DetailVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detail-video.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-video/detail-video.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detail-video.component.scss */
        "./src/app/components/detail-video/detail-video.component.scss"))["default"]]
      })], DetailVideoComponent);
      /***/
    },

    /***/
    "./src/app/components/edition-list/edition-list.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/edition-list/edition-list.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsEditionListEditionListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGlvbi1saXN0L2VkaXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/edition-list/edition-list.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/edition-list/edition-list.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EditionListComponent */

    /***/
    function srcAppComponentsEditionListEditionListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditionListComponent", function () {
        return EditionListComponent;
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


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var EditionListComponent = /*#__PURE__*/function () {
        function EditionListComponent(http, navCtrl) {
          _classCallCheck(this, EditionListComponent);

          this.http = http;
          this.navCtrl = navCtrl;
          this.thumburl = null;
          /*imgserver = "http://91.117.92.244:8081/collectathon/uploads/";
          thumbdir = "http://91.117.92.244:8081/collectathon/uploads/thumb/";*/

          this.imgserver = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/";
          this.thumbdir = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/thumb/";
        }

        _createClass(EditionListComponent, [{
          key: "goToEdition",
          value: function goToEdition(id, type) {
            this.navCtrl.navigateForward("/edition/" + this.http.getItemTypeURL(type) + "/" + id);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.http.findEditionImage(this.ed['EditionID']).subscribe(function (res) {
              if (res['found'] == true) {
                _this26.thumburl = _this26.thumbdir + res['filename'];
              } else {
                console.log(_this26.ed['id'], " not found!");
                _this26.thumburl = "../../assets/noimage.jpg";
              }
            }, function (error) {
              console.error(error);
            });
          }
        }]);

        return EditionListComponent;
      }();

      EditionListComponent.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      EditionListComponent.propDecorators = {
        ed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['ed']
        }]
      };
      EditionListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edition-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edition-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edition-list/edition-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edition-list.component.scss */
        "./src/app/components/edition-list/edition-list.component.scss"))["default"]]
      })], EditionListComponent);
      /***/
    },

    /***/
    "./src/app/components/image-edition/image-edition.component.scss":
    /*!***********************************************************************!*\
      !*** ./src/app/components/image-edition/image-edition.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsImageEditionImageEditionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtZWRpdGlvbi9pbWFnZS1lZGl0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/image-edition/image-edition.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/image-edition/image-edition.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ImageEditionComponent */

    /***/
    function srcAppComponentsImageEditionImageEditionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImageEditionComponent", function () {
        return ImageEditionComponent;
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


      var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/Camera/ngx */
      "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/File/ngx */
      "./node_modules/@ionic-native/File/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/file-path/ngx */
      "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");

      var STORAGE_KEY = 'my_images';

      var ImageEditionComponent = /*#__PURE__*/function () {
        function ImageEditionComponent(route, navCtrl, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath) {
          _classCallCheck(this, ImageEditionComponent);

          this.route = route;
          this.navCtrl = navCtrl;
          this.camera = camera;
          this.file = file;
          this.http = http;
          this.webview = webview;
          this.actionSheetController = actionSheetController;
          this.toastController = toastController;
          this.storage = storage;
          this.plt = plt;
          this.loadingController = loadingController;
          this.ref = ref;
          this.filePath = filePath;
          this.imageurl = null;
          this.thumburl = null;
          /*imgserver = "http://91.117.92.244:8081/collectathon/uploads/";
          thumbdir = "http://91.117.92.244:8081/collectathon/uploads/thumb/";*/

          this.imgserver = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/";
          this.thumbdir = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/thumb/";
        }

        _createClass(ImageEditionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            this.http.findEditionImage(this.id).subscribe(function (res) {
              console.log(res['found']);

              if (res['found'] == true) {
                console.log("Found!");
                _this27.imageurl = _this27.imgserver + res['filename'];
                _this27.thumburl = _this27.thumbdir + res['filename'];
              } else {
                console.log(_this27.id, " not found!");
                _this27.imageurl = null;
                _this27.thumburl = "../../assets/noimage.jpg";
              }
            }, function (error) {
              console.error(error);
            });
            console.log(this.imageurl);
          }
        }, {
          key: "presentToast",
          value: function presentToast(text) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var toast;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.toastController.create({
                        message: text,
                        position: 'bottom',
                        duration: 3000
                      });

                    case 2:
                      toast = _context16.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "pathForImage",
          value: function pathForImage(img) {
            if (img === null) {
              return '';
            } else {
              var converted = this.webview.convertFileSrc(img);
              return converted;
            }
          }
        }, {
          key: "selectImage",
          value: function selectImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this28 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.actionSheetController.create({
                        header: "Seleccionar fuente",
                        buttons: [{
                          text: 'Cargar imagen',
                          handler: function handler() {
                            _this28.takePicture(_this28.camera.PictureSourceType.PHOTOLIBRARY);
                          }
                        }, {
                          text: 'Tomar foto',
                          handler: function handler() {
                            _this28.takePicture(_this28.camera.PictureSourceType.CAMERA);
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      actionSheet = _context17.sent;
                      _context17.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "takePicture",
          value: function takePicture(sourceType) {
            var _this29 = this;

            var options = {
              quality: 100,
              sourceType: sourceType,
              saveToPhotoAlbum: false,
              correctOrientation: true
            };
            this.camera.getPicture(options).then(function (imagePath) {
              if (_this29.plt.is('android') && sourceType === _this29.camera.PictureSourceType.PHOTOLIBRARY) {
                _this29.filePath.resolveNativePath(imagePath).then(function (filePath) {
                  var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                  var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));

                  _this29.copyFileToLocalDir(correctPath, currentName, _this29.createFileName());
                });
              } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);

                _this29.copyFileToLocalDir(correctPath, currentName, _this29.createFileName());
              }
            });
          }
        }, {
          key: "updateStoredImage",
          value: function updateStoredImage(name) {
            var _this30 = this;

            this.storage.get(STORAGE_KEY).then(function (images) {
              var arr = JSON.parse(images);

              if (!arr) {
                var newImages = [name];

                _this30.storage.set(STORAGE_KEY, JSON.stringify(newImages));
              } else {
                arr.push(name);

                _this30.storage.set(STORAGE_KEY, JSON.stringify(arr));
              }

              var filePath = _this30.file.dataDirectory + name;

              var resPath = _this30.pathForImage(filePath);

              var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
              };
              _this30.images = newEntry;

              _this30.ref.detectChanges(); // trigger change detection cycle

            });
          }
        }, {
          key: "createFileName",
          value: function createFileName() {
            var newFileName = this.id + ".jpg";
            return newFileName;
          }
        }, {
          key: "copyFileToLocalDir",
          value: function copyFileToLocalDir(namePath, currentName, newFileName) {
            var _this31 = this;

            this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
              _this31.updateStoredImage(newFileName);

              _this31.startUpload(_this31.images);
            }, function (error) {
              _this31.presentToast('Error guardando la imagen.');
            });
          } // Inspired by https://golb.hplar.ch/2017/02/Uploading-pictures-from-Ionic-2-to-Spring-Boot.html

        }, {
          key: "startUpload",
          value: function startUpload(imgEntry) {
            var _this32 = this;

            this.file.resolveLocalFilesystemUrl(imgEntry.filePath).then(function (entry) {
              entry.file(function (file) {
                return _this32.readFile(file);
              });
            })["catch"](function (err) {
              _this32.presentToast('Error leyendo el fichero.');
            });
          }
        }, {
          key: "readFile",
          value: function readFile(file) {
            var _this33 = this;

            var reader = new FileReader();

            reader.onload = function () {
              var formData = new FormData();
              var imgBlob = new Blob([reader.result], {
                type: file.type
              });
              formData.append('file', imgBlob, file.name);

              _this33.uploadImageData(formData);
            };

            reader.readAsArrayBuffer(file);
          }
        }, {
          key: "uploadImageData",
          value: function uploadImageData(formData) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this34 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.loadingController.create({
                        message: 'Subiendo imagen...'
                      });

                    case 2:
                      loading = _context18.sent;
                      _context18.next = 5;
                      return loading.present();

                    case 5:
                      this.http.uploadEditionImage(formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                        loading.dismiss();
                      })).subscribe(function (res) {
                        if (res['success']) {
                          _this34.presentToast('La imagen se subió con éxito.');

                          _this34.http.findEditionImage(_this34.id);
                        } else {
                          _this34.presentToast('Error en la carga al servidor.');
                        }
                      });

                    case 6:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return ImageEditionComponent;
      }();

      ImageEditionComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"]
        }, {
          type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
        }, {
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_10__["ApiRestService"]
        }, {
          type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]
        }];
      };

      ImageEditionComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }],
        isCreator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['isCreator']
        }]
      };
      ImageEditionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-edition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./image-edition.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-edition/image-edition.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./image-edition.component.scss */
        "./src/app/components/image-edition/image-edition.component.scss"))["default"]]
      })], ImageEditionComponent);
      /***/
    },

    /***/
    "./src/app/components/persona/persona.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/persona/persona.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPersonaPersonaComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYS9wZXJzb25hLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/persona/persona.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/persona/persona.component.ts ***!
      \*********************************************************/

    /*! exports provided: PersonaComponent */

    /***/
    function srcAppComponentsPersonaPersonaComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PersonaComponent", function () {
        return PersonaComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PersonaComponent = /*#__PURE__*/function () {
        function PersonaComponent() {
          _classCallCheck(this, PersonaComponent);

          if (this.Role === "Principal" || this.Role === "Secundario") {
            this.Role = "Actor " + this.Role.toLowerCase();
          }
        }

        _createClass(PersonaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PersonaComponent;
      }();

      PersonaComponent.ctorParameters = function () {
        return [];
      };

      PersonaComponent.propDecorators = {
        Names: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['Names']
        }],
        LastNames: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['LastNames']
        }],
        Role: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['Role']
        }]
      };
      PersonaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-persona',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./persona.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/persona/persona.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./persona.component.scss */
        "./src/app/components/persona/persona.component.scss"))["default"]]
      })], PersonaComponent);
      /***/
    },

    /***/
    "./src/app/components/present-action-sheet/present-action-sheet.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/present-action-sheet/present-action-sheet.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsPresentActionSheetPresentActionSheetComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlc2VudC1hY3Rpb24tc2hlZXQvcHJlc2VudC1hY3Rpb24tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/present-action-sheet/present-action-sheet.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/components/present-action-sheet/present-action-sheet.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: PresentActionSheetComponent */

    /***/
    function srcAppComponentsPresentActionSheetPresentActionSheetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresentActionSheetComponent", function () {
        return PresentActionSheetComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var PresentActionSheetComponent = /*#__PURE__*/function () {
        function PresentActionSheetComponent(navCtrl, actionSheetController) {
          _classCallCheck(this, PresentActionSheetComponent);

          this.navCtrl = navCtrl;
          this.actionSheetController = actionSheetController;
        }

        _createClass(PresentActionSheetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentActionSheet",
          value: function presentActionSheet() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this35 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      console.log("Action sheet");
                      _context19.next = 3;
                      return this.actionSheetController.create({
                        header: 'Selecciona tipo',
                        buttons: [{
                          text: 'Libro',
                          icon: 'book',
                          handler: function handler() {
                            console.log('Nuevo libro');

                            _this35.navCtrl.navigateForward("/add-book");
                          }
                        }, {
                          text: 'Música',
                          icon: 'musical-notes',
                          handler: function handler() {
                            console.log('Nuevo álbum');

                            _this35.navCtrl.navigateForward("/add-music");
                          }
                        }, {
                          text: 'Vídeo',
                          icon: 'film',
                          handler: function handler() {
                            console.log('Nuevo vídeo');

                            _this35.navCtrl.navigateForward("/add-video");
                          }
                        }, {
                          text: 'Videojuego',
                          icon: 'game-controller',
                          handler: function handler() {
                            console.log('Nuevo videojuego');

                            _this35.navCtrl.navigateForward("/add-game");
                          }
                        }, {
                          text: 'Cómic',
                          icon: 'chatbubbles',
                          handler: function handler() {
                            console.log('Nuevo Comic');

                            _this35.navCtrl.navigateForward("/add-comic");
                          }
                        }, {
                          text: 'Cancelar',
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 3:
                      actionSheet = _context19.sent;
                      _context19.next = 6;
                      return actionSheet.present();

                    case 6:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }]);

        return PresentActionSheetComponent;
      }();

      PresentActionSheetComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
        }];
      };

      PresentActionSheetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-present-action-sheet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./present-action-sheet.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/present-action-sheet/present-action-sheet.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./present-action-sheet.component.scss */
        "./src/app/components/present-action-sheet/present-action-sheet.component.scss"))["default"]]
      })], PresentActionSheetComponent);
      /***/
    },

    /***/
    "./src/app/components/website-list/website-list.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/website-list/website-list.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsWebsiteListWebsiteListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/website-list/website-list.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/website-list/website-list.component.ts ***!
      \*******************************************************************/

    /*! exports provided: WebsiteListComponent */

    /***/
    function srcAppComponentsWebsiteListWebsiteListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function () {
        return WebsiteListComponent;
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


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../api-rest.service */
      "./src/app/api-rest.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _create_website_create_website_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../create-website/create-website.page */
      "./src/app/create-website/create-website.page.ts");
      /* harmony import */


      var _edit_website_edit_website_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../edit-website/edit-website.page */
      "./src/app/edit-website/edit-website.page.ts");

      var WebsiteListComponent = /*#__PURE__*/function () {
        function WebsiteListComponent(http, navCtrl, route, router, alertCtrl, modalController) {
          _classCallCheck(this, WebsiteListComponent);

          this.http = http;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.alertCtrl = alertCtrl;
          this.modalController = modalController;
        }

        _createClass(WebsiteListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getWebsites();
            this.user = this.http.getUserID();
            console.log("user: ", this.user);
          }
        }, {
          key: "getWebsites",
          value: function getWebsites() {
            var _this36 = this;

            this.webs = [];
            this.http.getWebsitesForObject(this.id, this.type).subscribe(function (res) {
              _this36.webs = res['body'];
              console.log('webs ', _this36.webs);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "goToNewWebsite",
          value: function goToNewWebsite() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this37 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      console.log("Página modal");
                      _context20.next = 3;
                      return this.modalController.create({
                        component: _create_website_create_website_page__WEBPACK_IMPORTED_MODULE_5__["CreateWebsitePage"],
                        componentProps: {
                          "id": this.id,
                          "type": this.type
                        }
                      });

                    case 3:
                      modal = _context20.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned != null) {
                          _this37.webs = [];
                          _this37.newWeb = dataReturned;
                          console.log("New Web: ", _this37.newWeb);

                          _this37.getWebsites();
                        }
                      });
                      _context20.next = 7;
                      return modal.present();

                    case 7:
                      return _context20.abrupt("return", _context20.sent);

                    case 8:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "deleteWebsite",
          value: function deleteWebsite(webid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var _this38 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmar',
                        message: '¿Seguro que deseas eliminar permanentemente la página web?',
                        buttons: [{
                          text: 'Aceptar',
                          handler: function handler() {
                            _this38.http.deleteWebsite(webid);

                            _this38.webs = [];

                            _this38.getWebsites();
                          }
                        }, {
                          text: 'Cancelar',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancelar');
                          }
                        }]
                      });

                    case 2:
                      alert = _context21.sent;
                      _context21.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "goToEditWebsite",
          value: function goToEditWebsite(webid) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var _this39 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      console.log("Edit website ", webid);
                      _context22.next = 3;
                      return this.modalController.create({
                        component: _edit_website_edit_website_page__WEBPACK_IMPORTED_MODULE_6__["EditWebsitePage"],
                        componentProps: {
                          "id": webid
                        }
                      });

                    case 3:
                      modal = _context22.sent;
                      modal.onDidDismiss().then(function (dataReturned) {
                        if (dataReturned != null) {
                          _this39.webs = [];
                          console.log("Edit Web: ", dataReturned);

                          _this39.getWebsites();
                        }
                      });
                      _context22.next = 7;
                      return modal.present();

                    case 7:
                      return _context22.abrupt("return", _context22.sent);

                    case 8:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "getIcon",
          value: function getIcon(url) {
            var icon = "compass-outline";

            if (url.indexOf("amazon.") > 0) {
              icon = "logo-amazon";
            } else if (url.indexOf("facebook.com") > 0) {
              icon = "logo-facebook";
            } else if (url.indexOf("twitter.com") > 0) {
              icon = "logo-twitter";
            } else if (url.indexOf("instagram.com") > 0) {
              icon = "logo-instagram";
            } else if (url.indexOf("playstation.com") > 0) {
              icon = "logo-playstation";
            } else if (url.indexOf("steampowered.com") > 0) {
              icon = "icon-steam";
            } else if (url.indexOf("xbox.com") > 0) {
              icon = "logo-xbox";
            } else if (url.indexOf("youtube.com") > 0) {
              icon = "logo-youtube";
            }

            return icon;
          }
        }]);

        return WebsiteListComponent;
      }();

      WebsiteListComponent.ctorParameters = function () {
        return [{
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      WebsiteListComponent.propDecorators = {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['id']
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['type']
        }]
      };
      WebsiteListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-website-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./website-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-list/website-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./website-list.component.scss */
        "./src/app/components/website-list/website-list.component.scss"))["default"]]
      })], WebsiteListComponent);
      /***/
    },

    /***/
    "./src/app/create-website/create-website.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/create-website/create-website.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppCreateWebsiteCreateWebsitePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS13ZWJzaXRlL2NyZWF0ZS13ZWJzaXRlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/create-website/create-website.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/create-website/create-website.page.ts ***!
      \*******************************************************/

    /*! exports provided: CreateWebsitePage */

    /***/
    function srcAppCreateWebsiteCreateWebsitePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateWebsitePage", function () {
        return CreateWebsitePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api-rest.service */
      "./src/app/api-rest.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var CreateWebsitePage = /*#__PURE__*/function () {
        function CreateWebsitePage(modalController, navParams, http, navCtrl, route, router, formBuilder) {
          _classCallCheck(this, CreateWebsitePage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.http = http;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.isSubmitted = false;
          this.newweb = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            URL: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
        }

        _createClass(CreateWebsitePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.navParams.data.id;
            this.type = this.navParams.data.type;
            this.newweb = this.formBuilder.group({
              'URL': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')])],
              'Text': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this40 = this;

            this.isSubmitted = true;

            if (!this.newweb.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              console.log(this.newweb.value);
              this.http.createWebsite(this.newweb.value, this.id, this.type).subscribe(function (data) {
                console.log("Web " + data['body']);
                _this40.WebsiteID = data['body']['WebsiteID'];
                console.log("antes de cerrar modal ", _this40.WebsiteID);

                _this40.closeModal();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.modalController.dismiss(this.WebsiteID);

                    case 2:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.newweb.controls;
          }
        }]);

        return CreateWebsitePage;
      }();

      CreateWebsitePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      CreateWebsitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-website',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-website.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-website.page.scss */
        "./src/app/create-website/create-website.page.scss"))["default"]]
      })], CreateWebsitePage);
      /***/
    },

    /***/
    "./src/app/edit-website/edit-website.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/edit-website/edit-website.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditWebsiteEditWebsitePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtd2Vic2l0ZS9lZGl0LXdlYnNpdGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/edit-website/edit-website.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/edit-website/edit-website.page.ts ***!
      \***************************************************/

    /*! exports provided: EditWebsitePage */

    /***/
    function srcAppEditWebsiteEditWebsitePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditWebsitePage", function () {
        return EditWebsitePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../api-rest.service */
      "./src/app/api-rest.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var EditWebsitePage = /*#__PURE__*/function () {
        function EditWebsitePage(modalController, navParams, http, navCtrl, route, router, formBuilder) {
          _classCallCheck(this, EditWebsitePage);

          this.modalController = modalController;
          this.navParams = navParams;
          this.http = http;
          this.navCtrl = navCtrl;
          this.route = route;
          this.router = router;
          this.formBuilder = formBuilder;
          this.isSubmitted = false;
          this.web = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            URL: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            Text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]()
          });
        }

        _createClass(EditWebsitePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.id = this.navParams.data.id;
            this.getWebsite();
          }
        }, {
          key: "getWebsite",
          value: function getWebsite() {
            var _this41 = this;

            this.http.getWebsite(this.id).subscribe(function (res) {
              _this41.web = _this41.formBuilder.group({
                'URL': [res['URL'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                'Text': [res['Text'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
              });
              console.log("res: ", res);
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this42 = this;

            this.isSubmitted = true;

            if (!this.web.valid) {
              console.log('Please provide all the required values!');
              return false;
            } else {
              this.web.value.WebsiteID = this.id;
              console.log(this.web.value);
              this.http.updateWebsite(this.web.value).subscribe(function (data) {
                console.log("Web " + data['body']);
                _this42.WebsiteID = data['body']['WebsiteID'];
                console.log("antes de cerrar modal ", _this42.WebsiteID);

                _this42.closeModal();
              }, function (error) {
                console.log(error);
              });
            }
          }
        }, {
          key: "closeModal",
          value: function closeModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return this.modalController.dismiss(this.WebsiteID);

                    case 2:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "errorControl",
          get: function get() {
            return this.web.controls;
          }
        }]);

        return EditWebsitePage;
      }();

      EditWebsitePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
        }, {
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      EditWebsitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-website',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./edit-website.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./edit-website.page.scss */
        "./src/app/edit-website/edit-website.page.scss"))["default"]]
      })], EditWebsitePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~add-person-add-person-module~allpeople-allpeople-module~collection-collection-module~collect~dc4c3a90-es5.js.map