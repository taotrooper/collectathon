(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~add-person-add-person-module~allpeople-allpeople-module~collection-collection-module~collect~dc4c3a90"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-book/detail-book.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-book/detail-book.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"ISBN\"><strong>ISBN:</strong> {{ISBN}}<br /></span>\n<span *ngIf=\"NroPaginas\"><strong>Nº páginas:</strong> {{NroPaginas}}<br /></span>\n<span *ngIf=\"Editorial\"><strong>Editorial:</strong> {{Editorial}}<br /></span>\n<span *ngIf=\"Edicion > 0\"><strong>Edición:</strong> {{Edicion}}ª<br /></span>\n<span *ngIf=\"Idioma\"><strong>Idioma:</strong> {{Idioma}}<br /></span>\n<span *ngIf=\"Tipo\"><strong>Tipo:</strong> {{Tipo}}<br /></span>\n\n<ion-button *ngIf=\"!isOwned\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-comic/detail-comic.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-comic/detail-comic.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"ISBNComic\"><strong>ISBN:</strong> {{ISBNComic}}<br /></span>\n<span *ngIf=\"TipoComic\"><strong>Tipo:</strong> {{TipoComic}}<br /></span>\n<span *ngIf=\"FormatoComic\"><strong>Formato:</strong> {{FormatoComic}}<br /></span>\n<span *ngIf=\"NroComic\">\n  <strong *ngIf=\"TipoComic==='Grapas'\">Nº:</strong>\n  <strong *ngIf=\"TipoComic!=='Grapas'\">Tomo:</strong>\n   {{NroComic}}<br />\n</span>\n<span *ngIf=\"EditorialComic\"><strong>Editorial:</strong> {{EditorialComic}}<br /></span>\n<span *ngIf=\"Origen\"><strong>Origen:</strong> {{Origen}}<br /></span>\n<span *ngIf=\"IdiomaComic\"><strong>Idioma:</strong> {{IdiomaComic}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-game/detail-game.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-game/detail-game.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"Plataforma\"><strong>Plataforma:</strong> {{Plataforma}}<br /></span>\n<span *ngIf=\"FormatoJuego\"><strong>Formato:</strong> {{FormatoJuego}}<br /></span>\n<span *ngIf=\"RegionJuego\"><strong>Región:</strong> {{RegionJuego}}<br /></span>\n<span *ngIf=\"Distribuidora\"><strong>Distribuidora:</strong> {{Distribuidora}}<br /></span>\n<span *ngIf=\"Estudio\"><strong>Estudio:</strong> {{Estudio}}<br /></span>\n<span *ngIf=\"NotasEdJuego\"><strong>Notas Edición:</strong> {{NotasEdJuego}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-music/detail-music.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-music/detail-music.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"Formato\"><strong>Formato:</strong> {{Formato}}<br /></span>\n<span *ngIf=\"NroPistas > 0\"><strong>Nº pistas:</strong> {{NroPistas}}<br /></span>\n<span *ngIf=\"NroDiscos > 0\"><strong>Nº discos:</strong> {{NroDiscos}}<br /></span>\n<span *ngIf=\"Sello\"><strong>Sello:</strong> {{Sello}}<br /></span>\n<span *ngIf=\"NotasVersion\"><strong>Notas Versión:</strong> {{NotasVersion}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-video/detail-video.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-video/detail-video.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-image-edition [id]=\"id\" [isCreator]=\"CreatorUserID==user\"></app-image-edition>\n<span *ngIf=\"Year != 0\"><strong>Año:</strong> {{Year}}<br /></span>\n<span *ngIf=\"EAN13\"><strong>EAN13:</strong> {{EAN13}}<br /></span>\n<span *ngIf=\"FormatoVideo\"><strong>Formato:</strong> {{FormatoVideo}}<br /></span>\n<span *ngIf=\"TipoVideo\"><strong>Tipo de Vídeo:</strong> {{TipoVideo}}<br /></span>\n<span *ngIf=\"Sistema\"><strong>Sistema:</strong> {{Sistema}}<br /></span>\n<span *ngIf=\"NroDiscosVideo > 0\"><strong>Nº Discos:</strong> {{NroDiscosVideo}}<br /></span>\n<span *ngIf=\"RegionVideo\"><strong>Región:</strong> {{RegionVideo}}<br /></span>\n<span *ngIf=\"Temporada > 0\"><strong>Temporada:</strong> {{Temporada}}<br /></span>\n<span *ngIf=\"VolumenVideo > 0\"><strong>Volumen:</strong> {{VolumenVideo}}<br /></span>\n<span *ngIf=\"NroEpisodios > 0\"><strong>Nº Epìsodios:</strong> {{NroEpisodios}}<br /></span>\n\n<ion-button *ngIf=\"isOwned==null\" (click)=\"addEditionToUser()\">Agregar a mis items</ion-button>\n<ion-button *ngIf=\"isOwned\" (click)=\"removeEditionFromUser()\">Quitar de mis items</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" (click)=\"goToEdit()\">Editar</ion-button>\n<ion-button *ngIf=\"CreatorUserID==user\" color=\"danger\" (click)=\"deleteEdition()\">Eliminar</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edition-list/edition-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edition-list/edition-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item detail (click)=\"goToEdition(ed.EditionID, ed.ItemType)\">\n  <ion-avatar slot=\"end\">\n    <img src=\"{{thumburl}}\" *ngIf=\"thumburl\" style=\"border: 3px solid #c3c3c3;\" />\n  </ion-avatar>\n  <ion-icon top name={{http.getItemTypeIcon(ed.ItemType)}}></ion-icon>\n  <ion-icon *ngIf=\"ed.IsOwned==1\" name=\"checkmark-circle-outline\"></ion-icon>\n  <ion-icon *ngIf=\"ed.IsOwned==0\" name=\"heart-circle-outline\"></ion-icon>\n  <ion-label style=\"margin-left: 5px;\" class=\"ion-text-wrap\"><h2>{{ ed.ItemName }}</h2>\n    <small>{{ ed.Summary }}</small>\n  </ion-label>\n</ion-item>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-edition/image-edition.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-edition/image-edition.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"float: right; vertical-align: top; margin-right: 10px;\">\n  <a href=\"{{imageurl}}\" *ngIf=\"imageurl\">\n    <ion-thumbnail slot=\"end\">\n      <img style=\"border: 1px solid #c3c3c3; padding: 2px;\" \n      src=\"{{thumburl}}\" />\n    </ion-thumbnail>\n  </a>\n  <ion-thumbnail slot=\"end\" *ngIf=\"!imageurl\">\n    <img style=\"border: 1px solid #c3c3c3; padding: 2px;\" src=\"{{thumburl}}\" />\n  </ion-thumbnail>\n  <ion-button (click)=\"selectImage()\" *ngIf=\"isCreator\">\n    <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n  </ion-button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/persona/persona.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/persona/persona.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<strong *ngIf=\"Role\">{{Role}}: </strong> <span *ngIf=\"LastNames\">{{LastNames}}</span>\n<span *ngIf=\"LastNames && Names\">, </span><span *ngIf=\"Names\">{{Names}}</span>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/present-action-sheet/present-action-sheet.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/present-action-sheet/present-action-sheet.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <ion-icon name=\"add\" (click)=\"presentActionSheet()\"></ion-icon>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-list/website-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-list/website-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-chip *ngFor=\"let w of webs\">\n  <ion-icon [name]=\"getIcon(w.URL)\"></ion-icon>\n  <ion-label>\n    <a href=\"{{w.URL}}\" class=\"chiplink\">{{w.Text}}</a>\n  </ion-label>\n  <div *ngIf=\"w.CreatorUserID==user\">\n    <ion-icon name=\"pencil\" (click)=\"goToEditWebsite(w.WebsiteID)\"></ion-icon>\n    <ion-icon name=\"close\" (click)=\"deleteWebsite(w.WebsiteID)\"></ion-icon>\n  </div>\n</ion-chip>\n<ion-chip (click)=\"goToNewWebsite()\">\n  <ion-icon name=\"add\"></ion-icon><ion-label>web</ion-label>\n</ion-chip>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Crear página web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"newweb\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>URL/Dirección</ion-label>\n        <ion-input placeholder=\"http://www.ejemplo.com/pagina\" formControlName=\"URL\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.URL.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>Texto del enlace</ion-label>\n        <ion-input placeholder=\"Ejemplo: Amazon, Wikipedia, IMDB, etc.\" formControlName=\"Text\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Text.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" (click)=\"closeModal()\">Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Editar página web</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [fullscreen]=\"true\">\n  <form [formGroup]=\"web\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-list>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>URL/Dirección</ion-label>\n        <ion-input placeholder=\"http://www.ejemplo.com/pagina\" formControlName=\"URL\" type=\"url\" \n        [value]=\"web.URL\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.URL.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n      <ion-item lines=\"full\">\n        <ion-label position=\"stacked\"><span style=\"color: red\">*</span>Texto del enlace</ion-label>\n        <ion-input placeholder=\"Ejemplo: Amazon, Wikipedia, IMDB, etc.\" formControlName=\"Text\" \n        [value]=\"web.Text\" type=\"text\" required></ion-input>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.Text.errors?.required\">\n          Campo requerido.\n        </span>\n      </ion-item>\n    </ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" type=\"submit\">Enviar</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button small expand=\"inline\" shape=\"round\" color=\"primary\" (click)=\"closeModal()\">Cancelar</ion-button>\n        </ion-col>\n      </ion-row>\n      </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edition_list_edition_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edition-list/edition-list.component */ "./src/app/components/edition-list/edition-list.component.ts");
/* harmony import */ var _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./persona/persona.component */ "./src/app/components/persona/persona.component.ts");
/* harmony import */ var _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-book/detail-book.component */ "./src/app/components/detail-book/detail-book.component.ts");
/* harmony import */ var _detail_music_detail_music_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail-music/detail-music.component */ "./src/app/components/detail-music/detail-music.component.ts");
/* harmony import */ var _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail-video/detail-video.component */ "./src/app/components/detail-video/detail-video.component.ts");
/* harmony import */ var _detail_game_detail_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail-game/detail-game.component */ "./src/app/components/detail-game/detail-game.component.ts");
/* harmony import */ var _detail_comic_detail_comic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./detail-comic/detail-comic.component */ "./src/app/components/detail-comic/detail-comic.component.ts");
/* harmony import */ var _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./website-list/website-list.component */ "./src/app/components/website-list/website-list.component.ts");
/* harmony import */ var _present_action_sheet_present_action_sheet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./present-action-sheet/present-action-sheet.component */ "./src/app/components/present-action-sheet/present-action-sheet.component.ts");
/* harmony import */ var _image_edition_image_edition_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./image-edition/image-edition.component */ "./src/app/components/image-edition/image-edition.component.ts");














