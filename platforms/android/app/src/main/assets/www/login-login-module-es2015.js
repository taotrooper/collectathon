(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"exitApp()\"><ion-icon name=\"close\"></ion-icon></ion-button>\n    </ion-buttons>\n    <ion-title>Collectathon - Inicia sesión</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"loginform\">    \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" #email formControlName=\"email\" required></ion-input>\n    </ion-item> \n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\" #password formControlName=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n      <div padding>\n        <ion-button (click)=\"login(loginform.email, loginform.password)\" type=\"submit\" \n        color=\"primary\" block>Iniciar sesión</ion-button>\n        <ion-button (click)=\"signin(loginform.email, loginform.password)\" type=\"submit\" \n        color=\"secondary\" block>Registrarse</ion-button>\n        <!--<ion-button type=\"submit\" color=\"danger\" (click)=\"loginGoogle()\">\n          <ion-icon name=\"logo-google\" style=\"margin-right: 5px\"></ion-icon>Con cuenta Google\n        </ion-button>-->\n        <ion-button fill=\"clear\" (click)=\"forgotPassword()\">¿Olvidaste tu contraseña?</ion-button>\n      </div>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _api_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api-rest.service */ "./src/app/api-rest.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");








let LoginPage = class LoginPage {
    constructor(http, 
    /*public authService: AuthenticationService,*/
    router, ngFireAuth, navCtrl, auth, alertCtrl, formBuilder) {
        this.http = http;
        this.router = router;
        this.ngFireAuth = ngFireAuth;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        /*  user: any;*/
        this.user = { email: '', password: '' };
        this.isSubmitted = false;
        this.loginform = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
        this.ngFireAuth.onAuthStateChanged((user) => {
            if (user) {
                this.router.navigate(['home']);
            }
        });
    }
    /*ngOnInit() {
      this.user = JSON.parse(localStorage.getItem('user'));
      if (this.user !== null && this.user.emailVerified !== false) {
        this.router.navigate(['home']);
      }
    }
  
    logIn(email, password) {
      this.authService.SignIn(email.value, password.value)
        .then((res) => {
          /*if(this.authService.isEmailVerified) {*/ //ya estaba note
    /*this.http.login();
    this.router.navigate(['home']);*/
    /*} else { //ya estaba note
      window.alert('Error: Verifica tu dirección de correo antes')
      return false;
    }
  }).catch((error) => {
    window.alert("logIn error: "+error.message)
  })
}

goToRegister() {
this.router.navigate(['register']);
}*/
    ngOnInit() {
        this.loginform = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }
    signin(email, password) {
        this.isSubmitted = true;
        if (!this.loginform.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.loginform.value);
            this.auth.registerUser(this.loginform.value['email'], this.loginform.value['password'])
                .then((user) => {
                this.auth.setUser();
                this.router.navigate(['home']);
            })
                .catch(err => {
                window.alert("signin error: " + err.message);
            });
        }
    }
    login(email, password) {
        this.isSubmitted = true;
        if (!this.loginform.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.loginform.value);
            this.auth.loginUser(this.loginform.value['email'], this.loginform.value['password'])
                .then((user) => {
                this.auth.setUser();
                this.router.navigate(['home']);
            })
                .catch(err => {
                window.alert("login error: " + err.message);
                console.log(err);
            });
        }
    }
    loginGoogle() {
        console.log("Estoy en login logingoogle");
        this.auth.loginGoogle()
            .then((user) => {
            this.auth.setUser();
            this.router.navigate(['home']);
        })
            .catch(err => {
            window.alert("login error: " + err.message);
            console.log(err);
        });
    }
    forgotPassword() {
        this.isSubmitted = true;
        if (!this.loginform.value['email']) {
            this.http.presentToast("Asegúrate de escribir tu correo en el formulario.");
            return false;
        }
        else {
            this.auth.SendPasswordReset(this.loginform.value['email']);
        }
    }
    exitApp() {
        navigator['app'].exitApp();
    }
};
LoginPage.ctorParameters = () => [
    { type: _api_rest_service__WEBPACK_IMPORTED_MODULE_5__["ApiRestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map