(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Configuración</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <!--<ion-avatar slot=\"end\">\n    <img src=\"{{user.photoURL}}\" />\n  </ion-avatar>-->\n  <!--<ion-thumbnail slot=\"start\">\n    <ion-img [src]=\"user.photoURL\"></ion-img>\n  </ion-thumbnail>-->\n  <form [formGroup]=\"userform\" (ngSubmit)=\"setNickname()\" novalidate>\n  <ion-list *ngIf=\"user\">\n    <ion-item><h3>Detalles de Usuario</h3></ion-item>\n    <ion-item><ion-label><strong>Email:</strong> {{user.email}}</ion-label></ion-item>\n    <ion-item><ion-label><strong>Apodo:</strong></ion-label> \n      <ion-input #nickname placeholder=\"Escribe\" formControlName=\"nickname\"\n      [value]=\"nickname\"></ion-input>\n      <ion-button color=\"primary\" type=\"submit\" >Editar</ion-button>\n    </ion-item>\n    <!--<ion-item><ion-label><strong>UID:</strong> {{user.uid}}</ion-label></ion-item>-->\n    <!--<ion-item><a href=\"{{user.photoURL}}\">{{user.photoURL}}</a></ion-item>-->\n  </ion-list>\n  <ion-button (click)=\"signout()\" expand=\"block\">Cerrar sesión</ion-button>\n</form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/user/user-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/user/user-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: UserPageRoutingModule */

    /***/
    function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
        return UserPageRoutingModule;
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


      var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user.page */
      "./src/app/user/user.page.ts");

      var routes = [{
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
      }];

      var UserPageRoutingModule = function UserPageRoutingModule() {
        _classCallCheck(this, UserPageRoutingModule);
      };

      UserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user/user.module.ts":
    /*!*************************************!*\
      !*** ./src/app/user/user.module.ts ***!
      \*************************************/

    /*! exports provided: UserPageModule */

    /***/
    function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
        return UserPageModule;
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


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-routing.module */
      "./src/app/user/user-routing.module.ts");
      /* harmony import */


      var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user.page */
      "./src/app/user/user.page.ts");

      var UserPageModule = function UserPageModule() {
        _classCallCheck(this, UserPageModule);
      };

      UserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
        declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
      })], UserPageModule);
      /***/
    },

    /***/
    "./src/app/user/user.page.scss":
    /*!*************************************!*\
      !*** ./src/app/user/user.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user/user.page.ts":
    /*!***********************************!*\
      !*** ./src/app/user/user.page.ts ***!
      \***********************************/

    /*! exports provided: UserPage */

    /***/
    function srcAppUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPage", function () {
        return UserPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/auth.service.ts");
      /* harmony import */


      var _api_rest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../api-rest.service */
      "./src/app/api-rest.service.ts");

      var UserPage = /*#__PURE__*/function () {
        function UserPage(router, auth, navCtrl, http, formBuilder) {
          _classCallCheck(this, UserPage);

          this.router = router;
          this.auth = auth;
          this.navCtrl = navCtrl;
          this.http = http;
          this.formBuilder = formBuilder;
          this.user = JSON.parse(localStorage.getItem('user'));
          console.log(this.user);
          console.log("UserID ", localStorage.getItem('UserID'));
          /*this.http.getUserNickname();*/

          console.log("Nickname ", JSON.parse(localStorage.getItem('Nickname')));
        }

        _createClass(UserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userform = this.formBuilder.group({
              'nickname': [JSON.parse(localStorage.getItem('Nickname'))]
            });

            if (!localStorage.getItem('user')) {
              this.navCtrl.navigateRoot("/login");
            }
          }
        }, {
          key: "signout",
          value: function signout() {
            //this.authService.SignOut();
            console.log("cerrando");
            this.auth.logout();
            this.router.navigate(['login']);
          }
        }, {
          key: "setNickname",
          value: function setNickname() {
            this.http.updateUser(this.user.uid, this.user.email, this.userform.value['nickname']);
          }
        }]);

        return UserPage;
      }();

      UserPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _api_rest_service__WEBPACK_IMPORTED_MODULE_6__["ApiRestService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      };

      UserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user.page.scss */
        "./src/app/user/user.page.scss"))["default"]]
      })], UserPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-user-module-es5.js.map