let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_edition_list_edition_list_component__WEBPACK_IMPORTED_MODULE_4__["EditionListComponent"],
            _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__["PersonaComponent"],
            _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailBookComponent"],
            _detail_music_detail_music_component__WEBPACK_IMPORTED_MODULE_7__["DetailMusicComponent"],
            _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_8__["DetailVideoComponent"],
            _detail_game_detail_game_component__WEBPACK_IMPORTED_MODULE_9__["DetailGameComponent"],
            _detail_comic_detail_comic_component__WEBPACK_IMPORTED_MODULE_10__["DetailComicComponent"],
            _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteListComponent"],
            _image_edition_image_edition_component__WEBPACK_IMPORTED_MODULE_13__["ImageEditionComponent"],
            _present_action_sheet_present_action_sheet_component__WEBPACK_IMPORTED_MODULE_12__["PresentActionSheetComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        exports: [_edition_list_edition_list_component__WEBPACK_IMPORTED_MODULE_4__["EditionListComponent"],
            _persona_persona_component__WEBPACK_IMPORTED_MODULE_5__["PersonaComponent"],
            _detail_book_detail_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailBookComponent"],
            _detail_music_detail_music_component__WEBPACK_IMPORTED_MODULE_7__["DetailMusicComponent"],
            _detail_video_detail_video_component__WEBPACK_IMPORTED_MODULE_8__["DetailVideoComponent"],
            _detail_game_detail_game_component__WEBPACK_IMPORTED_MODULE_9__["DetailGameComponent"],
            _detail_comic_detail_comic_component__WEBPACK_IMPORTED_MODULE_10__["DetailComicComponent"],
            _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteListComponent"],
            _image_edition_image_edition_component__WEBPACK_IMPORTED_MODULE_13__["ImageEditionComponent"],
            _present_action_sheet_present_action_sheet_component__WEBPACK_IMPORTED_MODULE_12__["PresentActionSheetComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/detail-book/detail-book.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-book/detail-book.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLWJvb2svZGV0YWlsLWJvb2suY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/detail-book/detail-book.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/detail-book/detail-book.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailBookComponent", function() { return DetailBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");





let DetailBookComponent = class DetailBookComponent {
    constructor(http, navCtrl, alertCtrl, changeRef) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.changeRef = changeRef;
    }
    ngOnInit() {
        console.log("book: ", this.id);
        this.getEdition();
        this.getIsEditionOwned();
        this.user = this.http.getUserID();
        console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
    }
    getEdition() {
        this.http.getEdition(this.id, "book").subscribe((res) => {
            console.log("detalles: ", res);
            this.ItemID = res['ItemID'];
            this.Year = res['Year'];
            this.EAN13 = res['EAN13'];
            this.ISBN = res['ISBN'];
            this.NroPaginas = res['NroPaginas'];
            this.Editorial = res['Editorial'];
            this.Edicion = res['Edicion'];
            this.Idioma = res['Idioma'];
            this.Tipo = res['Tipo'];
            this.CreatorUserID = res['CreatorUserID'];
        }, (error) => {
            console.error(error);
        });
    }
    getIsEditionOwned() {
        this.http.getEditionOwned(this.id).subscribe((res) => {
            if (res['body']) {
                this.isOwned = 1;
            }
            else
                this.isOwned = null;
            console.log("isOwned:", this.isOwned);
        }, (error) => {
            console.error(error);
            this.isOwned = null;
        });
        console.log("isOwned:", this.isOwned);
    }
    goToEdit() {
        this.navCtrl.navigateForward("/edit-book/" + this.id);
    }
    addEditionToUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Tienes esta edición?',
                buttons: [
                    {
                        text: 'Lo tengo',
                        handler: () => {
                            console.log(this.isOwned);
                            this.http.addEditionToUser(this.id, "book", 1);
                            this.getIsEditionOwned();
                            console.log(this.isOwned);
                            this.changeRef.detectChanges();
                        }
                    }, {
                        text: 'Añadir a lista de deseos',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "book", 0);
                            this.getIsEditionOwned();
                            this.changeRef.detectChanges();
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/book/" + this.id);
        });
    }
    removeEditionFromUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.http.removeEditionFromUser(this.id).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.getIsEditionOwned();
                                    this.changeRef.detectChanges();
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/book/" + this.id);
        });
    }
    deleteEdition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Seguro que deseas eliminar permanentemente la edición?',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.http.deleteEdition(this.id, "book").subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.navCtrl.navigateForward("/item/book/" + this.ItemID);
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
        });
    }
};
DetailBookComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DetailBookComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }]
};
DetailBookComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-book',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-book/detail-book.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-book.component.scss */ "./src/app/components/detail-book/detail-book.component.scss")).default]
    })
], DetailBookComponent);



/***/ }),

/***/ "./src/app/components/detail-comic/detail-comic.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/detail-comic/detail-comic.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLWNvbWljL2RldGFpbC1jb21pYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/detail-comic/detail-comic.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-comic/detail-comic.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailComicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComicComponent", function() { return DetailComicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");




let DetailComicComponent = class DetailComicComponent {
    constructor(http, navCtrl, alertCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        console.log("comic: ", this.id);
        this.getEdition();
        this.getIsEditionOwned();
        this.user = this.http.getUserID();
        console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
    }
    getEdition() {
        this.http.getEdition(this.id, "comic").subscribe((res) => {
            console.log("detalles: ", res);
            this.ItemID = res['ItemID'];
            this.Year = res['Year'];
            this.EAN13 = res['EAN13'];
            this.ISBNComic = res['ISBNComic'];
            this.TipoComic = res['TipoComic'];
            this.FormatoComic = res['FormatoComic'];
            this.NroComic = res['NroComic'];
            this.EditorialComic = res['EditorialComic'];
            this.Origen = res['Origen'];
            this.IdiomaComic = res['IdiomaComic'];
            this.CreatorUserID = res['CreatorUserID'];
        }, (error) => {
            console.error(error);
        });
    }
    getIsEditionOwned() {
        this.http.getEditionOwned(this.id).subscribe((res) => {
            if (res['body']) {
                this.isOwned = res['body'][0]['IsOwned'];
            }
            else
                this.isOwned = null;
            console.log("isOwned:", this.isOwned);
        }, (error) => {
            console.error(error);
        });
    }
    goToEdit() {
        this.navCtrl.navigateForward("/edit-comic/" + this.id);
    }
    addEditionToUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Tienes esta edición?',
                buttons: [
                    {
                        text: 'Lo tengo',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "comic", 1);
                        }
                    }, {
                        text: 'Añadir a lista de deseos',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "comic", 0);
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/comic/" + this.id);
        });
    }
    removeEditionFromUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.http.removeEditionFromUser(this.id).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.getIsEditionOwned();
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/comic/" + this.id);
        });
    }
    deleteEdition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Seguro que deseas eliminar permanentemente la edición?',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.http.deleteEdition(this.id, "comic").subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.navCtrl.navigateForward("/item/comic/" + this.ItemID);
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
        });
    }
};
DetailComicComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
DetailComicComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }]
};
DetailComicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-comic',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-comic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-comic/detail-comic.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-comic.component.scss */ "./src/app/components/detail-comic/detail-comic.component.scss")).default]
    })
], DetailComicComponent);



/***/ }),

/***/ "./src/app/components/detail-game/detail-game.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-game/detail-game.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLWdhbWUvZGV0YWlsLWdhbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/detail-game/detail-game.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/detail-game/detail-game.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailGameComponent", function() { return DetailGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");




let DetailGameComponent = class DetailGameComponent {
    constructor(http, navCtrl, alertCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        console.log("game: ", this.id);
        this.getEdition();
        this.getIsEditionOwned();
        this.user = this.http.getUserID();
        console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
    }
    getEdition() {
        this.http.getEdition(this.id, "game").subscribe((res) => {
            console.log("detalles: ", res);
            this.ItemID = res['ItemID'];
            this.Year = res['Year'];
            this.EAN13 = res['EAN13'];
            this.Plataforma = res['Plataforma'];
            this.FormatoJuego = res['FormatoJuego'];
            this.RegionJuego = res['RegionJuego'];
            this.Distribuidora = res['Distribuidora'];
            this.Estudio = res['Estudio'];
            this.NotasEdJuego = res['NotasEdJuego'];
            this.CreatorUserID = res['CreatorUserID'];
        }, (error) => {
            console.error(error);
        });
    }
    getIsEditionOwned() {
        this.http.getEditionOwned(this.id).subscribe((res) => {
            if (res['body']) {
                this.isOwned = res['body'][0]['IsOwned'];
            }
            else
                this.isOwned = null;
            console.log("isOwned:", this.isOwned);
        }, (error) => {
            console.error(error);
        });
    }
    goToEdit() {
        this.navCtrl.navigateForward("/edit-game/" + this.id);
    }
    addEditionToUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Tienes esta edición?',
                buttons: [
                    {
                        text: 'Lo tengo',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "game", 1);
                        }
                    }, {
                        text: 'Añadir a lista de deseos',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "game", 0);
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/game/" + this.id);
        });
    }
    removeEditionFromUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.http.removeEditionFromUser(this.id).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.getIsEditionOwned();
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/game/" + this.id);
        });
    }
    deleteEdition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Seguro que deseas eliminar permanentemente la edición?',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.http.deleteEdition(this.id, "game").subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.navCtrl.navigateForward("/item/game/" + this.ItemID);
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
        });
    }
};
DetailGameComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
DetailGameComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }]
};
DetailGameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-game/detail-game.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-game.component.scss */ "./src/app/components/detail-game/detail-game.component.scss")).default]
    })
], DetailGameComponent);



/***/ }),

/***/ "./src/app/components/detail-music/detail-music.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/detail-music/detail-music.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLW11c2ljL2RldGFpbC1tdXNpYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/detail-music/detail-music.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-music/detail-music.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailMusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailMusicComponent", function() { return DetailMusicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");




let DetailMusicComponent = class DetailMusicComponent {
    constructor(http, navCtrl, alertCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        console.log("music: ", this.id);
        this.getEdition();
        this.getIsEditionOwned();
        this.user = this.http.getUserID();
        console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
    }
    getEdition() {
        this.http.getEdition(this.id, "music").subscribe((res) => {
            console.log("detalles: ", res);
            this.ItemID = res['ItemID'];
            this.Year = res['Year'];
            this.EAN13 = res['EAN13'];
            this.Formato = res['Formato'];
            this.NroPistas = res['NroPistas'];
            this.NroDiscos = res['NroDiscos'];
            this.Sello = res['Sello'];
            this.NotasVersion = res['NotasVersion'];
            this.CreatorUserID = res['CreatorUserID'];
        }, (error) => {
            console.error(error);
        });
    }
    getIsEditionOwned() {
        this.http.getEditionOwned(this.id).subscribe((res) => {
            if (res['body']) {
                this.isOwned = res['body'][0]['IsOwned'];
            }
            else
                this.isOwned = null;
            console.log("isOwned:", this.isOwned);
        }, (error) => {
            console.error(error);
        });
    }
    goToEdit() {
        this.navCtrl.navigateForward("/edit-music/" + this.id);
    }
    addEditionToUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Tienes esta edición?',
                buttons: [
                    {
                        text: 'Lo tengo',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "music", 1);
                        }
                    }, {
                        text: 'Añadir a lista de deseos',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "music", 0);
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/music/" + this.id);
        });
    }
    removeEditionFromUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.http.removeEditionFromUser(this.id).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.getIsEditionOwned();
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/music/" + this.id);
        });
    }
    deleteEdition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Seguro que deseas eliminar permanentemente la edición?',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.http.deleteEdition(this.id, "music").subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.navCtrl.navigateForward("/item/music/" + this.ItemID);
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
        });
    }
};
DetailMusicComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
DetailMusicComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }]
};
DetailMusicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-music',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-music.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-music/detail-music.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-music.component.scss */ "./src/app/components/detail-music/detail-music.component.scss")).default]
    })
], DetailMusicComponent);



/***/ }),

/***/ "./src/app/components/detail-video/detail-video.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/detail-video/detail-video.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLXZpZGVvL2RldGFpbC12aWRlby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/detail-video/detail-video.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-video/detail-video.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailVideoComponent", function() { return DetailVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");




let DetailVideoComponent = class DetailVideoComponent {
    constructor(http, navCtrl, alertCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ngOnInit() {
        console.log("video: ", this.id);
        this.getEdition();
        this.getIsEditionOwned();
        this.user = this.http.getUserID();
        console.log(this.id, " creator y user: ", this.CreatorUserID, " ", this.user);
    }
    getEdition() {
        this.http.getEdition(this.id, "video").subscribe((res) => {
            console.log("detalles: ", res);
            this.ItemID = res['ItemID'];
            this.Year = res['Year'];
            this.EAN13 = res['EAN13'];
            this.FormatoVideo = res['FormatoVideo'];
            this.TipoVideo = res['TipoVideo'];
            this.Sistema = res['Sistema'];
            this.NroDiscosVideo = res['NroDiscosVideo'];
            this.RegionVideo = res['RegionVideo'];
            this.Temporada = res['Temporada'];
            this.VolumenVideo = res['VolumenVideo'];
            this.NroEpisodios = res['NroEpisodios'];
            this.CreatorUserID = res['CreatorUserID'];
        }, (error) => {
            console.error(error);
        });
    }
    getIsEditionOwned() {
        this.http.getEditionOwned(this.id).subscribe((res) => {
            if (res['body']) {
                this.isOwned = res['body'][0]['IsOwned'];
            }
            else
                this.isOwned = null;
            console.log("isOwned:", this.isOwned);
        }, (error) => {
            console.error(error);
        });
    }
    goToEdit() {
        this.navCtrl.navigateForward("/edit-video/" + this.id);
    }
    addEditionToUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Tienes esta edición?',
                buttons: [
                    {
                        text: 'Lo tengo',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "video", 1);
                        }
                    }, {
                        text: 'Añadir a lista de deseos',
                        handler: () => {
                            this.http.addEditionToUser(this.id, "video", 0);
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/video/" + this.id);
        });
    }
    removeEditionFromUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Estás seguro que deseas borrar la edición de tus items? Esto no eliminará la edición de la base de datos.',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Aceptar',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.http.removeEditionFromUser(this.id).subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.getIsEditionOwned();
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
            this.navCtrl.navigateForward("/edition/video/" + this.id);
        });
    }
    deleteEdition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Seguro que deseas eliminar permanentemente la edición?',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.http.deleteEdition(this.id, "video").subscribe(data => {
                                this.http.presentToast(data['body']['Message']);
                                if (data.status == 200) {
                                    this.navCtrl.navigateForward("/item/video/" + this.ItemID);
                                }
                            }, error => {
                                console.log(error);
                                return error;
                            });
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();
            console.log(result);*/
        });
    }
};
DetailVideoComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_3__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
DetailVideoComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }]
};
DetailVideoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail-video',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detail-video.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/detail-video/detail-video.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detail-video.component.scss */ "./src/app/components/detail-video/detail-video.component.scss")).default]
    })
], DetailVideoComponent);



/***/ }),

/***/ "./src/app/components/edition-list/edition-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/edition-list/edition-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdGlvbi1saXN0L2VkaXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/edition-list/edition-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edition-list/edition-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionListComponent", function() { return EditionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let EditionListComponent = class EditionListComponent {
    constructor(http, navCtrl) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.thumburl = null;
        /*imgserver = "http://91.117.92.244:8081/collectathon/uploads/";
        thumbdir = "http://91.117.92.244:8081/collectathon/uploads/thumb/";*/
        this.imgserver = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/";
        this.thumbdir = "http://www.mercury-retrograde.net/tfm/collectathon/uploads/thumb/";
    }
    goToEdition(id, type) {
        this.navCtrl.navigateForward("/edition/" + this.http.getItemTypeURL(type) + "/" + id);
    }
    ngOnInit() {
        this.http.findEditionImage(this.ed['EditionID']).subscribe((res) => {
            if (res['found'] == true) {
                this.thumburl = this.thumbdir + res['filename'];
            }
            else {
                console.log(this.ed['id'], " not found!");
                this.thumburl = "../../assets/noimage.jpg";
            }
        }, (error) => {
            console.error(error);
        });
    }
};
EditionListComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
EditionListComponent.propDecorators = {
    ed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ed',] }]
};
EditionListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edition-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edition-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edition-list/edition-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edition-list.component.scss */ "./src/app/components/edition-list/edition-list.component.scss")).default]
    })
], EditionListComponent);



/***/ }),

/***/ "./src/app/components/image-edition/image-edition.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/image-edition/image-edition.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtZWRpdGlvbi9pbWFnZS1lZGl0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/image-edition/image-edition.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-edition/image-edition.component.ts ***!
  \*********************************************************************/
/*! exports provided: ImageEditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageEditionComponent", function() { return ImageEditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/Camera/ngx */ "./node_modules/@ionic-native/Camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/File/ngx */ "./node_modules/@ionic-native/File/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");











const STORAGE_KEY = 'my_images';
let ImageEditionComponent = class ImageEditionComponent {
    constructor(route, navCtrl, camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath) {
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
    ngOnInit() {
        this.http.findEditionImage(this.id).subscribe((res) => {
            console.log(res['found']);
            if (res['found'] == true) {
                console.log("Found!");
                this.imageurl = this.imgserver + res['filename'];
                this.thumburl = this.thumbdir + res['filename'];
            }
            else {
                console.log(this.id, " not found!");
                this.imageurl = null;
                this.thumburl = "../../assets/noimage.jpg";
            }
        }, (error) => {
            console.error(error);
        });
        console.log(this.imageurl);
    }
    presentToast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                position: 'bottom',
                duration: 3000
            });
            toast.present();
        });
    }
    pathForImage(img) {
        if (img === null) {
            return '';
        }
        else {
            let converted = this.webview.convertFileSrc(img);
            return converted;
        }
    }
    selectImage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Seleccionar fuente",
                buttons: [{
                        text: 'Cargar imagen',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Tomar foto',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType) {
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });
    }
    updateStoredImage(name) {
        this.storage.get(STORAGE_KEY).then(images => {
            let arr = JSON.parse(images);
            if (!arr) {
                let newImages = [name];
                this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            let filePath = this.file.dataDirectory + name;
            let resPath = this.pathForImage(filePath);
            let newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            this.images = newEntry;
            this.ref.detectChanges(); // trigger change detection cycle
        });
    }
    createFileName() {
        var newFileName = this.id + ".jpg";
        return newFileName;
    }
    copyFileToLocalDir(namePath, currentName, newFileName) {
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
            this.updateStoredImage(newFileName);
            this.startUpload(this.images);
        }, error => {
            this.presentToast('Error guardando la imagen.');
        });
    }
    // Inspired by https://golb.hplar.ch/2017/02/Uploading-pictures-from-Ionic-2-to-Spring-Boot.html
    startUpload(imgEntry) {
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(entry => {
            entry.file(file => this.readFile(file));
        })
            .catch(err => {
            this.presentToast('Error leyendo el fichero.');
        });
    }
    readFile(file) {
        const reader = new FileReader();
        reader.onload = () => {
            const formData = new FormData();
            const imgBlob = new Blob([reader.result], {
                type: file.type
            });
            formData.append('file', imgBlob, file.name);
            this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    }
    uploadImageData(formData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Subiendo imagen...',
            });
            yield loading.present();
            this.http.uploadEditionImage(formData)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(() => {
                loading.dismiss();
            }))
                .subscribe(res => {
                if (res['success']) {
                    this.presentToast('La imagen se subió con éxito.');
                    this.http.findEditionImage(this.id);
                }
                else {
                    this.presentToast('Error en la carga al servidor.');
                }
            });
        });
    }
};
ImageEditionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_native_Camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_File_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_10__["ApiRestService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"] }
];
ImageEditionComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }],
    isCreator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['isCreator',] }]
};
ImageEditionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-edition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./image-edition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/image-edition/image-edition.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./image-edition.component.scss */ "./src/app/components/image-edition/image-edition.component.scss")).default]
    })
], ImageEditionComponent);



/***/ }),

/***/ "./src/app/components/persona/persona.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/persona/persona.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uYS9wZXJzb25hLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/persona/persona.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/persona/persona.component.ts ***!
  \*********************************************************/
/*! exports provided: PersonaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaComponent", function() { return PersonaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PersonaComponent = class PersonaComponent {
    constructor() {
        if ((this.Role === "Principal") || (this.Role === "Secundario")) {
            this.Role = "Actor " + this.Role.toLowerCase();
        }
    }
    ngOnInit() { }
};
PersonaComponent.ctorParameters = () => [];
PersonaComponent.propDecorators = {
    Names: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['Names',] }],
    LastNames: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['LastNames',] }],
    Role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['Role',] }]
};
PersonaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-persona',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./persona.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/persona/persona.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./persona.component.scss */ "./src/app/components/persona/persona.component.scss")).default]
    })
], PersonaComponent);



/***/ }),

/***/ "./src/app/components/present-action-sheet/present-action-sheet.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/present-action-sheet/present-action-sheet.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlc2VudC1hY3Rpb24tc2hlZXQvcHJlc2VudC1hY3Rpb24tc2hlZXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/present-action-sheet/present-action-sheet.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/present-action-sheet/present-action-sheet.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PresentActionSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentActionSheetComponent", function() { return PresentActionSheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let PresentActionSheetComponent = class PresentActionSheetComponent {
    constructor(navCtrl, actionSheetController) {
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
    }
    ngOnInit() { }
    presentActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Action sheet");
            const actionSheet = yield this.actionSheetController.create({
                header: 'Selecciona tipo',
                buttons: [{
                        text: 'Libro',
                        icon: 'book',
                        handler: () => {
                            console.log('Nuevo libro');
                            this.navCtrl.navigateForward("/add-book");
                        }
                    }, {
                        text: 'Música',
                        icon: 'musical-notes',
                        handler: () => {
                            console.log('Nuevo álbum');
                            this.navCtrl.navigateForward("/add-music");
                        }
                    }, {
                        text: 'Vídeo',
                        icon: 'film',
                        handler: () => {
                            console.log('Nuevo vídeo');
                            this.navCtrl.navigateForward("/add-video");
                        }
                    }, {
                        text: 'Videojuego',
                        icon: 'game-controller',
                        handler: () => {
                            console.log('Nuevo videojuego');
                            this.navCtrl.navigateForward("/add-game");
                        }
                    }, {
                        text: 'Cómic',
                        icon: 'chatbubbles',
                        handler: () => {
                            console.log('Nuevo Comic');
                            this.navCtrl.navigateForward("/add-comic");
                        }
                    }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
PresentActionSheetComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] }
];
PresentActionSheetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-present-action-sheet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./present-action-sheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/present-action-sheet/present-action-sheet.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./present-action-sheet.component.scss */ "./src/app/components/present-action-sheet/present-action-sheet.component.scss")).default]
    })
], PresentActionSheetComponent);



/***/ }),

/***/ "./src/app/components/website-list/website-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/website-list/website-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/website-list/website-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/website-list/website-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_website_create_website_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../create-website/create-website.page */ "./src/app/create-website/create-website.page.ts");
/* harmony import */ var _edit_website_edit_website_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../edit-website/edit-website.page */ "./src/app/edit-website/edit-website.page.ts");







let WebsiteListComponent = class WebsiteListComponent {
    constructor(http, navCtrl, route, router, alertCtrl, modalController) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.getWebsites();
        this.user = this.http.getUserID();
        console.log("user: ", this.user);
    }
    getWebsites() {
        this.webs = [];
        this.http.getWebsitesForObject(this.id, this.type).subscribe((res) => {
            this.webs = res['body'];
            console.log('webs ', this.webs);
        }, (error) => {
            console.error(error);
        });
    }
    goToNewWebsite() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Página modal");
            const modal = yield this.modalController.create({
                component: _create_website_create_website_page__WEBPACK_IMPORTED_MODULE_5__["CreateWebsitePage"],
                componentProps: {
                    "id": this.id,
                    "type": this.type
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned != null) {
                    this.webs = [];
                    this.newWeb = dataReturned;
                    console.log("New Web: ", this.newWeb);
                    this.getWebsites();
                }
            });
            return yield modal.present();
        });
    }
    deleteWebsite(webid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Confirmar',
                message: '¿Seguro que deseas eliminar permanentemente la página web?',
                buttons: [
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.http.deleteWebsite(webid);
                            this.webs = [];
                            this.getWebsites();
                        }
                    }, {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancelar');
                        }
                    }
                ]
            });
            yield alert.present();
            /*let result = await alert.onDidDismiss();*/
        });
    }
    goToEditWebsite(webid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("Edit website ", webid);
            const modal = yield this.modalController.create({
                component: _edit_website_edit_website_page__WEBPACK_IMPORTED_MODULE_6__["EditWebsitePage"],
                componentProps: {
                    "id": webid
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                if (dataReturned != null) {
                    this.webs = [];
                    console.log("Edit Web: ", dataReturned);
                    this.getWebsites();
                }
            });
            return yield modal.present();
        });
    }
    getIcon(url) {
        var icon = "compass-outline";
        if (url.indexOf("amazon.") > 0) {
            icon = "logo-amazon";
        }
        else if (url.indexOf("facebook.com") > 0) {
            icon = "logo-facebook";
        }
        else if (url.indexOf("twitter.com") > 0) {
            icon = "logo-twitter";
        }
        else if (url.indexOf("instagram.com") > 0) {
            icon = "logo-instagram";
        }
        else if (url.indexOf("playstation.com") > 0) {
            icon = "logo-playstation";
        }
        else if (url.indexOf("steampowered.com") > 0) {
            icon = "icon-steam";
        }
        else if (url.indexOf("xbox.com") > 0) {
            icon = "logo-xbox";
        }
        else if (url.indexOf("youtube.com") > 0) {
            icon = "logo-youtube";
        }
        return icon;
    }
};
WebsiteListComponent.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_2__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
WebsiteListComponent.propDecorators = {
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['id',] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['type',] }]
};
WebsiteListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-website-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./website-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/website-list/website-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./website-list.component.scss */ "./src/app/components/website-list/website-list.component.scss")).default]
    })
], WebsiteListComponent);



/***/ }),

/***/ "./src/app/create-website/create-website.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/create-website/create-website.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS13ZWJzaXRlL2NyZWF0ZS13ZWJzaXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/create-website/create-website.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/create-website/create-website.page.ts ***!
  \*******************************************************/
/*! exports provided: CreateWebsitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateWebsitePage", function() { return CreateWebsitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let CreateWebsitePage = class CreateWebsitePage {
    constructor(modalController, navParams, http, navCtrl, route, router, formBuilder) {
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
    ngOnInit() {
        this.id = this.navParams.data.id;
        this.type = this.navParams.data.type;
        this.newweb = this.formBuilder.group({
            'URL': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('(?:(?:(?:ht|f)tp)s?://)?[\\w_-]+(?:\\.[\\w_-]+)+([\\w.,@?^=%&:/~+#-]*[\\w@?^=%&/~+#-])?')
                ])],
            'Text': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.newweb.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.newweb.value);
            this.http.createWebsite(this.newweb.value, this.id, this.type).subscribe(data => {
                console.log("Web " + data['body']);
                this.WebsiteID = data['body']['WebsiteID'];
                console.log("antes de cerrar modal ", this.WebsiteID);
                this.closeModal();
            }, error => {
                console.log(error);
            });
        }
    }
    get errorControl() {
        return this.newweb.controls;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.WebsiteID);
        });
    }
};
CreateWebsitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
CreateWebsitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-website',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-website.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-website/create-website.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-website.page.scss */ "./src/app/create-website/create-website.page.scss")).default]
    })
], CreateWebsitePage);



/***/ }),

/***/ "./src/app/edit-website/edit-website.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/edit-website/edit-website.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtd2Vic2l0ZS9lZGl0LXdlYnNpdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/edit-website/edit-website.page.ts":
/*!***************************************************!*\
  !*** ./src/app/edit-website/edit-website.page.ts ***!
  \***************************************************/
/*! exports provided: EditWebsitePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWebsitePage", function() { return EditWebsitePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let EditWebsitePage = class EditWebsitePage {
    constructor(modalController, navParams, http, navCtrl, route, router, formBuilder) {
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
    ngOnInit() {
        this.id = this.navParams.data.id;
        this.getWebsite();
    }
    getWebsite() {
        this.http.getWebsite(this.id).subscribe((res) => {
            this.web = this.formBuilder.group({
                'URL': [res['URL'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
                'Text': [res['Text'], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
            });
            console.log("res: ", res);
        }, (error) => {
            console.error(error);
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.web.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            this.web.value.WebsiteID = this.id;
            console.log(this.web.value);
            this.http.updateWebsite(this.web.value).subscribe(data => {
                console.log("Web " + data['body']);
                this.WebsiteID = data['body']['WebsiteID'];
                console.log("antes de cerrar modal ", this.WebsiteID);
                this.closeModal();
            }, error => {
                console.log(error);
            });
        }
    }
    get errorControl() {
        return this.web.controls;
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(this.WebsiteID);
        });
    }
};
EditWebsitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_4__["ApiRestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
EditWebsitePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-website',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-website.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-website/edit-website.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-website.page.scss */ "./src/app/edit-website/edit-website.page.scss")).default]
    })
], EditWebsitePage);



/***/ })

}]);
//# sourceMappingURL=default~add-person-add-person-module~allpeople-allpeople-module~collection-collection-module~collect~dc4c3a90-es2015.js.map